import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login, logout } from "src/app/actions/accountActions";
import { getReciever, deleteReciever, editReciever } from "src/app/actions/recieverActions";
import { commonActionTypes } from "src/app/actions/commonActions";

interface Props {
  recievers: any;
  isLoading: boolean;
  getReciever: () => void;
  deleteReciever: any
  editReciever: any
}

const RecieversManager: React.FC<Props> = (props) => {

  useEffect(() => {
    props.getReciever();
    console.log("isLoading", props.isLoading);
  }, [props.isLoading]);

  const handleEditReciever = (id: string, card_number: number) => {
    props.editReciever(id, card_number);
  }

  const handleDeleteReciever = (id_customer: string) => {
    props.deleteReciever(id_customer);
  }
  console.log("rev", props.recievers);

  return (
    <div className="container">
      <div className="row col-md-12 col-md-offset-2 custyle">
        <a href="#" className="btn btn-primary btn-xs pull-right">
          <b>+</b> Thêm người nhận
        </a>
        <table className="table table-striped custab">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Số tài khoản</th>
              <th scope="col">Họ và tên</th>
              <th scope="col" className="text-center">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {props.recievers.map((reciever: any, index: number) => {
              const { _id, card_number, reminiscent_name } = reciever;
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{card_number}</td>
                  <td>{reminiscent_name}</td>
                  <td className="text-center">
                    <button onClick={() => handleEditReciever(_id, card_number)} className="btn btn-info btn-xs">
                      <span className="glyphicon glyphicon-edit"></span> Edit
                    </button>{" "}
                    <button onClick={() => handleDeleteReciever(_id)} className="btn btn-danger btn-xs">
                      <span className="glyphicon glyphicon-remove"></span> Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({
  recievers: state.recieverState.recievers,
  isLoading: state.commonState.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getReciever: () => dispatch(getReciever()),
  deleteReciever: (id_customer: string) => dispatch(deleteReciever(id_customer)),
  editReciever: (id: string, card_number: number) => dispatch(editReciever(id, card_number))
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(RecieversManager);
