import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { getHistoryTransaction, getDebtList, transfer } from "src/app/actions/creditActions";
import { getHistoryTransaction as getHistoryTransactionTeller } from "src/app/actions/tellerActions";

import * as qs from "query-string";
import { appAxios } from "src/api/appAxios";

interface Props {
  getDebtList: any;
  payDebting: any;
  othersDebt: [];
  myDebt: [];
  othersUnpaidDebt: [];
  myUnpaidDebt: any;
  isLoading: boolean;
}

const DebtReminderList: React.FC<Props> = (props) => {
  const [showedList, setShowedList] = useState([]);
  const [activeList, setActiveList] = useState(1);
  const [msg, setMsg] = useState("");
  const [idCancel, setIDCancel] = useState("");

  useEffect(() => {
    console.log("over", props.isLoading);
    async function getList() {
      setTimeout(async () => {
        await props.getDebtList();
      }, 0);
      await setShowedList(props.othersDebt);
    }
    getList();
  }, []);

  const handlePayment = (id: number) => {
    appAxios.post(`/debtors/transaction/reminding-debt/${id}`).then((res) => {
      if (!res.data.is_error) {
        alert("Thanh toán thành công!");
      } else {
        alert(res.data.msg);
      }
    });
  };

  const handleCancel = () => {
    appAxios
      .post(`/debtors/delete/${idCancel}`, { message: msg })
      .then((res) => {
        setIDCancel("");
        alert("Huỷ nhắc nợ thành công!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showHistoryTransactions = () => {
    console.log("props my debt", props);
    return showedList.map((c: any, i: number) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{c.card_number}</td>
        <td>{c.full_name}</td>
        <td>{c.message}</td>
        <td>{c.money}</td>
        <td>
          <button className="btn-action" onClick={() => setIDCancel(c._id)}>Huỷ</button>
          {activeList === 4 && <button className="btn-action" onClick={() => handlePayment(c._id)}>Thanh toán</button>}
        </td>
      </tr>
    ));
  };

  return (
    <div className="overlay-debt">
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Lịch sử giao dịch" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="history-transaction">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="contact-form-area contact-page">
                <div className="btn-group not-margin">
                  <button
                    className={activeList === 1 ? "active" : ""}
                    onClick={() => {
                      setShowedList(props.othersDebt);
                      setActiveList(1);
                    }}
                  >
                    Người khác nợ
                  </button>
                  <button
                    className={activeList === 2 ? "active" : ""}
                    onClick={() => {
                      setShowedList(props.myDebt);
                      setActiveList(2);
                    }}
                  >
                    Nợ người khác
                  </button>
                  <button
                    className={activeList === 3 ? "active" : ""}
                    onClick={() => {
                      setShowedList(props.othersUnpaidDebt);
                      setActiveList(3);
                    }}
                  >
                    Người khác nợ chưa thanh toán
                  </button>
                  <button
                    className={activeList === 4 ? "active" : ""}
                    onClick={() => {
                      setShowedList(props.myUnpaidDebt);
                      setActiveList(4);
                    }}
                  >
                    Nợ người khác chưa thanh toán
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
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>{showHistoryTransactions()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`msg-block ${idCancel && "show-msg"}`}>
        <div className="close-block">
          <span className="close-block__label">Lời nhắn:</span>
          <span className="close-block__close" onClick={() => setIDCancel("")}>X</span>
        </div>
        <textarea onChange={(e) => setMsg(e.target.value)} className="msg-block__content"></textarea>
        <button className="nsg-block__button" onClick={handleCancel}>
          Xác nhận
        </button>
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
  payDebting: (transferInfo: Object) => dispatch(transfer(transferInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DebtReminderList);
