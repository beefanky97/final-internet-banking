import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { getHistoryTransaction, getDebtList } from "src/app/actions/creditActions";
import { getHistoryTransaction as getHistoryTransactionTeller } from "src/app/actions/tellerActions";

import * as qs from "query-string";

interface Props {
  getDebtList: any;
  othersDebt: [],
  myDebt: [],
  othersUnpaidDebt: [],
  myUnpaidDebt: [],
}

const DebtReminderList: React.FC<Props> = (props) => {
  const [showedList, setShowedList] = useState([]);
  const [activeList, setActiveList] = useState(1);

  useEffect(() => {
    props.getDebtList();
  }, []);

  const showHistoryTransactions = () => {
    console.log("props my debt", props);
    return showedList.map((c: any, i: number) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{c.card_number}</td>
        <td>{c.full_name}</td>
        <td>{c.message}</td>
        <td>{c.money}</td>
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
                <div className="btn-group not-margin">
                  <button className={activeList === 1 ? "active" : ""} onClick={() => {setShowedList(props.othersDebt); setActiveList(1);}}>
                    Nợ người khác
                  </button>
                  <button className={activeList === 2 ? "active" : ""} onClick={() => {setShowedList(props.myDebt); setActiveList(2);}}>
                    Người khác nợ
                  </button>
                  <button className={activeList === 3 ? "active" : ""} onClick={() => {setShowedList(props.othersUnpaidDebt); setActiveList(3);}}>
                    Nợ người khác chưa thanh toán
                  </button>
                  <button className={activeList === 4? "active" : ""} onClick={() => {setShowedList(props.myUnpaidDebt); setActiveList(4);}}>
                    Người khác nợ chưa thanh toán
                  </button>
                </div>
                <table className="table table-light table-hover table-striped">
                  <thead>
                    <tr className="table-warning">
                      <th>STT</th>
                      <th>Số thẻ</th>
                      <th>Họ tên</th>
                      <th>Lời nhắn</th>
                      <th>Số tiền</th>
                    </tr>
                  </thead>
                  <tbody>{showHistoryTransactions()}</tbody>
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
  othersDebt: state.creditState.othersDebt,
  myDebt: state.creditState.myDebt,
  othersUnpaidDebt: state.creditState.othersUnpaidDebt,
  myUnpaidDebt: state.creditState.myUnpaidDebt,
  isLoading: state.commonState.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDebtList: () => dispatch(getDebtList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DebtReminderList);
