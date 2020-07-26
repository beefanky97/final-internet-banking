import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import HeaderBody from "src/components/commons/HeaderBody";
import {
  getHistoryTransaction,
  getDebtList,
  transfer,
} from "src/app/actions/creditActions";
import { getHistoryTransaction as getHistoryTransactionTeller } from "src/app/actions/tellerActions";

import * as qs from "query-string";
import { appAxios } from "src/api/appAxios";
import { Link } from "react-router-dom";

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

  const [isDelete, setIsDelete] = useState(false);

  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [postDataOthersDebt, setPostDataOthersDebt] = useState([]);
  const [postDataMyDebt, setPostDataMyDebt] = useState([]);
  const [postDataOthersUnpaidDebt, setPostDataOthersUnpaidDebt] = useState([]);
  const [postDataMyUnpaidDebt, setPostDataMyUnpaidDebt] = useState([]);

  useEffect(() => {
    setIsDelete(false);

    console.log("over", props.isLoading);
    async function getList() {
      setTimeout(async () => {
        await props.getDebtList();
      }, 0);
      await setShowedList(props.othersDebt);
    }

    getList();
    // }, [isDelete, activeList]);
  }, [isDelete]);

  useEffect(() => {
    const slice1 = props.othersDebt.slice(offset, offset + perPage);
    setPageCount(Math.ceil(props.othersDebt.length / perPage));
    setPostDataOthersDebt(slice1);

    const slice2 = props.myDebt.slice(offset, offset + perPage);
    setPageCount(Math.ceil(props.myDebt.length / perPage));
    setPostDataMyDebt(slice2);

    const slice3 = props.othersUnpaidDebt.slice(offset, offset + perPage);
    setPageCount(Math.ceil(props.othersUnpaidDebt.length / perPage));
    setPostDataOthersUnpaidDebt(slice3);

    const slice4 = props.myUnpaidDebt.slice(offset, offset + perPage);
    setPageCount(Math.ceil(props.myUnpaidDebt.length / perPage));
    setPostDataMyUnpaidDebt(slice4);
  }, [props.othersDebt]);

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const offsetTemp = selectedPage * perPage;

    setCurrentPage(selectedPage);
    setOffset(offsetTemp);

    // let slice;

    if (activeList === 1) {
      const slice = props.othersDebt.slice(offsetTemp, offsetTemp + perPage);
      setPostDataOthersDebt(slice);
    } else if (activeList === 2) {
      const slice = props.myDebt.slice(offsetTemp, offsetTemp + perPage);
      setPostDataMyDebt(slice);
    } else if (activeList === 2) {
      const slice = props.othersUnpaidDebt.slice(
        offsetTemp,
        offsetTemp + perPage
      );
      setPostDataOthersUnpaidDebt(slice);
    } else {
      const slice = props.myUnpaidDebt.slice(offsetTemp, offsetTemp + perPage);
      setPostDataMyUnpaidDebt(slice);
    }
  };

  const handlePayment = (id: number) => {
    appAxios.post(`/debtors/transaction/reminding-debt/${id}`).then((res) => {
      if (!res.data.is_error) {
        alert("Thanh toán thành công!");
        setIsDelete(true);
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
        setIsDelete(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showHistoryTransactions = (list: any) => {
    console.log("props my debt", props);
    return list.map((c: any, i: number) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{c.card_number}</td>
        <td>{c.full_name}</td>
        <td>{c.message}</td>
        <td>{c.money}</td>
        <td className="justify-content-center">
          {/* <button className="btn-action" onClick={() => setIDCancel(c._id)}>
            Huỷ
          </button> */}
          <i
            style={{ color: "red", cursor: "pointer", alignSelf: "center" }}
            className="fa fa-trash-alt"
            aria-hidden="true"
            onClick={() => {
              setIDCancel(c._id);
            }}
          ></i>
        </td>
        {activeList === 4 && (
          <td>
            {/* <button className="btn-action" onClick={() => handlePayment(c._id)}>
              Thanh toán
            </button> */}
            <i
              style={{ color: "blue", cursor: "pointer", alignSelf: "center" }}
              className="fa fa-shopping-cart"
              aria-hidden="true"
              onClick={() => handlePayment(c._id)}
            ></i>
          </td>
        )}
      </tr>
    ));
  };

  return (
    <div className="overlay-debt">
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Danh sách nợ" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">
                    DANH SÁCH{" "}
                    {activeList === 1
                      ? "NỢ BẢN THÂN TẠO"
                      : activeList === 2
                      ? "NỢ NGƯỜI KHÁC GỬI"
                      : activeList === 3
                      ? "NỢ BẢN THÂN TẠO CHƯA THANH TOÁN"
                      : "NỢ NGƯỜI KHÁC GỬI CHƯA THANH TOÁN"}
                  </h4>

                  <div className="row justify-content-between mt-15 mb-15">
                    <div className="col-lg-6 fdr ">
                      <div className="keyword">
                        <span>Loại Nợ</span>
                      </div>
                      <div className="input-info">
                        <select
                          className="col-12 cn-dropdown"
                          id="partnerBank"
                          onChange={(e) => {
                            setActiveList(+e.target.value);
                          }}
                        >
                          <option className="col-12 dropdown" value="1">
                            Nợ Bản Thân Tạo
                          </option>
                          <option className="col-12 dropdown" value="2">
                            Nợ Người Khác Gửi
                          </option>
                          <option className="col-12 dropdown" value="3">
                            Nợ Bản Thân Tạo Chưa Thanh Toán
                          </option>
                          <option className="col-12 dropdown" value="4">
                            Nợ Người Khác Gửi Chưa Thanh Toán
                          </option>
                        </select>
                      </div>
                    </div>

                    {(activeList === 1 || activeList === 3) && (
                      <div className="justify-content-end mb-15 fdr">
                        <Link
                          to={`/debt-reminder/add`}
                          className="btn credit-btn mr-15"
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                          &nbsp;&nbsp;&nbsp;Thêm
                        </Link>
                      </div>
                    )}
                  </div>
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Số tài khoản</th>
                        <th>Họ và tên</th>
                        <th>Lời nhắn</th>
                        <th>Số tiền</th>
                        <th></th>
                        {activeList === 4 && <th></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {activeList === 1
                        ? showHistoryTransactions(postDataOthersDebt)
                        : activeList === 2
                        ? showHistoryTransactions(postDataMyDebt)
                        : activeList === 3
                        ? showHistoryTransactions(postDataOthersUnpaidDebt)
                        : showHistoryTransactions(postDataMyUnpaidDebt)}
                      {/* {showHistoryTransactions(postData)} */}
                      {/* {activeList === 1
                        ? showHistoryTransactions(props.othersDebt)
                        : activeList === 2
                        ? showHistoryTransactions(props.myDebt)
                        : activeList === 3
                        ? showHistoryTransactions(props.othersUnpaidDebt)
                        : showHistoryTransactions(props.myUnpaidDebt)} */}
                    </tbody>
                  </table>

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
          </div>
        </div>
      </div>

      <div
        className={`msg-block ${idCancel && "show-msg"}`}
        style={{
          backgroundColor: "#fff",
          borderColor: "#ffc107",
          borderWidth: 2,
          boxShadow: `0 0 20px rgba(0, 0, 0, 0.2)`,
        }}
      >
        <div className="close-block">
          <span className="close-block__label" style={{ fontWeight: "bold" }}>
            Lời nhắn:
          </span>
          <span
            className="close-block__close"
            style={{ backgroundColor: "#ffc107", cursor: "pointer" }}
            onClick={() => setIDCancel("")}
          >
            X
          </span>
        </div>
        <textarea
          style={{ borderRadius: 15, padding: 5}}
          onChange={(e) => setMsg(e.target.value)}
          className="msg-block__content"
        ></textarea>
        <button className="btn credit-btn" onClick={handleCancel}>
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
