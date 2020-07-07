import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { show, hide } from "redux-modal";
import moment from "moment";

import HeaderBody from "src/components/commons/HeaderBody";
import { connect } from "react-redux";
import {
  actGetTransactions,
  actGetDetailTransaction,
} from "src/app/actions/admin/adminAction";
import DetailTransactionModal from "./DetailTransactionModal/index";
import { relative } from "path";

interface Props {
  getTransactions: (partner_code: number) => void;
  transactions: [];
  info_transaction: any;
  openModal: (name: string) => void;
  closeModal: () => void;
  getDetailTransaction: (id: string) => void;
}

const HistoryTransactions: React.FC<Props> = (props) => {
  const [partnerCode, setPartnerCode] = useState(1);
  const [dateStart, setDateStart] = useState("2020-01-01");
  const [dateEnd, setDateEnd] = useState(moment(moment()).format("YYYY-MM-DD"));
  let totalMoney;

  useEffect(() => {
    props.getTransactions(partnerCode);
  }, [partnerCode]);

  const handleOpenModal = (id: string) => {
    props.openModal("DETAIL_TRANSACTION_MODAL");
    props.getDetailTransaction(id);
  };

  const showListTransactions = (transactions: []) => {
    // console.log("listTransactions", transactions);

    transactions.sort(function (a: any, b: any) {
      // Sap xep tu moi toi cu
      const date_a = parseInt(moment(a.date_created).format("x"));
      const date_b = parseInt(moment(b.date_created).format("x"));
      return date_b - date_a;
    });

    const list = transactions.filter((t: any) => {
      const date_created = moment(t.date_created).format("YYYY-MM-DD");
      // kiem tra ngay nguoi dung chon xem
      return (
        moment(date_created).format("x") >= moment(dateStart).format("x") &&
        moment(date_created).format("x") <= moment(dateEnd).format("x")
      );
    });

    totalMoney = list.reduce((sum, current: any) => sum + current.money, 0);

    return list.map((t: any, i) => {
      return (
        <tr key={i} onClick={() => handleOpenModal(t._id)}>
          <td>{i + 1}</td>
          <td>{t.bank_name}</td>
          <td>{t.card_number_sender}</td>
          <td>{t.card_number_receiver}</td>
          <td>{`${t.money} VND`}</td>
          {/* <td>{t.message}</td> */}
          <td>{moment(t.date_created).format("DD-MM-YYYY")}</td>
        </tr>
      );
    });
  };

  // const showTotalMoney = () => {
  //   setTotalMoney(money);
  //   return <p>{totalMoney}</p>;
  // };

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

                  {/* begin action */}
                  <div
                    className="row justify-content-between mt-15 mb-15"
                  >
                    <div className="col-lg-4 fdr ">
                      <div className="keyword">
                        <span>Ngân Hàng</span>
                      </div>
                      <div className="input-info">
                        <select
                          className="col-12 cn-dropdown"
                          id="partnerBank"
                          onChange={(e) => {
                            setPartnerCode(+e.target.value);
                          }}
                        >
                          <option className="dropdown" value="1">
                            Tất Cả
                          </option>
                          <option className="dropdown" value="2">
                            Ngân Hàng PGP
                          </option>
                          <option className="dropdown" value="3">
                            Ngân Hàng RSA
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="row col-lg-8 justify-content-end">
                      <div className="col-lg-4 fdr">
                        <div className="keyword">
                          <span>Từ</span>
                        </div>
                        <div className="input-info">
                          <input
                            type="date"
                            className="text-right"
                            id="dateStart"
                            value={dateStart}
                            onChange={(e) => {
                              setDateStart(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-4 fdr">
                        <div className="keyword">
                          <span>Đến</span>
                        </div>
                        <div className="input-info">
                          <input
                            type="date"
                            className="text-right"
                            id="dateEnd"
                            value={dateEnd}
                            onChange={(e) => {
                              setDateEnd(e.target.value);
                            }}
                          />
                        </div>
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
                        <th>STK Người Gửi</th>
                        <th>STK Người Nhận</th>
                        <th>Số Tiền</th>
                        {/* <th>Lời Nhắn</th> */}
                        <th>Ngày Gửi</th>
                      </tr>
                    </thead>
                    <tbody>{showListTransactions(props.transactions)}</tbody>
                  </table>
                  {/* end table list transactions */}

                  {/* begin total money */}
                  <div
                    className="row justify-content-end mt-15"
                  >
                    <div className="col-lg-4 fdr">
                      <div className="keyword">
                        <span>Tổng Tiền</span>
                      </div>
                      <div className="input-info">
                        <input
                          type="text"
                          className="col-12 text-right"
                          id="totalMoney"
                          value={`${totalMoney} VND`}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* end total money */}

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
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  transactions: state.adminState.transactions,
  info_transaction: state.adminState.transaction,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: (name: string) => dispatch(show(name)),
  getTransactions: (partner_code: number) =>
    dispatch(actGetTransactions(partner_code)),
  getDetailTransaction: (id: string) => dispatch(actGetDetailTransaction(id)),
  closeModal: () => dispatch(hide("DETAIL_TRANSACTION_MODAL")),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryTransactions);
