import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { show, hide } from "redux-modal";
import moment from "moment";
import ReactPaginate from "react-paginate";

import HeaderBody from "src/components/commons/HeaderBody";
import { connect } from "react-redux";
import {
  actGetTransactions,
  actGetDetailTransaction,
} from "src/app/actions/admin/adminAction";
import DetailTransactionModal from "./DetailTransactionModal/index";

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

  //pagenation
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [postData, setPostData] = useState([]);

  let totalMoney;

  useEffect(() => {
    props.getTransactions(partnerCode);
  }, [partnerCode]);

  useEffect(() => {
    if (props.transactions.length > 0) {
      const transactions = shortAndFilterFollowDate(props.transactions);

      const slice = transactions.slice(offset, offset + perPage);

      setPostData(slice);

      if (slice.length < 10) {
        console.log("helllo");
        setCurrentPage(0);
      }

      setPageCount(Math.ceil(transactions.length / perPage));
    }
  }, [props.transactions, dateEnd, dateStart]);

  const shortAndFilterFollowDate = (transactions: any) => {
    transactions.sort(function (a: any, b: any) {
      // Sap xep tu moi toi cu
      const date_a = parseInt(moment(a.date_created).format("x"));
      const date_b = parseInt(moment(b.date_created).format("x"));
      return date_b - date_a;
    });

    return transactions.filter((t: any) => {
      const date_created = moment(t.date_created).format("YYYY-MM-DD");
      // kiem tra ngay nguoi dung chon xem
      return (
        moment(date_created).format("x") >= moment(dateStart).format("x") &&
        moment(date_created).format("x") <= moment(dateEnd).format("x")
      );
    });
  };

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const offsetTemp = selectedPage * perPage;

    const transactions = shortAndFilterFollowDate(props.transactions);

    setCurrentPage(selectedPage);
    setOffset(offsetTemp);
    const slice = transactions.slice(offsetTemp, offsetTemp + perPage);
    setPostData(slice);
  };

  const handleOpenModal = (id: string) => {
    props.openModal("DETAIL_TRANSACTION_MODAL");
    props.getDetailTransaction(id);
  };

  const showListTransactions = (transactions: any, postData: any) => {
    const list = shortAndFilterFollowDate(transactions);

    totalMoney = list.reduce(
      (sum: number, current: any) => sum + current.money,
      0
    );

    return postData.map((t: any, i: number) => {
      return (
        <tr key={i}>
          <td>{i + 1 + currentPage * 10}</td>
          <td>{t.bank_name}</td>
          <td>{t.card_number_sender}</td>
          <td>{t.card_number_receiver}</td>
          <td>{`${t.money} VND`}</td>
          {/* <td>{t.message}</td> */}
          <td>{moment(t.date_created).format("DD-MM-YYYY h:mm:ss")}</td>
          <td>
            <i
              style={{ color: "green", cursor: "pointer" }}
              className="fa fa-eye"
              aria-hidden="true"
              onClick={() => handleOpenModal(t._id)}
            ></i>
          </td>
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

                  {/* begin action */}
                  <div className="row justify-content-between mt-15 mb-15">
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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {showListTransactions(props.transactions, postData)}
                    </tbody>
                  </table>
                  {/* end table list transactions */}

                  {/* begin total money */}
                  <div className="row justify-content-end mt-15">
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

                  <div style={{ zIndex: 1, position: "relative" }}>
                    <ReactPaginate
                      previousLabel={"<<"}
                      nextLabel={">>"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
                    />
                  </div>
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
