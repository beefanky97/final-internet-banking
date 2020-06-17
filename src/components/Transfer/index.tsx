import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { show } from 'redux-modal';

import ConfirmCardModal from 'src/components/Transfer/modals/ConfirmCardModal';
import { getCardInfo } from "src/app/actions/creditActions";

interface Props {
  openModal: (name: string) => void
  getCardInfo: (card_number: string) => void
}

const Transfer: React.FC<Props> = (props) => {
  const [bank, setBank] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.getCardInfo(cardNumber);
    props.openModal("CONFIRM_CARD_MODAL");
    const transferInfo = {bank, cardNumber, amount, content};
    console.log("tranfer what?", transferInfo);
  };

  return (
    <div className="transfer-ctn">
      <div className="d-flex justify-content-center h-100">
        <div className="card col-md-6">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span>
                <i className="fab fa-google-plus-square"></i>
              </span>
              <span>
                <i className="fab fa-twitter-square"></i>
              </span>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="form-group col-md-12">
                  <label htmlFor="inputState">Chọn ngân hàng</label>
                  <select onChange={e => setBank(e.target.value)} className="form-control">
                    <option defaultValue="3tbank">Chuyển nội bộ 3TBank</option>
                    <option value="nh1bank">Ngân hàng khác 1</option>
                    <option value="nh2bank">Ngân hàng khác 2</option>
                    <option value="nh3bank">Ngân hàng khác 3</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Tài khoản người nhận</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setCardNumber(e.target.value)}
                    placeholder="Nhập số tài khoản"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Thông tin giao dịch</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setAmount(+e.target.value)}
                    placeholder="Số tiền"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Lời nhắn</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setContent(e.target.value)}
                    placeholder="Nội dung"
                  />
                </div>
              </div>
              <button type="submit" className="btn round-5 btn-primary">
                Chuyển tiền
              </button>
            </form>
          </div>
        </div>
      </div>
      <ConfirmCardModal />
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.accountState.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: (name: string) => dispatch(show(name)),
  getCardInfo: (card_number: string) => dispatch(getCardInfo(card_number))
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
