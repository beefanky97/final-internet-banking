import React, { FunctionComponent, useState } from "react";
import { connectModal } from "redux-modal";
import { appAxios } from "src/api/appAxios";

interface Props {
  cardInfo: any;
  isErrorGetInfo: boolean;
  closeModal: () => void;
  continuteTransfer: (otp: string) => void;
}

const ConfirmCardModal: React.FunctionComponent<Props> = (props) => {
  const [otp, setOtp] = useState("");


  const handleTransfer = (e: any) => {
    e.preventDefault();
    props.continuteTransfer(otp);
    props.closeModal();
  };

  console.log("props", props.cardInfo);

  const getOTP = () => {
    appAxios.get("/transactions/verify-email");
  }

  const cardInfoModal = (cardInfo: any) => {
    return (
      <>
        <span className="info-row"><b>Số tài khoản:</b> {cardInfo && cardInfo.card_number}</span>
        <span className="info-row"><b>Tên người nhận:</b> {cardInfo && cardInfo.full_name}</span>
        <span className="info-row"><b>Ngân hàng:</b> {cardInfo && cardInfo.bank_name}</span>
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
            <h2 className="modal-title">Thông tin tài khoản</h2>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {!props.isErrorGetInfo ? cardInfoModal(props.cardInfo) : errorModal()}
            <div className="code-block">
              <input className="code-block__input" onChange={e => setOtp(e.target.value)} type="text"/>
              <button className="code-block__button" onClick={getOTP}>Lấy mã</button>
            </div>
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
