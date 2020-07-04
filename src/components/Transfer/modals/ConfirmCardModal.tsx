import React, { FunctionComponent } from "react";
import { connectModal } from "redux-modal";

interface Props {
  cardInfo: any;
  isErrorGetInfo: boolean;
  closeModal: () => void;
  continuteTransfer: () => void;
}

const ConfirmCardModal: React.FunctionComponent<Props> = (props) => {
  const handleTransfer = (e: any) => {
    e.preventDefault();
    props.continuteTransfer();
    props.closeModal();
  };

  console.log("info modal", props.isErrorGetInfo);

  const cardInfoModal = (cardInfo: any) => {
    return (
      <>
        <span>Số tài khoản: {cardInfo && cardInfo.card_number}</span>
        <br />
        <span>Tên người nhận: {cardInfo && cardInfo.name}</span>
      </>
    );
  };

  const errorModal = () => {
    return <span>Số tài khoản không hợp lệ!</span>;
  };

  return (
    <div className="modal-center">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thông tin tài khoản muốn chuyển</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {!props.isErrorGetInfo ? cardInfoModal(props.cardInfo) : errorModal()}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.closeModal}
            >
              Quay về
            </button>
            {!props.isErrorGetInfo && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleTransfer}
              >
                Chuyển tiền
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connectModal({
  name: "CONFIRM_CARD_MODAL",
  destroyOnHide: true,
})(ConfirmCardModal as FunctionComponent);
