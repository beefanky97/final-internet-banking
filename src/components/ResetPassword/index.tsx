import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as qs from 'query-string';

import { actResetPassword, actResetPasswordSuccess } from "src/app/actions/accountActions";

interface Props {
  history: any;
  isResetPasswordSuccess: boolean;
  resetPassword: (token: any, newPassword: string, confirmPassword: string) => void;
  resetStatus: (bool: boolean) => void;
}

const ResetPassword: React.FC<Props> = (props) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const search: any = qs.parse(window.location.search);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.resetPassword(search.token, newPassword, confirmPassword);
  }

  useEffect(() => {
    if(props.isResetPasswordSuccess){
      props.history.push('/login');
      props.resetStatus(false);
    }
  }, [props.isResetPasswordSuccess])

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
              <div className="form-group">
                <input
                  type="submit"
                  value="Đổi mật khẩu"
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
  isResetPasswordSuccess: state.accountState.isResetPasswordSuccess,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPassword: (token: any, newPassword: string, confirmPassword: string) => dispatch(actResetPassword(token, newPassword, confirmPassword)),
  resetStatus: (bool: boolean) => dispatch(actResetPasswordSuccess(bool)),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
