import React, { FunctionComponent } from "react";
import { connectModal } from "redux-modal";

interface Props {
  cardInfo: any;
  money: number;
  isErrorGetInfo: boolean;
  closeModal: () => void;
  continuteTransfer: () => void;
}

const InfoCustomerModal: React.FunctionComponent<Props> = (props) => {
  const handleTransfer = (e: any) => {
    e.preventDefault();
    props.continuteTransfer();
    props.closeModal();
  };

  // console.log("info modal", props.cardInfo);

  const cardInfoModal = (cardInfo: any) => {
    return (
      <>
        <span>Số tài khoản: {cardInfo && cardInfo.card_number}</span>
        <br />
        <span>Họ và tên: {cardInfo && cardInfo.full_name}</span>
        <br />
        <span>Email: {cardInfo && cardInfo.email}</span>
        <br />
        <span>SĐT: {cardInfo && cardInfo.phone_number}</span>
        <br />
        <span>Số tiền nạp: {cardInfo && props.money} (VND)</span>
      </>
    );
  };

  const errorModal = (x: number) => {
    return x === 1 ? <span>Số tài khoản không hợp lệ!</span> : <span>Số tiền không hợp lệ!</span>;
  };

  return (
    <div className="modal-center">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thông tin tài khoản nạp tiền</h5>
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
            {!props.isErrorGetInfo ? errorModal(1) : props.money <= 0 ? errorModal(2) : cardInfoModal(props.cardInfo)}
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
            {props.isErrorGetInfo && props.money > 0 && (
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
  name: "INFO_CUSTOMER_MODAL",
  destroyOnHide: true,
})(InfoCustomerModal as FunctionComponent);
