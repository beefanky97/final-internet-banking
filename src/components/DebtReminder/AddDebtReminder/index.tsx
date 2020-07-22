import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { connect } from "react-redux";
import { actAddCustomer } from "src/app/actions/tellerActions";
import { addDebtReminder } from "src/app/actions/creditActions";

interface Props {
  addDebtReminder: (debtInfo: object) => void;
  customers: [];
}

const AddDebtReminder: React.FC<Props> = (props) => {
  const [debtInfo, setDebtInfo] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("customer", debtInfo);
    props.addDebtReminder(debtInfo);
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Thêm nhắc nợ" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Thêm nhắc nợ</h4>

                  <form onSubmit={handleSubmit} method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control text-dark"
                            placeholder="Nhập số tài khoản"
                            onChange={(e) =>
                              setDebtInfo({
                                ...debtInfo,
                                card_number: +e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control text-dark"
                            placeholder="Nhập số tiền"
                            onChange={(e) =>
                              setDebtInfo({
                                ...debtInfo,
                                money: +e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control text-dark"
                            placeholder="Nhập lời nhắn"
                            onChange={(e) =>
                              setDebtInfo({
                                ...debtInfo,
                                message: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn credit-btn mt-30" type="submit">
                          Thêm
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  customers: state.tellerState.customers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addDebtReminder: (debtInfo: object) => dispatch(addDebtReminder(debtInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDebtReminder);
