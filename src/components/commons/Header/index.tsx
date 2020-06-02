import React from "react";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  return (
    <div>
      {/* <!-- ##### Header Area Start ##### --> */}
      <header className="header-area">
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
                <div className="top-contact-info d-flex align-items-center">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="25 th Street Avenue, Los Angeles, CA"
                  >
                    <img src="img/core-img/placeholder.png" alt="" />{" "}
                    <span>25 th Street Avenue, Los Angeles, CA</span>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="office@yourfirm.com"
                  >
                    <img src="img/core-img/message.png" alt="" />{" "}
                    <span>office@yourfirm.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Navbar Area --> */}
        <div className="credit-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              {/* <!-- Menu --> */}
              <nav
                className="classy-navbar justify-content-between"
                id="creditNav"
              >
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
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="index.html">Home</a>
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
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
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
                        <a href="post.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
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
      </header>
      {/* <!-- ##### Header Area End ##### --> */}

      {/* <!-- ##### Hero Area Start ##### --> */}
      <div className="hero-area">
        <div className="hero-slideshow owl-carousel">
          {/* <!-- Single Slide --> */}
          <div className="single-slide bg-img">
            {/* <!-- Background Image--> */}
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/1.jpg"
            />
            {/* <!-- Welcome Text --> */}
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-lg-9">
                  <div className="welcome-text text-center">
                    <h6 data-animation="fadeInUp" data-delay="100ms">
                      2 years interest
                    </h6>
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      get your <span>loan</span> now
                    </h2>
                    <p data-animation="fadeInUp" data-delay="500ms">
                      Vestibulum eu vehicula elit, nec elementum orci. Praesent
                      aliquet ves tibulum tempus. Pellentesque posuere pharetra
                      turpis, eget finibus erat porta placerat.
                    </p>
                    <a
                      href="#"
                      className="btn credit-btn mt-50"
                      data-animation="fadeInUp"
                      data-delay="700ms"
                    >
                      Discover
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slide Duration Indicator --> */}
            <div className="slide-du-indicator"></div>
          </div>

          {/* <!-- Single Slide --> */}
          <div className="single-slide bg-img">
            {/* <!-- Background Image--> */}
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/1.jpg"
            />
            {/* <!-- Welcome Text --> */}
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-lg-9">
                  <div className="welcome-text text-center">
                    <h6 data-animation="fadeInDown" data-delay="100ms">
                      2 years interest
                    </h6>
                    <h2 data-animation="fadeInDown" data-delay="300ms">
                      get your <span>loan</span> now
                    </h2>
                    <p data-animation="fadeInDown" data-delay="500ms">
                      Vestibulum eu vehicula elit, nec elementum orci. Praesent
                      aliquet ves tibulum tempus. Pellentesque posuere pharetra
                      turpis, eget finibus erat porta placerat.
                    </p>
                    <a
                      href="#"
                      className="btn credit-btn mt-50"
                      data-animation="fadeInDown"
                      data-delay="700ms"
                    >
                      Discover
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slide Duration Indicator --> */}
            <div className="slide-du-indicator"></div>
          </div>

          {/* <!-- Single Slide --> */}
          <div className="single-slide bg-img">
            {/* <!-- Background Image--> */}
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/5.jpg"
            />
            {/* <!-- Welcome Text --> */}
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-lg-9">
                  <div className="welcome-text text-center">
                    <h6 data-animation="fadeInUp" data-delay="100ms">
                      2 years interest
                    </h6>
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      get your <span>loan</span> now
                    </h2>
                    <p data-animation="fadeInUp" data-delay="500ms">
                      Vestibulum eu vehicula elit, nec elementum orci. Praesent
                      aliquet ves tibulum tempus. Pellentesque posuere pharetra
                      turpis, eget finibus erat porta placerat.
                    </p>
                    <a
                      href="#"
                      className="btn credit-btn mt-50"
                      data-animation="fadeInUp"
                      data-delay="700ms"
                    >
                      Discover
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slide Duration Indicator --> */}
            <div className="slide-du-indicator"></div>
          </div>

          {/* <!-- Single Slide --> */}
          <div className="single-slide bg-img">
            {/* <!-- Background Image--> */}
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/5.jpg"
            />
            {/* <!-- Welcome Text --> */}
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-lg-9">
                  <div className="welcome-text text-center">
                    <h6 data-animation="fadeInDown" data-delay="100ms">
                      2 years interest
                    </h6>
                    <h2 data-animation="fadeInDown" data-delay="300ms">
                      get your <span>loan</span> now
                    </h2>
                    <p data-animation="fadeInDown" data-delay="500ms">
                      Vestibulum eu vehicula elit, nec elementum orci. Praesent
                      aliquet ves tibulum tempus. Pellentesque posuere pharetra
                      turpis, eget finibus erat porta placerat.
                    </p>
                    <a
                      href="#"
                      className="btn credit-btn mt-50"
                      data-animation="fadeInDown"
                      data-delay="700ms"
                    >
                      Discover
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slide Duration Indicator --> */}
            <div className="slide-du-indicator"></div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Hero Area End ##### --> */}
    </div>
  );
};

export default Header;
