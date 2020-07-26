import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { show, hide } from "redux-modal";
import moment from "moment";
import HeaderBody from "src/components/commons/HeaderBody";
import { getHistoryTransaction } from "src/app/actions/creditActions";
import { getHistoryTransaction as getHistoryTransactionTeller } from "src/app/actions/tellerActions";
import {
  actGetDetailTransaction,
} from "src/app/actions/admin/adminAction";
import DetailTransactionModal from "../Admin/HistoryTransactions/DetailTransactionModal/index";

import * as qs from "query-string";

interface Props {
  getHistoryTransaction: any;
  getHistoryTransactionTeller: any;
  remindingDebtTransactions: [];
  sendingTransactions: [];
  receivingTransactions: [];
  remindingDebtTransactionsTeller: [];
  sendingTransactionsTeller: [];
  receivingTransactionsTeller: [];
  info_transaction: any;
  openModal: (name: string) => void;
  closeModal: () => void;
  getDetailTransaction: (id: string) => void;
}

const HistoryTransactions: React.FC<Props> = (props) => {
  const [type, setType] = useState("");
  const [cardNumber, setCardNumber] = useState(0);

  useEffect(() => {
    const search = qs.parse(window.location.search);
    if (search && search.card_number) {
      setCardNumber(+search.card_number);
    }

    callApi("sending");
  }, []);

  const callApi = (type: string) => {
    if (cardNumber) {
      props.getHistoryTransactionTeller(type, cardNumber);
    } else {
      props.getHistoryTransaction(type);
    }
    setType(type);
  };

  const shortDESCFollowDate = (transactions: any) => {
    return transactions.sort(function (a: any, b: any) {
      // Sap xep tu moi toi cu
      const date_a = parseInt(moment(a.date_created).format("x"));
      const date_b = parseInt(moment(b.date_created).format("x"));
      return date_b - date_a;
    });
  };

  const handleOpenModal = (id: string) => {
    props.openModal("DETAIL_TRANSACTION_MODAL");
    props.getDetailTransaction(id);
  };

  const showHistoryTransactions = (type: string) => {
    let historyTransactions: any = [];
    if (type === "sending") {
      historyTransactions = cardNumber
        ? props.sendingTransactionsTeller
        : props.sendingTransactions;
    }
    if (type === "receiving") {
      historyTransactions = cardNumber
        ? props.receivingTransactionsTeller
        : props.receivingTransactions;
    }
    if (type === "reminding-debt") {
      historyTransactions = cardNumber
        ? props.remindingDebtTransactionsTeller
        : props.remindingDebtTransactions;
    }
    if (!historyTransactions) {
      return (
        <tr>
          <td colSpan={4}>Không có lịch sử giao dịch nào</td>
        </tr>
      );
    }
    const transactions = shortDESCFollowDate(historyTransactions);
    return transactions.map((c: any, i: number) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{c.bank_name}</td>
        <td>{c.card_number}</td>
        <td>{c.money}</td>
        <td>{c.message}</td>
        <td>{moment(c.date_created).format("DD-MM-YYYY h:mm:ss")}</td>
        <td><i
              style={{ color: "green", cursor: "pointer" }}
              className="fa fa-eye"
              aria-hidden="true"
              onClick={() => handleOpenModal(c._id)}
            ></i></td>
      </tr>
    ));
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Lịch Sử Giao Dịch" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">
                    Danh Sách Giao Dịch{" "}
                    {type === "sending"
                      ? "Giao Dịch Chuyển Khoản"
                      : type === "receiving"
                      ? "Giao Dịch Nhận Tiền"
                      : "Giao Dịch Thanh Toán Nhắc Nợ"}
                  </h4>

                  {/* begin action */}
                  <div className="row justify-content-between mt-15 mb-15">
                    <div className="col-lg-6 fdr ">
                      <div className="keyword">
                        <span>Loại Giao Dịch</span>
                      </div>
                      <div className="input-info">
                        <select
                          className="col-12 cn-dropdown"
                          id="partnerBank"
                          onChange={(e) => {
                            callApi(e.target.value);
                          }}
                        >
                          <option className="dropdown" value="sending">
                            Giao Dịch Chuyển Khoản
                          </option>
                          <option className="dropdown" value="receiving">
                            Giao Dịch Nhận Tiền
                          </option>
                          <option className="dropdown" value="reminding-debt">
                            Giao Dịch Thanh Toán Nhắc Nợ
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* end action */}

                  {/* begin table list transactions */}
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Tên Ngân Hàng</th>
                        <th>
                          {type === "sending"
                            ? "STK Người Nhận"
                            : type === "receiving"
                            ? "STK Người Gửi"
                            : "STK Người Trả"}
                        </th>
                        <th>Số Tiền</th>
                        <th>Lời Nhắn</th>
                        <th>Ngày Gửi</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{showHistoryTransactions(type)}</tbody>
                  </table>
                  {/* end table list transactions */}
                </div>
              </div>

              <div style={{ zIndex: 1000 }}>
              {/* begin modal detail transaction */}
              <DetailTransactionModal
                  closeModal={props.closeModal}
                  info_transaction={props.info_transaction}
                />
              {/* end modal detail transaction */}
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
  receivingTransactions: state.creditState.receivingTransactions,
  remindingDebtTransactionsTeller: state.tellerState.remindingDebtTransactions,
  sendingTransactionsTeller: state.tellerState.sendingTransactions,
  receivingTransactionsTeller: state.tellerState.receivingTransactions,
  isLoading: state.commonState.isLoading,
  info_transaction: state.adminState.transaction,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getHistoryTransaction: (type: string) =>
    dispatch(getHistoryTransaction(type)),
  getHistoryTransactionTeller: (type: string, card_number: number) =>
    dispatch(getHistoryTransactionTeller(type, card_number)),
    openModal: (name: string) => dispatch(show(name)),
  
  getDetailTransaction: (id: string) => dispatch(actGetDetailTransaction(id)),
  closeModal: () => dispatch(hide("DETAIL_TRANSACTION_MODAL")),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryTransactions);
