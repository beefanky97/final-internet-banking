import React from "react";
import { appAxios } from 'src/api/appAxios';

interface Props {}

const HeroSection: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="hero-area">
        <div className="hero-slideshow owl-carousel">
          <div className="single-slide bg-img">
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/1.jpg"
              alt=""
            />
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-lg-9">
                  <div className="welcome-text text-center">
                    <h6 data-animation="fadeInUp" data-delay="100ms">
                      vấn đáp cuối kì
                    </h6>
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      đồ án <span>web nâng cao</span>
                    </h2>
                    <p data-animation="fadeInUp" data-delay="500ms">
                      Dự án Internet Banking được dựng ra với mục đích luyện tập, phát triển kĩ năng xây dựng web.
                    </p>
                    <a
                      href="#"
                      className="btn credit-btn mt-50"
                      data-animation="fadeInUp"
                      data-delay="700ms"
                    >
                      GV: ThS. Ngô Ngọc Đăng Khoa
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-du-indicator"></div>
          </div>

          <div className="single-slide bg-img">
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/1.jpg"
              alt=""
            />
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
            <div className="slide-du-indicator"></div>
          </div>

          <div className="single-slide bg-img">
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/5.jpg"
            />
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
            <div className="slide-du-indicator"></div>
          </div>

          <div className="single-slide bg-img">
            <img
              className="slide-bg-img bg-img bg-overlay"
              src="img/bg-img/5.jpg"
            />
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
            <div className="slide-du-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
