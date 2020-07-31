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
  console.log("auth", props.isAuthenticated);
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

                <div className="logo">
                  <Link to="/">
                    <img className="logo-img" src="img/core-img/logo.png" alt="" />
                  </Link>
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
                        <Link to="./">Trang chủ</Link>
                      </li>
                      <li>
                        <Link to="./about">Thông tin</Link>
                      </li>
                      <li>
                        <Link to="#all_service">Dịch vụ</Link>
                      </li>
                      <li>
                        {props.isAuthenticated ? (
                          <div>
                            <button
                              className="dropdown-toggle border-0"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              style={{
                                backgroundColor: '#003679',
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#fff',
                                cursor: 'pointer',
                                marginLeft: 10,
                              }}
                            >Tài khoản</button>
                            <div
                              className="dropdown-menu"
                              style={{ zIndex: 1000 }}
                              tabIndex={0}
                              aria-labelledby="dropdownMenuButton"
                            >
                              <Link className="dropdown-item" style={{color: '#000', fontWeight: 'normal'}} to="./my-profile">
                                Thông tin cá nhân
                              </Link>
                              <Link className="dropdown-item" style={{color: '#000', fontWeight: 'normal'}} to="./change-password">
                                Đổi mật khẩu
                              </Link>
                              <div onClick={handleLogout} className="dropdown-item" style={{cursor: 'pointer'}}>
                                Đăng xuất
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link to="/login">
                            Đăng nhập
                          </Link>
                        )}
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
        
      </header>
      {/* <!-- ##### Header Area End ##### --> */}
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(Header);
