import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import {
  actShowAllCustomersRequest,
  actAddCustomerSuccess,
} from "src/app/actions/tellerActions";
import { Link } from "react-router-dom";

interface Props {
  customers: [];
  showAllCustomers: () => void;
  resetStatusAdd: (bool: boolean) => void;
}

const HistoryTransaction: React.FC<Props> = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    props.showAllCustomers();
    props.resetStatusAdd(false);
  }, []);

  const listCustomers = (customers: []) =>
    customers.map((c: any, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{c.username}</td>
        <td>{c.full_name}</td>
        <td>{c.email}</td>
        <td>
          <Link to={`/teller/customer/detail?id=${c._id}`}>
            <i
              style={{ color: "green", cursor: "pointer" }}
              className="fa fa-eye"
              aria-hidden="true"
            ></i>
          </Link>
        </td>
      </tr>
    ));

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Khách hàng" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area" style={{ height: 2000 }}>
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Danh sách tài khoản khách hàng</h4>
                  <div className='d-flex justify-content-between align-items-end mb-15'>
                    <div className="col-lg-6 fdr" style={{marginLeft: -14}}>
                      <div className="keyword">
                        <span>Số tài khoản</span>
                      </div>
                      <div className="input-info">
                        <input
                          type="text"
                          className="col-3 text-center"
                          value={props.customers.length}
                          disabled
                        />
                      </div>
                    </div>
                    <Link
                      to="/teller/add-customer"
                      className="btn btn-hv"
                      style={{
                        paddingTop: 10,
                        paddingRight: 150,
                      }}
                    >
                      Thêm tài khoản
                    </Link>
                  </div>
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Tên đăng nhập</th>
                        <th>Tên đầy đủ</th>
                        <th>Email</th>
                        <th></th>
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
  resetStatusAdd: (bool: boolean) => dispatch(actAddCustomerSuccess(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTransaction);
