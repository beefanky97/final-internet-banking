import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login, logout } from "src/app/actions/accountActions";

interface Props {
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const Transfer: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.isAuthenticated) {
      window.location.href = "/";
    }
  }, [props.isAuthenticated]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.login(username, password);
  };

  return (
    <div className="transfer-ctn">
      <div className="d-flex justify-content-center h-100">
        <div className="card col-md-6">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span onClick={props.logout}>
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
            <form>
              <div className="form-group">
                <div className="form-group col-md-12">
                  <label htmlFor="inputState">Chọn ngân hàng</label>
                  <select id="inputState" className="form-control">
                    <option selected>Chuyển tiền nội bộ</option>
                    <option>Chuyển liên ngân hàng</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Tài khoản nguồn</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    readOnly
                    placeholder="9999999999999"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Tài khoản người nhận</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Nhập số tài khoản"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Thông tin giao dịch</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Số tiền"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Lời nhắn</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Nội dung"
                  />
                </div>
              </div>
              <button type="submit" className="btn round-5 btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.accountState.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
  logout: () => dispatch(logout()),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
