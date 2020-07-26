import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actForgetPassword, actForgetPasswordSuccess } from "src/app/actions/accountActions";

interface Props {
  isCorrectEmail: boolean;
  forgetPassword: (email: string) => void;
  resetStatusEmail: (bool: boolean) => void;
}

const ForgetPassword: React.FC<Props> = (props) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(email !== '') {
      props.forgetPassword(email);
    }
  }

  useEffect(() => {
    if(props.isCorrectEmail){
      alert('Gửi email đổi mật khẩu thành công!\nVô email để tiến hành đổi mật khẩu.');
      props.resetStatusEmail(false);
    }
  }, [props.isCorrectEmail])

  return (
    <div className="loign-ctn">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3 style={{marginTop: 20}}>Quên mật khẩu</h3>
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
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập email của bạn"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Gửi mail xác nhận"
                  className="btn float-center login_btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({
  isCorrectEmail: state.accountState.isCorrectEmail,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  forgetPassword: (email: string) => dispatch(actForgetPassword(email)),
  resetStatusEmail: (bool: boolean) => dispatch(actForgetPasswordSuccess(bool)),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
