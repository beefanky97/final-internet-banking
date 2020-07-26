import React from "react";
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
  return (
    <div className="col-lg-6">
      <h4 className="mb-50">Sơ yếu lý lịch</h4>
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
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCustomer);
