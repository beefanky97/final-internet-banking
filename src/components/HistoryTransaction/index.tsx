import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { getHistoryTransaction } from "src/app/actions/creditActions";
import { getHistoryTransaction as getHistoryTransactionTeller } from "src/app/actions/tellerActions";

import * as qs from 'query-string';

interface Props {
  getHistoryTransaction: any;
  getHistoryTransactionTeller: any;
  remindingDebtTransactions: [];
  sendingTransactions: [];
  receivingTransactions: [];
  remindingDebtTransactionsTeller: [];
  sendingTransactionsTeller: [];
  receivingTransactionsTeller: [];
}

const HistoryTransactions: React.FC<Props> = (props) => {
  const [type, setType] = useState("");
  const [cardNumber, setCardNumber] = useState(0);

  useEffect(() => {
    const search = qs.parse(window.location.search);
    if(search && search.card_number) {
      setCardNumber(+search.card_number);
    }
  })

  const callApi = (type: string) => {
    if(cardNumber) {
      props.getHistoryTransactionTeller(type, cardNumber);
    } else {
      props.getHistoryTransaction(type);
    }
    setType(type);
  };

  const showHistoryTransactions = (type: string) => {
    let historyTransactions: any = [];
    if (type === "sending") {
      historyTransactions = cardNumber ? props.sendingTransactionsTeller : props.sendingTransactions;
    }
    if (type === "receiving") {
      historyTransactions = cardNumber ? props.receivingTransactionsTeller : props.receivingTransactions;
    }
    if (type === "reminding-debt") {
      historyTransactions = cardNumber ? props.remindingDebtTransactionsTeller : props.remindingDebtTransactions;
    }
    if (!historyTransactions) {
      return (
        <tr>
          <td colSpan={4}>Không có lịch sử giao dịch nào</td>
        </tr>
      );
    }
    return historyTransactions.map((c: any, i: number) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{c.card_number}</td>
        <td>{c.money}</td>
        <td>{c.message}</td>
      </tr>
    ));
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Lịch sử giao dịch" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="history-transaction">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="contact-form-area contact-page">
                <div className="btn-group">
                  <button className={type === "sending" ? "active" : ''} onClick={() => callApi("sending")}>Gửi</button>
                  <button className={type === "receiving" ? "active" : ''} onClick={() => callApi("receiving")}>Nhận</button>
                  <button className={type === "reminding-debt" ? "active" : ''} onClick={() => callApi("reminding-debt")}>Nhắc nợ</button>
                </div>
                <table className="table table-light table-hover table-striped">
                  <thead>
                    <tr className="table-warning">
                      <th>STT</th>
                      <th>Số thẻ</th>
                      <th>Số tiền</th>
                      <th>Lời nhắn</th>
                    </tr>
                  </thead>
                  <tbody>{showHistoryTransactions(type)}</tbody>
                </table>
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
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getHistoryTransaction: (type: string) => dispatch(getHistoryTransaction(type)),
  getHistoryTransactionTeller: (type: string, card_number: number) => dispatch(getHistoryTransactionTeller(type, card_number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTransactions);
