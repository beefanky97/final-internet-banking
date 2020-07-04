import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import moment from "moment";

interface Props {
  customer: Object
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

const InfoCard: React.FC<Props> = (props) => {
  const [isNotEdit, setIsNotEdit] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="col-6">
      <h4 className="mb-50">Thông tin thẻ</h4>
      <form onSubmit={handleSubmit} method="post">
        <div className="row">
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control text-dark"
                id="phone_number"
                value={props.customer._id}
                disabled
              />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control text-dark"
                id="username"
                value={props.customer.username}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control text-dark"
                id="password"
                value={props.customer.full_name}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control text-dark"
                id="full_name"
                value={props.customer.address}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="email"
                className="form-control text-dark"
                id="email"
                value={props.customer.email}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control text-dark"
                id="address"
                value={props.customer.phone_number}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="date"
                className="form-control text-dark"
                id="date_of_birth"
                value={moment(props.customer.day_of_birth).format("YYYY-MM-DD")}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-12">
            <button className="btn credit-btn mt-30 mr-15" type="button">
              <i className="fa fa-backward" aria-hidden="true"></i>
              &nbsp;&nbsp;&nbsp;Quay lại
            </button>
            <button
              className="btn credit-btn mt-30"
              type="button"
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

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);
