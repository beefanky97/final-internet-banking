import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import moment from "moment";

interface Props {
  customer: Object;
}

interface Object {
  username: string;
  _id: string;
  full_name: string;
  email: string;
  address: string;
  phone_number: string;
  day_of_birth: Date;
}

const InfoCustomer: React.FC<Props> = (props) => {
  const [isNotEdit, setIsNotEdit] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="col-lg-6">
      <h4 className="mb-50">Sơ yếu lý lịch</h4>
      <form onSubmit={handleSubmit} method="post">
        <div className="row">
          <div className="col-lg-10 fdr">
            <div className="keyword">
              <span>#ID</span>
            </div>
            <div className="input-info">
              <input
                type="text"
                className="col-12"
                value={props.customer._id}
                disabled
              />
            </div>
          </div>
          <div className="col-lg-10 fdr mt-15">
            <div className="keyword">
              <span>Tên đăng nhập</span>
            </div>
            <div className="input-info">
              <input
                type="text"
                className="col-12"
                value={props.customer.username}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10 fdr mt-15">
            <div className="keyword">
              <span>Tên đầy đủ</span>
            </div>
            <div className="input-info">
              <input
                type="text"
                className="col-12"
                value={props.customer.full_name}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10 fdr mt-15">
            <div className="keyword">
              <span>Email</span>
            </div>
            <div className="input-info">
              <input
                type="text"
                className="col-12"
                value={props.customer.email}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10 fdr mt-15">
            <div className="keyword">
              <span>Địa chỉ</span>
            </div>
            <div className="input-info">
              <input
                type="text"
                className="col-12"
                value={props.customer.address}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10 fdr mt-15">
            <div className="keyword">
              <span>SĐT</span>
            </div>
            <div className="input-info">
              <input
                type="text"
                className="col-12"
                value={props.customer.phone_number}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10 fdr mt-15">
            <div className="keyword">
              <span>Ngày sinh</span>
            </div>
            <div className="input-info">
              <input
                type="date"
                className="col-12"
                value={moment(props.customer.day_of_birth).format("YYYY-MM-DD")}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-12">
            {/* <button className="btn credit-btn mt-30 mr-15" type="button">
              <i className="fa fa-backward" aria-hidden="true"></i>
              &nbsp;&nbsp;&nbsp;Quay lại
            </button> */}
            <button
              className="btn credit-btn mt-30"
              type={!isNotEdit ? "button" : "submit"}
              onClick={() => setIsNotEdit(!isNotEdit)}
            >
              {isNotEdit ? "Chỉnh sửa" : "Lưu"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCustomer);
