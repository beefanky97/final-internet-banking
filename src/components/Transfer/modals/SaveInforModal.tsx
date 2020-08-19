import React, { FunctionComponent, useState } from "react";
import { connectModal } from "redux-modal";
import { appAxios } from "src/api/appAxios";

interface Props {
  cardInfo: any;
  handleSaveInfor: any;
  closeModal: () => void;
}

const SaveInforModal: React.FunctionComponent<Props> = (props) => {
  const [reminiscentName, setReminiscentName] = useState(props.cardInfo.full_name);

  console.log("props", props.cardInfo);

  const handleSaveInfor = (e: any) => {
    e.preventDefault();
    console.log("over333", reminiscentName);
    if(reminiscentName === "") {
      props.handleSaveInfor(props.cardInfo.card_number, props.cardInfo.full_name);
    } else {
      props.handleSaveInfor(props.cardInfo.card_number, reminiscentName);
    }
    props.closeModal();
  };

  console.log("props", reminiscentName === "");

  return (
    <div className="modal-center">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Lưu thông tin thụ hưởng</h2>
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
            <span className="info-row">
              <b>Số tài khoản:</b> {props.cardInfo && props.cardInfo.card_number}
            </span>
            <span className="info-row">
              <b>Tên người nhận:</b>
              <input
                onChange={(e) => setReminiscentName(e.target.value)}
                placeholder={props.cardInfo && props.cardInfo.full_name}
                type="text"
              />
            </span>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.closeModal}
            >
              Huỷ
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSaveInfor}>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connectModal({
  name: "SAVE_INFOR_MODAL",
  destroyOnHide: true,
})(SaveInforModal as FunctionComponent);
