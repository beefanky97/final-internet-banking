import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { parseUrl } from "query-string";
import HeaderBody from "src/components/commons/HeaderBody";
import {
  actGetDetailTeller,
  actEditTeller,
} from "src/app/actions/admin/adminAction";

interface Props {
  getDetailTeller: (id: string) => void;
  editTeller: (id: string, tellerEdit: object) => void;
  teller: any;
  tellers: [];
  history: any;
  isEditTellerSuccessed: boolean;
}

const DetailTeller: React.FC<Props> = (props) => {
  const [isNotEdit, setIsNotEdit] = useState(true);
  const [tellerEdit, setTellerEdit] = useState(props.teller);

  const id: any = parseUrl(window.location.href).query.id;

  useEffect(() => {
    props.getDetailTeller(id);

    if (props.isEditTellerSuccessed) {
      props.history.goBack();
    }
  }, [props.isEditTellerSuccessed]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      tellerEdit.full_name === "" ||
      tellerEdit.address === "" ||
      tellerEdit.phone === "" ||
      tellerEdit.day_of_birth === ""
    )
      alert("Hãy nhập đầy đủ thông tin!!!");
    else props.editTeller(id, tellerEdit);
  };

  const onHandleEdit = () => {
    setIsNotEdit(!isNotEdit);
    if (isNotEdit) setTellerEdit(props.teller);
  };

  const onHandleCancel = (id: string) => {
    setIsNotEdit(!isNotEdit);
    setTellerEdit(null);
    setTellerEdit(props.teller);
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Giao dịch viên" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area" style={{ height: "1200px" }}>
        <div className="contact---area">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-6">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">HỒ SƠ GIAO DỊCH VIÊN</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <form onSubmit={handleSubmit} method="post">
                        <div className="row">
                          <div className="col-lg-12 fdr">
                            <div className="keyword">
                              <span>#ID</span>
                            </div>
                            <div className="input-info">
                              <input
                                type="text"
                                className="col-12"
                                value={props.teller._id}
                                disabled
                                style={{
                                  borderColor: !isNotEdit ? "gray" : "",
                                  borderWidth: 5,
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 fdr mt-15">
                            <div className="keyword">
                              <span>Tên đăng nhập</span>
                            </div>
                            <div className="input-info">
                              <input
                                type="text"
                                className="col-12"
                                value={
                                  isNotEdit
                                    ? props.teller.username
                                    : tellerEdit.username
                                }
                                disabled
                                style={{
                                  borderColor: !isNotEdit ? "gray" : "",
                                  borderWidth: 5,
                                }}
                                onChange={(e) =>
                                  setTellerEdit({
                                    ...tellerEdit,
                                    username: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 fdr mt-15">
                            <div className="keyword">
                              <span>Tên đầy đủ</span>
                            </div>
                            <div className="input-info">
                              <input
                                type="text"
                                className="col-12"
                                value={
                                  isNotEdit
                                    ? props.teller.full_name
                                    : tellerEdit.full_name
                                }
                                disabled={isNotEdit}
                                onChange={(e) =>
                                  setTellerEdit({
                                    ...tellerEdit,
                                    full_name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 fdr mt-15">
                            <div className="keyword">
                              <span>Email</span>
                            </div>
                            <div className="input-info">
                              <input
                                type="text"
                                className="col-12"
                                value={
                                  isNotEdit
                                    ? props.teller.email
                                    : tellerEdit.email
                                }
                                disabled
                                style={{
                                  borderColor: !isNotEdit ? "gray" : "",
                                  borderWidth: 5,
                                }}
                                onChange={(e) =>
                                  setTellerEdit({
                                    ...tellerEdit,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 fdr mt-15">
                            <div className="keyword">
                              <span>Địa chỉ</span>
                            </div>
                            <div className="input-info">
                              <input
                                type="text"
                                className="col-12"
                                value={
                                  isNotEdit
                                    ? props.teller.address
                                    : tellerEdit.address
                                }
                                disabled={isNotEdit}
                                onChange={(e) =>
                                  setTellerEdit({
                                    ...tellerEdit,
                                    address: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 fdr mt-15">
                            <div className="keyword">
                              <span>SĐT</span>
                            </div>
                            <div className="input-info">
                              <input
                                type="text"
                                className="col-12"
                                value={
                                  isNotEdit
                                    ? props.teller.phone_number
                                    : tellerEdit.phone_number
                                }
                                disabled={isNotEdit}
                                onChange={(e) =>
                                  setTellerEdit({
                                    ...tellerEdit,
                                    phone_number: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 fdr mt-15">
                            <div className="keyword">
                              <span>Ngày sinh</span>
                            </div>
                            <div className="input-info">
                              <input
                                type="date"
                                className="col-12"
                                value={
                                  isNotEdit
                                    ? moment(props.teller.day_of_birth).format(
                                        "YYYY-MM-DD"
                                      )
                                    : moment(tellerEdit.day_of_birth).format(
                                        "YYYY-MM-DD"
                                      )
                                }
                                disabled={isNotEdit}
                                onChange={(e) =>
                                  setTellerEdit({
                                    ...tellerEdit,
                                    day_of_birth: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-12 d-flex justify-content-end">
                            {/* <button className="btn credit-btn mt-30 mr-15" type="button">
              <i className="fa fa-backward" aria-hidden="true"></i>
              &nbsp;&nbsp;&nbsp;Quay lại
            </button> */}
                            {!isNotEdit ? (
                              <button
                                className="btn credit-btn mt-30 mr-15"
                                type="button"
                                onClick={() => onHandleCancel(id)}
                              >
                                Huỷ
                              </button>
                            ) : null}
                            <button
                              className="btn credit-btn mt-30"
                              type={!isNotEdit ? "button" : "submit"}
                              // onClick={() => setIsNotEdit(!isNotEdit)}
                              onClick={() => onHandleEdit()}
                            >
                              {isNotEdit ? "Chỉnh sửa" : "Lưu"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  teller: state.adminState.teller,
  tellers: state.adminState.tellers,
  isEditTellerSuccessed: state.adminState.isEditTellerSuccessed,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDetailTeller: (id: string) => dispatch(actGetDetailTeller(id)),
  editTeller: (id: string, tellerEdit: object) =>
    dispatch(actEditTeller(id, tellerEdit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailTeller);
