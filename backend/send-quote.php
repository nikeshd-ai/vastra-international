<?php
// Vastra International - Request a Quote mail endpoint.
// Run this file through Apache/PHP, not Vite directly.

header('Content-Type: application/json; charset=utf-8');

$allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174',
    'http://localhost:4173',
    'http://127.0.0.1:4173',

    // Add your exact production frontend origin here.
    // Example: 'https://www.your-domain.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

// Load configuration and PHPMailer.
$configFile = __DIR__ . '/config.php';
$autoload = __DIR__ . '/vendor/autoload.php';

if (!is_file($configFile)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Email configuration is missing.',
    ]);
    exit;
}

if (!is_file($autoload)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'PHPMailer is not installed. Run composer install in the backend folder.',
    ]);
    exit;
}

$config = require $configFile;

if (!is_array($config)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email configuration.',
    ]);
    exit;
}

require_once $autoload;

// Validate SMTP configuration.
foreach (
    ['smtp_host', 'smtp_username', 'smtp_password', 'from_email'] as $key
) {
    if (
        !isset($config[$key]) ||
        !is_string($config[$key]) ||
        trim($config[$key]) === ''
    ) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'SMTP configuration is incomplete.',
        ]);
        exit;
    }
}

if (
    !filter_var($config['from_email'], FILTER_VALIDATE_EMAIL) ||
    !filter_var($config['smtp_username'], FILTER_VALIDATE_EMAIL)
) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid sender email configuration.',
    ]);
    exit;
}

if (
    empty($config['to_emails']) ||
    !is_array($config['to_emails'])
) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Recipient email configuration is incomplete.',
    ]);
    exit;
}

$recipients = [];

foreach ($config['to_emails'] as $recipient) {
    if (
        is_string($recipient) &&
        filter_var(trim($recipient), FILTER_VALIDATE_EMAIL)
    ) {
        $recipients[] = trim($recipient);
    }
}

$recipients = array_values(array_unique($recipients));

if (count($recipients) === 0) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'No valid recipient email addresses configured.',
    ]);
    exit;
}

// Decode submitted JSON.
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON request data.',
    ]);
    exit;
}

// Read the existing form fields.
$fields = [
    'organisation',
    'contactPerson',
    'email',
    'phone',
    'buyerType',
    'category',
    'product',
    'quantity',
    'neededBy',
    'notes',
];

$values = [];

foreach ($fields as $field) {
    $value = $data[$field] ?? '';

    if (!is_string($value) && !is_numeric($value)) {
        $value = '';
    }

    $values[$field] = trim((string) $value);
}

// Required fields.
$required = [
    'organisation' => 'Organisation',
    'contactPerson' => 'Contact person',
    'email' => 'Email',
    'phone' => 'Phone / WhatsApp number',
    'category' => 'Category',
    'quantity' => 'Approx. quantity',
];

foreach ($required as $field => $label) {
    if ($values[$field] === '') {
        http_response_code(422);
        echo json_encode([
            'success' => false,
            'message' => $label . ' is required.',
        ]);
        exit;
    }
}

// Validate customer email.
if (!filter_var($values['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Enter a valid email address.',
    ]);
    exit;
}

// Prevent letters in the phone number.
if (preg_match('/[a-zA-Z]/', $values['phone'])) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Phone / WhatsApp number cannot contain letters.',
    ]);
    exit;
}

// Email field labels.
$labels = [
    'organisation' => 'Organisation',
    'contactPerson' => 'Contact Person',
    'email' => 'Customer Email',
    'phone' => 'Phone / WhatsApp',
    'buyerType' => 'Buyer Type',
    'category' => 'Category',
    'product' => 'Style or Product',
    'quantity' => 'Approx. Quantity',
    'neededBy' => 'Needed By',
    'notes' => 'Specification Notes',
];

try {
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->Port = (int) ($config['smtp_port'] ?? 587);


    // Configure these values in backend/config.php.
    $smtpSecure = strtolower(
        trim((string) ($config['smtp_secure'] ?? 'tls'))
    );

    if ($smtpSecure === 'ssl') {
        $mail->SMTPSecure =
            \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($smtpSecure === 'tls') {
        $mail->SMTPSecure =
            \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        throw new \RuntimeException(
            'Invalid SMTP encryption setting.'
        );
    }

    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        $config['from_email'],
        $config['from_name'] ?? 'Vastra International'
    );

    // Send to both configured owner addresses.
    foreach ($recipients as $recipient) {
        $mail->addAddress($recipient);
    }

    // Replies go directly to the customer.
    $mail->addReplyTo(
        $values['email'],
        $values['contactPerson']
    );

    $mail->Subject = 'New Request a Quote - Vastra International';
    $mail->isHTML(true);

    // Build HTML email.
    $html = '<h2>New Request a Quote</h2>';
    $html .= '<table cellpadding="8" cellspacing="0" border="1" ';
    $html .= 'style="border-collapse:collapse;border-color:#ddd">';

    foreach ($labels as $field => $label) {
        $safeLabel = htmlspecialchars(
            $label,
            ENT_QUOTES | ENT_SUBSTITUTE,
            'UTF-8'
        );

        $value = $values[$field] !== ''
            ? $values[$field]
            : 'Not provided';

        $safeValue = htmlspecialchars(
            $value,
            ENT_QUOTES | ENT_SUBSTITUTE,
            'UTF-8'
        );

        $html .= '<tr>';
        $html .= '<th align="left">' . $safeLabel . '</th>';
        $html .= '<td>' . nl2br($safeValue) . '</td>';
        $html .= '</tr>';
    }

    $html .= '</table>';

    $mail->Body = $html;

    // Plain-text alternative.
    $plainLines = [];

    foreach ($labels as $field => $label) {
        $plainLines[] = $label . ': ' .
            ($values[$field] !== ''
                ? $values[$field]
                : 'Not provided');
    }

    $mail->AltBody =
        "New Request a Quote - Vastra International\n\n" .
        implode("\n", $plainLines);

    // Send email.
    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Quote request sent successfully.',
    ]);
} catch (\Throwable $error) {
    error_log(
        'Vastra quote email error: ' . $error->getMessage()
    );

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Unable to send your request right now. Check the PHP error log and SMTP configuration.',
    ]);
}