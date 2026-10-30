# Vastra International PHPMailer backend (WAMP)

This is a new PHP mail endpoint; no pre-existing API is required. The endpoint is a small backend route that your React form POSTs to.

## Install locally
1. Copy this entire `backend` folder to `C:\wamp64\www\vastra-international-api`.
2. Open PowerShell in that folder and run `composer install`. This creates `vendor/` and installs PHPMailer.
3. Copy `config.php.example` to `config.php`.
4. Edit `config.php` with SMTP details provided by your email host. Do not put SMTP credentials in React or commit `config.php`.
5. Ensure WAMP Apache and PHP are running.
6. Keep the React endpoint URL as `http://localhost/vastra-international-api/send-quote.php` for local development.
7. Start React using `npm run dev`; submit the Request a Quote form.

## SMTP config fields
- `smtp_host`: SMTP hostname supplied by your mail provider.
- `smtp_username`: full mailbox/login name.
- `smtp_password`: mailbox SMTP password or provider app password.
- `smtp_port`: 587 (STARTTLS) or 465 (SSL/TLS). The PHP file selects encryption based on the port.
- `from_email`: should generally be the authenticated mailbox or an authorized sender.
- `to_email`: inbox that receives quote requests.

## Test endpoint
Open `http://localhost/vastra-international-api/send-quote.php` in a browser. A JSON `405 Method not allowed` response is expected because the endpoint accepts POST, not GET.

## Important
- React running on Vite and PHP running on WAMP are separate servers. Do not open the PHP file through the Vite server.
- The endpoint allows local Vite origins on ports 5173 and 4173. Add your exact production frontend origin to `$allowedOrigins` before deployment.
- The SMTP credentials are not included because they must come from your email provider. Email sending cannot succeed until valid SMTP settings are supplied.
- For production, use HTTPS and hosting that supports PHP.
