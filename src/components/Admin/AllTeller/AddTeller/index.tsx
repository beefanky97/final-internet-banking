import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { connect } from "react-redux";
import { actAddTeller } from "src/app/actions/admin/adminAction";

interface Props {
  addTeller: (teller: object) => void;
  tellers: [];
}

const AddTeller: React.FC<Props> = (props) => {
  const [teller, setTeller] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addTeller(teller);
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Giao dịch viên" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Thêm giao dịch viên</h4>

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
                              setTeller({
                                ...teller,
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
                              setTeller({
                                ...teller,
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
                              setTeller({
                                ...teller,
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
                              setTeller({
                                ...teller,
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
                              setTeller({
                                ...teller,
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
                              setTeller({
                                ...teller,
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
                              setTeller({
                                ...teller,
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
  tellers: state.adminState.tellers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTeller: (teller: object) => dispatch(actAddTeller(teller)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTeller);
