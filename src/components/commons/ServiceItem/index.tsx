import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  icon: string;
  name: string;
  des: string;
  url: string;
}

const ServiceItem: React.FC<Props> = ({icon, name, des, url}) => {
  
  return (
    <Link to={url} className="col-12 col-md-6 col-lg-4" >
      <div
        className="single-service-area flex-column d-flex align-items-center text-center mb-30 wow fadeInUp shadow-lg rounded px-3 py-5 shadow-hover"
        data-wow-delay="200ms"
        style={{height: "270px"}}
      >
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="text mt-3">
          <h5>{name}</h5>
          <p>
            {des}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
