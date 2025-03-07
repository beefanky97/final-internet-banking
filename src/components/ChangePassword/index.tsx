import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login, logout, changePassword } from "src/app/actions/accountActions";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  changePassword: (current_password: string, new_password: string, confirm_password: string) => void;
  isAuthenticated: boolean;
}

const ChangePassword: React.FC<Props> = (props) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verified, setVerified] = useState(false);

  const recaptchaRef = useRef(null);

  useEffect(() => {
    if (props.isAuthenticated) {
      window.location.href = "/";
    }
  }, [props.isAuthenticated]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(verified) {
      props.changePassword(currentPassword, newPassword, confirmPassword);
    }
  };

  return (
    <div className="loign-ctn">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3 style={{marginTop: 20}}>Đổi mật khẩu</h3>
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
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu hiện tại"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu mới"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Xác nhận mật khẩu"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc20q8ZAAAAAAHTjjGsongO0w1TL8-xPSJi479x"
                onChange={(e: any) => setVerified(true)}
              />
              <div className="form-group">
                <input
                  type="submit"
                  value="Đổi mật khẩu"
                  disabled={!verified}
                  className="btn float-center login_btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <iframe
        src="http://10.28.74.115:8081/index.html"
        title="W3Schools Free Online Web Tutorials"
      ></iframe> */}
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.accountState.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePassword: (current_password: string, new_password: string, confirm_password: string) =>
    dispatch(changePassword(current_password, new_password, confirm_password)),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
