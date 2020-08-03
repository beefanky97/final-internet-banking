import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { show, hide } from "redux-modal";
import * as qs from 'query-string';

import HeaderBody from "src/components/commons/HeaderBody";
import InfoCustomerModal from "src/components/Transfer/modals/InfoCustomerModal";
import { getCardInfo } from "src/app/actions/creditActions";
import { actAddMoneyCustomerRequest } from "src/app/actions/tellerActions";

interface Props {
  history: any;
  cardInfo: any;
  closeModal: () => void;
  openModal: (name: string) => void;
  getCardInfo: (card_number: number) => void;
  addMoneyCustomer: (card_number: number, money: number) => void;
}

const AddMoney: React.FC<Props> = (props) => {
  const [cardNumber, setCardNumber] = useState(0);
  const [money, setMoney] = useState(0);
  const [isError, setIsError] = useState(false);
  const parsed: any = qs.parseUrl(window.location.href);

  useEffect(() => {
    if(parsed.query.card_number){
      setCardNumber(+parsed.query.card_number);
    }
  }, [parsed])

  useEffect(() => {
    if (props.cardInfo.full_name) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [props.cardInfo]);

  const handleSubmit = async () => {
    await props.addMoneyCustomer(cardNumber, money);
    setCardNumber(0);
    setMoney(0);
    alert("Success");
    console.log('par', parsed);
    if(parsed.query.card_number){
      // window.location.href = '/teller/customer/detail?id=5eeb5d49522755fd2ddb8d3d';
      props.history.goBack();
    }
  };

  const handleOpenModal = () => {
    props.getCardInfo(cardNumber);
    props.openModal("INFO_CUSTOMER_MODAL");
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Khách hàng" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area" style={{height: 500}}>
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Nạp tiền tài khoản</h4>

                  <form method="post">
                    <div className="row">
                      <div className="col-lg-7 fdr">
                        <div className="keyword">
                          <span>STK</span>
                        </div>
                        <div className="input-info">
                          <input
                            type="number"
                            className="col-12 text-dark"
                            id="name"
                            placeholder="Nhập số tài khoản"
                            value={cardNumber === 0 ? "" : cardNumber}
                            onChange={(e) => setCardNumber(+e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 fdr">
                        <div className="keyword">
                          <span>VND</span>
                        </div>
                        <div className="input-info">
                          <input
                            type="number"
                            className="col-12 text-dark"
                            id="email"
                            placeholder="Nhập số tiền"
                            value={money === 0 ? "" : money}
                            onChange={(e) => setMoney(+e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-hv mt-30"
                          type="button"
                          onClick={() => handleOpenModal()}
                        >
                          Nạp tiền
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InfoCustomerModal
          closeModal={props.closeModal}
          money={money}
          cardInfo={props.cardInfo}
          continuteTransfer={handleSubmit}
          isErrorGetInfo={isError}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  cardInfo: state.creditState.cardInfo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCardInfo: (card_number: number) => dispatch(getCardInfo(card_number, 1)),
  openModal: (name: string) => dispatch(show(name)),
  closeModal: () => dispatch(hide("INFO_CUSTOMER_MODAL")),
  addMoneyCustomer: (card_number: number, money: number) =>
    dispatch(actAddMoneyCustomerRequest(card_number, money)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMoney);
