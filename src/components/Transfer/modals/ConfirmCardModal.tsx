import React, { FunctionComponent } from "react";
import { connectModal } from "redux-modal";

interface Props {
  closeModal: () => void;
  continuteTransfer: () => void;
}

const ConfirmCardModal:React.FunctionComponent<Props> = (props) => {

  const handleTransfer = (e: any) => {
    e.preventDefault();
    props.continuteTransfer();
    props.closeModal();
  }

  return (
    <div
      className="modal-center"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.closeModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleTransfer}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default connectModal({ name: "CONFIRM_CARD_MODAL", destroyOnHide: true })(ConfirmCardModal as FunctionComponent);
