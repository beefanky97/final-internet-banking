import React from "react";
import ServiceItem from "src/components/commons/ServiceItem";
import { appAxios } from "src/api/appAxios";

interface Props {}

const ServiceSection: React.FC<Props> = ({}) => {
  const service_info = [
    {
      id: "1",
      name: "Tài khoản/Thẻ",
      des: "Các dịch vụ liên quan đến thẻ và tài khoản tiết kiệm.",
      icon: "icon-profits",
      url: "",
    },
    {
      id: "2",
      name: "Danh bạ thụ hưởng",
      des: "Quản lý danh sách phụ hưởng, đối tượng giao dịch.",
      icon: "icon-profits",
      url: "./reciever",
    },
    {
      id: "3",
      name: "Chuyển tiền",
      des: "Các dịch vụ liên quan đến chuyển tiền.",
      icon: "icon-money-1",
      url: "./transfer",
    },
    {
      id: "4",
      name: "Quản lý nhắc nợ",
      des: "Các dịch vụ liên quan đến nhắc nợ.",
      icon: "icon-profits",
      url: "./debt-reminder",
    },
    {
      id: "5",
      name: "Lịch sử giao dịch",
      des: "Tra cứu và quản lý lịch sử giao dịch.",
      icon: "icon-profits",
      url: "/history-transaction",
    },
    {
      id: "6",
      name: "Quản lý cài đặt.",
      des: "Các cài đặt về tài khoản ứng dụng.",
      icon: "icon-profits",
      url: "./setting",
    },
  ];

  return (
    <section className="services-area section-padding-100-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Section Heading --> */}
            <div className="section-heading text-center mb-100 wow fadeInUp" data-wow-delay="100ms">
              <div className="line"></div>
              <p>Take look at our</p>
              <h2>Our services</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {service_info.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} name={service.name} des={service.des} url={service.url} />
          ))}
        </div>
      </div>
    </section>
    // <!-- ##### Services Area End ###### -->
  );
};

export default ServiceSection;
