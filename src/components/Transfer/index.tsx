import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { show, hide } from "redux-modal";

import ConfirmCardModal from "src/components/Transfer/modals/ConfirmCardModal";
import { getCardInfo, transfer } from "src/app/actions/creditActions";
import HeaderBody from "../commons/HeaderBody";

interface Props {
  cardInfo: any;
  openModal: (name: string) => void;
  getCardInfo: any;
  transfer: (transferInfo: Object) => void;
  closeModal: () => void;
}

const Transfer: React.FC<Props> = (props) => {
  const [partnerCode, setPartnerCode] = useState(1);
  const [paidType, setPaidType] = useState(1);
  const [cardNumber, setCardNumber] = useState(5678900008);
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");

  const handleSubmit = (e: any) => {
    const transferInfo = {
      partner_code: partnerCode,
      card_number: cardNumber,
      money: amount,
      message: content,
      type_paid: paidType,
    };
    props.transfer(transferInfo);
  };

  const handleOpenModal = () => {
    console.log("card", cardNumber);
    props.getCardInfo(cardNumber, partnerCode);
    props.openModal("CONFIRM_CARD_MODAL");
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Khách hàng" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 contact-form-area contact-page">
                <h4 className="mb-50">CHUYỂN KHOẢN</h4>
                <div className="row">
                  <div className="col-lg-6 fdr mb-30">
                    <div className="keyword">
                      <span style={{textAlign: 'center'}}>Chọn ngân hàng</span>
                    </div>
                    <div className="input-info">
                      <select
                        onChange={(e) => setPartnerCode(+e.target.value)}
                        className="col-12"
                      >
                        <option defaultValue="1">Chuyển nội bộ 3TBank</option>
                        <option value="2">Ngân hàng PGP</option>
                        <option value="3">Ngân hàng RSA</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 fdr mb-30">
                    <div className="keyword">
                      <span style={{textAlign: 'center'}}>Tính phí</span>
                    </div>
                    <div className="input-info">
                      <select
                        onChange={(e) => setPaidType(+e.target.value)}
                        className="col-12"
                      >
                        <option defaultValue="1">Người chuyển trả</option>
                        <option value="2">Người nhận trả</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 fdr mb-30">
                    <div className="keyword">
                      <span style={{textAlign: 'center'}}>Tài khoản người nhận</span>
                    </div>
                    <div className="input-info">
                      <input
                        type="number"
                        className="col-12"
                        onChange={(e) => setCardNumber(+e.target.value)}
                        placeholder="Nhập số tài khoản"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 fdr mb-30">
                    <div className="keyword">
                      <span style={{textAlign: 'center'}}>Thông tin giao dịch</span>
                    </div>
                    <div className="input-info">
                      <input
                        type="number"
                        className="col-12"
                        onChange={(e) => setAmount(+e.target.value)}
                        placeholder="Số tiền"
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-6 fdr mb-30">
                    <div className="keyword">
                      <span style={{textAlign: 'center'}}>Lời nhắn</span>
                    </div>
                    <div className="input-info">
                      <input
                        type="text"
                        className="col-12"
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Nội dung"
                      />
                    </div>
                  </div> */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control text-dark"
                        placeholder="Nhập nội dung"
                        style={{fontSize: 16}}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-hv mt-30"
                      type="submit"
                      onClick={handleOpenModal}
                    >
                      Chuyển tiền
                    </button>
                  </div>
                </div>
              </div>
              <ConfirmCardModal
                closeModal={props.closeModal}
                continuteTransfer={handleSubmit}
                cardInfo={props.cardInfo}
                isErrorGetInfo={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.accountState.isAuthenticated,
  cardInfo: state.creditState.cardInfo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: (name: string) => dispatch(show(name)),
  getCardInfo: (card_number: number, partner_code: number) =>
    dispatch(getCardInfo(card_number, partner_code)),
  transfer: (transferInfo: Object) => dispatch(transfer(transferInfo)),
  closeModal: () => dispatch(hide("CONFIRM_CARD_MODAL")),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
