import React, { useEffect, useState } from "react";
import ServiceItem from "src/components/commons/ServiceItem";
import { appAxios } from "src/api/appAxios";

interface Props {}

const ServiceSection: React.FC<Props> = ({}) => {
  const [userService, setUserService] = useState([
    {
      id: "1",
      name: "Tài khoản/Thẻ",
      des: "Các dịch vụ liên quan đến thẻ và tài khoản tiết kiệm.",
      icon: "icon-profits",
      url: "/my-profile",
    },
  ])
  const permission = sessionStorage.getItem("permission");

  const teller_service = [
    {
      id: "2",
      name: "Quản lý khách hàng",
      des: "Quản lý danh sách khách hàng.",
      icon: "icon-profits",
      url: "/teller/customers",
    },
    {
      id: "3",
      name: "Thêm một tài khoản",
      des: "Tạo một khách hàng cho ngân hàng.",
      icon: "icon-money-1",
      url: "/teller/add-customer",
    },
    {
      id: "4",
      name: "Nạp tiền",
      des: "Nạp tiền vào một tài khoản",
      icon: "icon-profits",
      url: "/teller/add-money-customer",
    }
  ];

  const admin_service = [
    {
      id: "2",
      name: "Danh sách giao dịch viên",
      des: "Quản lý những tài khoản giao dịch viên.",
      icon: "icon-profits",
      url: "/admin/tellers",
    },
    {
      id: "3",
      name: "Lịch sử giao dịch.",
      des: "Quản lý danh sách giao lịch.",
      icon: "icon-profits",
      url: "/admin/history-transaction-interbank",
    }
  ];

  const customer_service = [
    {
      id: "2",
      name: "Danh bạ thụ hưởng",
      des: "Quản lý danh sách phụ hưởng, đối tượng giao dịch.",
      icon: "icon-profits",
      url: "/reciever",
    },
    {
      id: "3",
      name: "Chuyển tiền",
      des: "Các dịch vụ liên quan đến chuyển tiền.",
      icon: "icon-money-1",
      url: "/transfer",
    },
    {
      id: "4",
      name: "Quản lý nhắc nợ",
      des: "Các dịch vụ liên quan đến nhắc nợ.",
      icon: "icon-profits",
      url: "/debt-reminder",
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
      url: "/setting",
    },
  ]

  useEffect(() => {
    switch(permission) {
      case "0": setUserService(userService.concat(admin_service)); return;
      case "1": setUserService(userService.concat(teller_service)); return;
      case "2": setUserService(userService.concat(customer_service)); return;
      default: return;
    }
  }, [])

  return (
    <section id="all_service" className="services-area section-padding-100-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Section Heading --> */}
            <div className="section-heading text-center mb-100 wow fadeInUp" data-wow-delay="100ms">
              <div className="line"></div>
              <p>Tự hào phát triển</p>
              <h2>DỊCH VỤ</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {userService.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} name={service.name} des={service.des} url={service.url} />
          ))}
        </div>
      </div>
    </section>
    // <!-- ##### Services Area End ###### -->
  );
};

export default ServiceSection;
