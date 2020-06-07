import React from "react";

interface Props {}

const ServiceSection: React.FC<Props> = ({}) => {
  return (
    // <!-- ##### Services Area Start ###### -->
    <section className="services-area section-padding-100-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Section Heading --> */}
            <div
              className="section-heading text-center mb-100 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="line"></div>
              <p>Take look at our</p>
              <h2>Our services</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <!-- Single Service Area --> */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area flex-column d-flex align-items-center text-center mb-100 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <i className="icon-profits"></i>
              </div>
              <div className="text mt-3">
                <h5>All the loans</h5>
                <p>
                  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.
                  Integer ut ultricies orci, lobortis egestas sem.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Single Service Area --> */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area flex-column d-flex align-items-center text-center mb-100 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="icon">
                <i className="icon-money-1"></i>
              </div>
              <div className="text mt-3">
                <h5>Easy and fast answer</h5>
                <p>
                  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.
                  Integer ut ultricies orci, lobortis egestas sem.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Single Service Area --> */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area flex-column d-flex align-items-center text-center mb-100 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <i className="icon-coin"></i>
              </div>
              <div className="text mt-3">
                <h5>No additional papers</h5>
                <p>
                  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.
                  Integer ut ultricies orci, lobortis egestas sem.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Single Service Area --> */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area flex-column d-flex align-items-center text-center mb-100 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="icon">
                <i className="icon-smartphone-1"></i>
              </div>
              <div className="text mt-3">
                <h5>Secure financial services</h5>
                <p>
                  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.
                  Integer ut ultricies orci, lobortis egestas sem.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Single Service Area --> */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area flex-column d-flex align-items-center text-center mb-100 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <i className="icon-diamond"></i>
              </div>
              <div className="text mt-3">
                <h5>Good investments</h5>
                <p>
                  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.
                  Integer ut ultricies orci, lobortis egestas sem.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Single Service Area --> */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area flex-column d-flex align-items-center text-center mb-100 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="icon">
                <i className="icon-piggy-bank"></i>
              </div>
              <div className="text mt-3">
                <h5>Accumulation goals</h5>
                <p>
                  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.
                  Integer ut ultricies orci, lobortis egestas sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ##### Services Area End ###### -->
  );
};

export default ServiceSection;
