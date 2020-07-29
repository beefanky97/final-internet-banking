import React, { useEffect } from "react";
import { logout } from "src/app/actions/accountActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";

interface Props {
  logout: () => void;
  isAuthenticated: boolean;
}

const Header: React.FC<Props> = (props) => {
  const handleLogout = () => {
    console.log("over");
    props.logout();
  };

  return (
    <div>
      <header className="header-area">
        {/* <!-- Navbar Area --> */}
        <div className="credit-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              {/* <!-- Menu --> */}
              <nav className="classy-navbar justify-content-between" id="creditNav">
                {/* <!-- Navbar Toggler --> */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                {/* <!-- Menu --> */}
                <div className="classy-menu">
                  {/* <!-- Close Button --> */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>

                  {/* <!-- Nav Start --> */}
                  <div className="classynav">
                    <ul>
                      <li>
                        <a href="./">Trang chủ</a>
                      </li>
                      <li>
                        <a href="./about">Thông tin</a>
                      </li>
                      <li>
                        <a href="#all_service">Dịch vụ</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Nav End --> */}
                </div>

                {/* <!-- Contact --> */}
                <div className="contact">
                  <a href="#">
                    <img src="img/core-img/call2.png" alt="" /> (+84)999 999 999
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Top Header Area --> */}
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 d-flex justify-content-between">
                {/* <!-- Logo Area --> */}
                <div className="logo">
                  <a href="index.html">
                    <img className="logo-img" src="img/core-img/logo.png" alt="" />
                  </a>
                </div>

                {/* <!-- Top Contact Info --> */}
                {props.isAuthenticated ? (
                  <div className="top-contact-info d-flex align-items-center dropdown">
                    <button
                      className="dropdown-toggle border-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="img/core-img/user.ico"
                        style={{ width: "30px", height: "30px" }}
                        alt=""
                      />
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ zIndex: 1000 }}
                      tabIndex={0}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="./my-profile">
                        Thông tin cá nhân
                      </a>
                      <a className="dropdown-item" href="./change-password">
                        Đổi mật khẩu
                      </a>
                      <div onClick={handleLogout} className="dropdown-item">
                        Đăng xuất
                      </div>
                    </div>{" "}
                  </div>
                ) : (
                  <Link to="./login" className="btn credit-btn">
                    Đăng nhập
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ##### Header Area End ##### --> */}
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(Header);
