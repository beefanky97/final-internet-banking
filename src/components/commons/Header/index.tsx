import React, { useEffect } from "react";
import { logout } from "src/app/actions/accountActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  logout: () => void;
  isAuthenticated: boolean;
}

const Header: React.FC<Props> = (props) => {
  const handleLogout = () => {
    console.log("over");
    props.logout();
  }

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
                        <a href="./">Home</a>
                      </li>
                      <li>
                        <a href="./about">About Us</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="./">Trang chủ</a>
                          </li>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="post.html">Post</a>
                          </li>
                          <li>
                            <a href="single-post.html">Single Post</a>
                          </li>
                          <li>
                            <a href="/change-password">Đổi mật khẩu</a>
                          </li>
                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="./login">Đăng nhập</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                        <div className="megamenu">
                          <ul className="single-mega cn-col-4">
                            <li>
                              <a href="#">Portfolio 1</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 2</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 3</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 4</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 5</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 6</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 7</a>
                            </li>
                          </ul>
                          <ul className="single-mega cn-col-4">
                            <li>
                              <a href="#">Portfolio 8</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 9</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 10</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 11</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 12</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 13</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 14</a>
                            </li>
                          </ul>
                          <ul className="single-mega cn-col-4">
                            <li>
                              <a href="#">Portfolio 15</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 16</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 17</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 18</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 19</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 20</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 21</a>
                            </li>
                          </ul>
                          <ul className="single-mega cn-col-4">
                            <li>
                              <a href="#">Portfolio 22</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 23</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 24</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 25</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 26</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 27</a>
                            </li>
                            <li>
                              <a href="#">Portfolio 28</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="./transfer">Chuyển tiền</a>
                      </li>
                      <li>
                        <a href="./change-password">Đổi mật khẩu</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Nav End --> */}
                </div>

                {/* <!-- Contact --> */}
                <div className="contact">
                  <a href="#">
                    <img src="img/core-img/call2.png" alt="" /> +800 49 900 900
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
                    <img src="img/core-img/logo.png" alt="" />
                  </a>
                </div>

                {/* <!-- Top Contact Info --> */}
                {props.isAuthenticated && <div className="top-contact-info d-flex align-items-center dropdown">
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
                    <a className="dropdown-item" href="./profile">
                      Thông tin cá nhân
                    </a>
                    <a className="dropdown-item" href="./change-password">
                      Đổi mật khẩu
                    </a>
                    <div onClick={handleLogout} className="dropdown-item">
                      Đăng xuất
                    </div>
                  </div>{" "}
                </div>}
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
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(Header);
