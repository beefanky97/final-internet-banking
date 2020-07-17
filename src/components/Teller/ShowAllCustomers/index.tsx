import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { actShowAllCustomersRequest } from "src/app/actions/tellerActions";

interface Props {
  showAllCustomers: () => void;
  customers: [];
}

const HistoryTransaction: React.FC<Props> = (props) => {
  useEffect(() => {
    props.showAllCustomers();
  }, []);

  const listCustomers = (customers: []) =>
    customers.map((c: any, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{c.username}</td>
        <td>{c.full_name}</td>
        <td>{c.email}</td>
      </tr>
    ));

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Khách hàng" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Lịch sử giao dịch</h4>
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Tên đăng nhập</th>
                        <th>Tên đầy đủ</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>{listCustomers(props.customers)}</tbody>
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
  customers: state.tellerState.customers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showAllCustomers: () => dispatch(actShowAllCustomersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTransaction);
