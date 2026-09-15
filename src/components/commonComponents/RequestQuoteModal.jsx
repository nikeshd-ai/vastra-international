import ReqQuote from "../contactComponents/ReqQuote";

const RequestQuoteModal = () => {
    return (
        <div
            className="modal fade"
            id="requestQuoteModal"
            tabIndex="-1"
            aria-labelledby="requestQuoteModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="requestQuoteModalLabel">
                            Request a Quote
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <ReqQuote />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RequestQuoteModal;