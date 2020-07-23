import React, { useState, useEffect } from "react";
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
  const [infoUser, setInfoUser] = useState(props.customer);

  useEffect(() => {
    if(props.customer){
      setInfoUser(props.customer);
    }
  }, [props.customer])

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const onHandleCancel = () => {
    setIsNotEdit(!isNotEdit);
    setInfoUser(props.customer);
  }

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
                value={infoUser.username}
                onChange={(e: any) => setInfoUser({...infoUser, username: e.target.value})}
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
                value={infoUser.full_name}
                onChange={(e: any) => setInfoUser({...infoUser, full_name: e.target.value})}
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
                value={infoUser.email}
                onChange={(e: any) => setInfoUser({...infoUser, email: e.target.value})}
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
                value={infoUser.address}
                onChange={(e: any) => setInfoUser({...infoUser, address: e.target.value})}
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
                value={infoUser.phone_number}
                onChange={(e: any) => setInfoUser({...infoUser, phone_number: e.target.value})}
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
                value={moment(infoUser.day_of_birth).format("YYYY-MM-DD")}
                onChange={(e: any) => setInfoUser({...infoUser, day_of_birth: e.target.value})}
                disabled={isNotEdit}
              />
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-hv mt-30"
              type={!isNotEdit ? "button" : "submit"}
              onClick={() => setIsNotEdit(!isNotEdit)}
            >
              {isNotEdit ? "Chỉnh sửa" : "Lưu"}
            </button>
            {!isNotEdit ? (
              <button
                className="btn btn-hv mt-30 ml-15"
                type="button"
                onClick={() => onHandleCancel()}
              >
                Huỷ
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCustomer);
