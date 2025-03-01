import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { connect } from "react-redux";
import { actAddTeller } from "src/app/actions/admin/adminAction";

interface Props {
  addTeller: (teller: object) => void;
  tellers: [];
  history: any;
  isAddTellerSuccessed: boolean;
}

const AddTeller: React.FC<Props> = (props) => {
  const [teller, setTeller] = useState({});
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dof, setDof] = useState("");

  useEffect(() => {
    if (props.isAddTellerSuccessed) {
      props.history.goBack();
    }
  }, [props.isAddTellerSuccessed]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      fullName === "" ||
      address === "" ||
      email === "" ||
      phoneNumber === "" ||
      username === "" ||
      password === "" ||
      dof === ""
    )
      alert("Hãy nhập đầy đủ thông tin!!!");
    else props.addTeller(teller);
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
                  <h4 className="mb-50">THÊM GIAO DỊCH VIÊN</h4>

                  <form onSubmit={handleSubmit} method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            style={{ backgroundColor: "white", fontSize: 15 }}
                            type="text"
                            className="form-control text-dark"
                            id="username"
                            placeholder="Nhập tên đăng nhập"
                            onChange={(e) => {
                              setTeller({
                                ...teller,
                                username: e.target.value,
                              });
                              setUsername(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            style={{ backgroundColor: "white", fontSize: 15 }}
                            type="password"
                            className="form-control text-dark"
                            id="password"
                            placeholder="Nhập password"
                            onChange={(e) => {
                              setTeller({
                                ...teller,
                                password: e.target.value,
                              });
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            style={{ backgroundColor: "white", fontSize: 15 }}
                            type="text"
                            className="form-control text-dark"
                            id="name"
                            placeholder="Nhập tên đầy đủ"
                            onChange={(e) => {
                              setTeller({
                                ...teller,
                                full_name: e.target.value,
                              });
                              setFullName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            style={{ backgroundColor: "white", fontSize: 15 }}
                            type="email"
                            className="form-control text-dark"
                            id="email"
                            placeholder="Nhập email"
                            onChange={(e) => {
                              setTeller({
                                ...teller,
                                email: e.target.value,
                              });
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            style={{ backgroundColor: "white", fontSize: 15 }}
                            type="number"
                            className="form-control text-dark"
                            id="phone"
                            placeholder="Nhập số điện thoại"
                            onChange={(e) => {
                              setTeller({
                                ...teller,
                                phone_number: e.target.value,
                              });
                              setPhoneNumber(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            style={{ backgroundColor: "white", fontSize: 15 }}
                            type="text"
                            className="form-control text-dark"
                            id="address"
                            placeholder="Nhập địa chỉ"
                            onChange={(e) => {
                              setTeller({
                                ...teller,
                                address: e.target.value,
                              });
                              setAddress(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            style={{ backgroundColor: "white", fontSize: 15 }}
                            type="date"
                            className="form-control text-dark"
                            id="dof"
                            onChange={(e) => {
                              setTeller({
                                ...teller,
                                day_of_birth: e.target.value,
                              });
                              setDof(e.target.value);
                            }}
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
  isAddTellerSuccessed: state.adminState.isAddTellerSuccessed,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTeller: (teller: object) => dispatch(actAddTeller(teller)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTeller);
