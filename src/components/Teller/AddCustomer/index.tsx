import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { connect } from "react-redux";
import { actAddCustomer } from "src/app/actions/tellerActions";

interface Props {
  isAddCustomerSuccessed: boolean;
  history: any;
  addCustomer: (customer: object) => void;
}

const AddCustomer: React.FC<Props> = (props) => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    if(props.isAddCustomerSuccessed){
      props.history.goBack();
    }
  }, [props.isAddCustomerSuccessed])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addCustomer(customer);
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
              <div className="col-10">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Thêm khách hàng</h4>

                  <form onSubmit={handleSubmit} method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-dark"
                            id="name"
                            placeholder="Nhập tên đăng nhập"
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                username: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control text-dark"
                            id="email"
                            placeholder="Nhập password"
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-dark"
                            id="name"
                            placeholder="Nhập tên đầy đủ"
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                full_name: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control text-dark"
                            id="email"
                            placeholder="Nhập email"
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-dark"
                            id="name"
                            placeholder="Nhập số điện thoại"
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                phone_number: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-dark"
                            id="email"
                            placeholder="Nhập địa chỉ"
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                address: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control text-dark"
                            id="email"
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                day_of_birth: e.target.value,
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
  isAddCustomerSuccessed: state.tellerState.isAddCustomerSuccessed,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCustomer: (customer: object) => dispatch(actAddCustomer(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
