import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";

import HeaderBody from "src/components/commons/HeaderBody";
import {
  actGetTellers,
  actDeleteTeller,
  actAddTellerSuccess,
  actEditTellerSuccess,
} from "src/app/actions/admin/adminAction";
import { Link } from "react-router-dom";

interface Props {
  getTellers: () => void;
  tellers: [];
  deleteTeller: (id: string) => void;
  resetStatusAddTeller: (bool: boolean) => void;
  resetStatusEditTeller: (bool: boolean) => void;
}

const AllTeller: React.FC<Props> = (props) => {
  const [flagDelete, setFlagDelete] = useState(false);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setFlagDelete(false);
    props.getTellers();

    props.resetStatusAddTeller(false);
    props.resetStatusEditTeller(false);
  }, [flagDelete]);

  useEffect(() => {
    if (props.tellers.length > 0) {
      const slice = props.tellers.slice(offset, offset + perPage);
      setPostData(slice);
      setPageCount(Math.ceil(props.tellers.length / perPage));
    }
  }, [props.tellers]);

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const offsetTemp = selectedPage * perPage;

    setCurrentPage(selectedPage);
    setOffset(offsetTemp);
    const slice = props.tellers.slice(offsetTemp, offsetTemp + perPage);
    setPostData(slice);
  };

  const showListTellers = (tellers: any) =>
    tellers.map((t: any, i: number) => (
      <tr key={i}>
        <td>{i + 1 + currentPage*10}</td>
        <td>{t.username}</td>
        <td>{t.full_name}</td>
        <td>{t.email}</td>
        <td>
          <Link to={`/admin/teller/detail?id=${t._id}`}>
            <i
              style={{ color: "green", cursor: "pointer" }}
              className="fa fa-eye"
              aria-hidden="true"
            ></i>
          </Link>
        </td>
        <td>
          <i
            style={{ color: "red", cursor: "pointer" }}
            className="fa fa-trash-alt"
            aria-hidden="true"
            onClick={() => {
              console.log("press delete button", t._id);
              setFlagDelete(true);

              props.deleteTeller(t._id);
            }}
          ></i>
        </td>
      </tr>
    ));

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Giao dịch viên" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">DANH SÁCH GIAO DỊCH VIÊN</h4>
                  {/* begin link add teller */}
                  <div className="row justify-content-end mb-15">
                    <Link
                      to={`/admin/teller/add`}
                      className="btn credit-btn mr-15"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      &nbsp;&nbsp;&nbsp;Thêm
                    </Link>
                  </div>
                  {/* end link add teller */}
                  <table className="table table-light table-hover table-striped">
                    <thead>
                      <tr className="table-warning">
                        <th>STT</th>
                        <th>Tên đăng nhập</th>
                        <th>Tên đầy đủ</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{showListTellers(postData)}</tbody>
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
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tellers: state.adminState.tellers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTellers: () => dispatch(actGetTellers()),
  deleteTeller: (id: string) => dispatch(actDeleteTeller(id)),
  resetStatusAddTeller: (bool: boolean) => dispatch(actAddTellerSuccess(bool)),
  resetStatusEditTeller: (bool: boolean) =>
    dispatch(actEditTellerSuccess(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTeller);
