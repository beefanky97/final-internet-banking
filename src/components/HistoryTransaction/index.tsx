import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { actShowAllCustomersRequest } from "src/app/actions/tellerActions";
import { getHistoryTransaction } from "src/app/actions/creditActions";

interface Props {
  getHistoryTransaction: (type: string) => void;
  remindingDebtTransactions: [];
  sendingTransactions: [];
  recievingTransactions: [];
  isLoading: boolean;
}

const ShowAllCustomers: React.FC<Props> = (props) => {
  useEffect(() => {
    props.getHistoryTransaction("reminding-debt");
  }, []);

  useEffect(() => {
    console.log("lisst 1", props.sendingTransactions);
    console.log("lisst 2", props.recievingTransactions);
    console.log("lisst 3", props.remindingDebtTransactions);
  }, [props.isLoading]);

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
                  <h4 className="mb-50">Danh sách khách hàng</h4>
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Tên đăng nhập</th>
                        <th>Tên đầy đủ</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>{/* {listCustomers(props.customers)} */}</tbody>
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
  remindingDebtTransactions: state.creditState.remindingDebtTransactions,
  sendingTransactions: state.creditState.sendingTransactions,
  recievingTransactions: state.creditState.recievingTransactions,
  isLoading: state.commonState.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getHistoryTransaction: (type: string) => dispatch(getHistoryTransaction(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllCustomers);
