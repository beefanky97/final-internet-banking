import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { show, hide } from "redux-modal";
import moment from "moment";

import HeaderBody from "src/components/commons/HeaderBody";
import { connect } from "react-redux";
import {
  actShowAllTransactionsRequest,
  actGetDetailTransaction,
} from "src/app/actions/admin/adminAction";
import DetailTransactionModal from "./DetailTransactionModal/index";

interface Props {
  showAllTransactions: () => void;
  transactions: [];
  info_transaction: any;
  openModal: (name: string) => void;
  closeModal: () => void;
  getDetailTransaction: (id: string) => void;
}

const HistoryTransactions: React.FC<Props> = (props) => {
  const [id, setId] = useState();

  useEffect(() => {
    props.showAllTransactions();
  }, []);

  const handleOpenModal = (id: string) => {
    console.log("id", id);
    props.openModal("DETAIL_TRANSACTION_MODAL");
    props.getDetailTransaction(id);
  };

  const listTransactions = (transactions: []) => {
    console.log("listTransactions", transactions);

    return transactions.map((t: any, i) => {
      //   setId(t._id);

      return (
        <tr key={i} onClick={() => handleOpenModal(t._id)}>
          <td>{i + 1}</td>
          <td>{t.bank_name}</td>
          <td>{t.card_number_sender}</td>
          <td>{t.card_number_receiver}</td>
          <td>{t.money}</td>
          <td>{t.message}</td>
          <td>{moment(t.date_created).format("YYYY-MM-DD")}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Lịch Sử Giao Dịch Với Đối Tác" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Danh Sách Giao Dịch</h4>
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Tên Ngân Hàng</th>
                        <th>STK Người Gửi</th>
                        <th>STK Người Nhận</th>
                        <th>Số Tiền</th>
                        <th>Lời Nhắn</th>
                        <th>Ngày Gửi</th>
                      </tr>
                    </thead>
                    <tbody>{listTransactions(props.transactions)}</tbody>
                  </table>

                  <DetailTransactionModal
                    closeModal={props.closeModal}
                    info_transaction={props.info_transaction}
                  />
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
  transactions: state.adminState.transactions,
  info_transaction: state.adminState.transaction,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: (name: string) => dispatch(show(name)),
  showAllTransactions: () => dispatch(actShowAllTransactionsRequest()),
  getDetailTransaction: (id: string) => dispatch(actGetDetailTransaction(id)),
  closeModal: () => dispatch(hide("DETAIL_TRANSACTION_MODAL")),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryTransactions);
