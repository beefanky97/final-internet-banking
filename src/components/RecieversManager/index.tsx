import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login, logout } from "src/app/actions/accountActions";
import {
  getReciever,
  deleteReciever,
  editReciever,
  addReciever,
} from "src/app/actions/recieverActions";
import { commonActionTypes } from "src/app/actions/commonActions";
import HeaderBody from "../commons/HeaderBody";
import ReactPaginate from "react-paginate";

interface Props {
  recievers: any;
  isLoading: boolean;
  getReciever: () => void;
  deleteReciever: any;
  editReciever: any;
  addReciver: any;
}

const RecieversManager: React.FC<Props> = (props) => {
  const [indexEdit, setIndexEdit] = useState(-1);
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [nameEdit, setNameEdit] = useState("");
//pagenation
const [offset, setOffset] = useState(0);
const [perPage, setPerPage] = useState(10);
const [currentPage, setCurrentPage] = useState(0);
const [pageCount, setPageCount] = useState(0);
const [postData, setPostData] = useState([]);

useEffect(() => {
  if (props.recievers.length > 0) {
    const slice = props.recievers.slice(offset, offset + perPage);
    setPostData(slice);
    setPageCount(Math.ceil(props.recievers.length / perPage));
  }
}, [props.recievers]);

  useEffect(() => {
    props.getReciever();
    console.log("isLoading", props.isLoading);
  }, [props.isLoading]);

  const clearInput = () => {
    setCardNumber("");
    setName("");
  };

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const offsetTemp = selectedPage * perPage;

    setCurrentPage(selectedPage);
    setOffset(offsetTemp);
    const slice = props.recievers.slice(offsetTemp, offsetTemp + perPage);
    setPostData(slice);
  };

  const enableEdit = (index: number) => {
    setIndexEdit(index);
  };

  const handleAddReciever = () => {
    if (cardNumber) {
      props.addReciver(+cardNumber, name);
      clearInput();
    } else {
      console.log("fill and continute!");
      alert("Hãy điền số tài khoản!");
    }
  };

  const handleEditReciever = (
    id: string,
    card_number: number,
    reminiscent_name: string
  ) => {
    props.editReciever(id, card_number, reminiscent_name);
    enableEdit(-1);
  };

  const handleDeleteReciever = (id_customer: string) => {
    props.deleteReciever(id_customer);
  };

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Danh Sách Người Nhận" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">DANH SÁCH NGƯỜI NHẬN</h4>

                  {/* begin action */}
                  <div className="row justify-content-between mt-15 mb-15">
                    <div className="row col-lg-9 align-self-start">
                      <div className="col-lg-6 fdr">
                        <div className="keyword">
                          <span>Số Tài Khoản</span>
                        </div>
                        <div className="input-info">
                          <input
                            onChange={(e) => setCardNumber(e.target.value)}
                            type="number"
                            placeholder="Số tài khoản"
                            value={cardNumber}
                            className="col-12"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 fdr">
                        <div className="keyword">
                          <span>Tên Gợi Nhớ</span>
                        </div>
                        <div className="input-info">
                          <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Tên gợi nhớ"
                            className="col-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="justify-content-end mb-15 fdr">
                      <button
                        className="btn btn-hv mr-15" style={{width: 220}}
                        type="submit"
                        onClick={handleAddReciever}
                      >
                        <i
                          style={{ color: "white", cursor: "pointer" }}
                          className="fa fa-plus"
                          aria-hidden="true"
                        />
                        &nbsp;Thêm người nhận
                      </button>
                    </div>
                  </div>
                  {/* end action */}

                  {/* begin table list transactions */}
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Số tài khoản</th>
                        <th>Họ và tên</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {postData.map((reciever: any, index: number) => {
                        const { _id, card_number, reminiscent_name } = reciever;
                        if (indexEdit !== index) {
                          return (
                            <tr key={index}>
                              <td>{index + 1 + currentPage*10}</td>
                              <td>{card_number}</td>
                              <td>{reminiscent_name}</td>
                              <td>
                                <i
                                  style={{
                                    color: "blue",
                                    cursor: "pointer",
                                    alignSelf: "center",
                                  }}
                                  className="fa fa-edit"
                                  aria-hidden="true"
                                  onClick={() => enableEdit(index)}
                                ></i>
                              </td>
                              <td>
                                <i
                                  style={{
                                    color: "red",
                                    cursor: "pointer",
                                    alignSelf: "center",
                                  }}
                                  className="fa fa-trash-alt"
                                  aria-hidden="true"
                                  onClick={() => handleDeleteReciever(_id)}
                                ></i>
                              </td>
                            </tr>
                          );
                        } else {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{card_number}</td>
                              <td>
                                <div className="input-info">
                                  <input
                                    onChange={(e) =>
                                      setNameEdit(e.target.value)
                                    }
                                    type="text"
                                    defaultValue={reminiscent_name}
                                    className=""
                                  />
                                </div>
                              </td>
                              <td>
                                <i
                                  style={{
                                    color: "green",
                                    cursor: "pointer",
                                    alignSelf: "center",
                                  }}
                                  className="fa fa-check"
                                  aria-hidden="true"
                                  onClick={() =>
                                    handleEditReciever(
                                      _id,
                                      card_number,
                                      reminiscent_name
                                    )
                                  }
                                ></i>
                              </td>
                              <td>
                                <i
                                  style={{
                                    color: "red",
                                    cursor: "pointer",
                                    alignSelf: "center",
                                  }}
                                  className="fa fa-times"
                                  aria-hidden="true"
                                  onClick={() => enableEdit(-1)}
                                ></i>
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                  {/* end table list transactions */}

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
                    activeClassName={"active"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({
  recievers: state.recieverState.recievers,
  isLoading: state.commonState.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getReciever: () => dispatch(getReciever()),
  deleteReciever: (id_customer: string) =>
    dispatch(deleteReciever(id_customer)),
  editReciever: (id: string, card_number: number, reminiscent_name: string) =>
    dispatch(editReciever(id, card_number, reminiscent_name)),
  addReciver: (card_number: number, reminiscent_name: string) =>
    dispatch(addReciever(card_number, reminiscent_name)),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(RecieversManager);
