import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { actGetTellers } from "src/app/actions/admin/adminAction";

interface Props {
  getTellers: () => void;
  tellers: [];
}

const AllTeller: React.FC<Props> = (props) => {
  useEffect(() => {
    props.getTellers();
  }, []);

  const showListTellers = (tellers: []) =>
    tellers.map((t: any, i) => (
      <tr key={i} onClick={() => {
        window.location.href='/admin/tellers/detail';
        
      }}>
        <td>{i + 1}</td>
        <td>{t.username}</td>
        <td>{t.full_name}</td>
        <td>{t.email}</td>
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
                      </tr>
                    </thead>
                    <tbody>{showListTellers(props.tellers)}</tbody>
                  </table>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTeller);
