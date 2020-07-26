import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { actGetTellers, actDeleteTeller } from "src/app/actions/admin/adminAction";

interface Props {
  getTellers: () => void;
  tellers: [];
  deleteTeller: (id: string) => void;
}

const AllTeller: React.FC<Props> = (props) => {
  const [flagDelete, setFlagDelete] = useState(false);

  useEffect(() => {
    console.log('hello')
    setFlagDelete(false);
    props.getTellers();
  }, [flagDelete]);

  const showListTellers = (tellers: []) =>
    tellers.map((t: any, i) => (
      <tr
        key={i}
        // onClick={() => {
        //   window.location.href = `/admin/teller/detail?id=${t._id}`;
        // }}
      >
        <td>{i + 1}</td>
        <td>{t.username}</td>
        <td>{t.full_name}</td>
        <td>{t.email}</td>
        <td>
          <i
            style={{ color: "green", cursor: 'pointer' }}
            className="fa fa-eye"
            aria-hidden="true"
            onClick={() => {
              window.location.href = `/admin/teller/detail?id=${t._id}`;
            }}
          ></i>
        </td>
        <td>
          <i
            style={{ color: "red", cursor: 'pointer' }}
            className="fa fa-trash-alt"
            aria-hidden="true"
            onClick={() => {
              console.log("press delete button", t._id);
              setFlagDelete(true);

              props.deleteTeller(t._id);
            }}
          ></i>
        </td>
      </tr>
    ));

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Giao dịch viên" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Danh sách giao dịch viên</h4>

                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Tên đăng nhập</th>
                        <th>Tên đầy đủ</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{showListTellers(props.tellers)}</tbody>
                  </table>
                  {/* begin total money */}
                  <div className="row justify-content-end mt-15">
                    <button
                      className="btn credit-btn mr-15"
                      type="button"
                      onClick={() => {
                        window.location.href = `/admin/teller/add`;
                      }}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      &nbsp;&nbsp;&nbsp;Thêm
                    </button>
                  </div>
                  {/* end total money */}
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
  tellers: state.adminState.tellers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTellers: () => dispatch(actGetTellers()),
  deleteTeller: (id: string) => dispatch(actDeleteTeller(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTeller);
