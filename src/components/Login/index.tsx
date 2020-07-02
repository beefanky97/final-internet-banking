import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login, logout } from "src/app/actions/accountActions";

interface Props {
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const Login: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("customer1");
  const [password, setPassword] = useState("123456");

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
    <div className="loign-ctn">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
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
            <form onSubmit={handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
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
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              You forgot your password?<a href="#">Click here!</a>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="http://10.28.74.115:8081/index.html"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
