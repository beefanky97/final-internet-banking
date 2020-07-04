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

  useEffect(() => {
    props.getReciever();
    console.log("isLoading", props.isLoading);
  }, [props.isLoading]);

  const clearInput = () => {
    setCardNumber("");
    setName("");
  };

  const enableEdit = (index: number) => {
    setIndexEdit(index);
  };

  const handleAddReciever = () => {
    if (cardNumber && name) {
      props.addReciver(+cardNumber, name);
      clearInput();
    } else {
      console.log("fill and continute!");
    }
  };

  const handleEditReciever = (id: string, card_number: number, reminiscent_name: string) => {
    props.editReciever(id, card_number, reminiscent_name);
    enableEdit(-1);
  };

  const handleDeleteReciever = (id_customer: string) => {
    props.deleteReciever(id_customer);
  };

  return (
    <div className="container">
      <div className="row col-md-12 col-md-offset-2 custyle">
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              onClick={handleAddReciever}
              className="btn btn-primary btn-xs pull-right input-group-text"
            >
              <b>+</b> Thêm người nhận
            </button>
          </div>
          <input
            onChange={(e) => setCardNumber(e.target.value)}
            type="number"
            placeholder="Số tài khoản"
            value={cardNumber}
            className="form-control"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Tên gợi nhớ"
            className="form-control"
          />
          <i onClick={clearInput} className="fa fa-delete"></i>
        </div>
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
              if (indexEdit !== index) {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{card_number}</td>
                    <td>{reminiscent_name}</td>
                    <td className="text-center">
                      <button
                        onClick={() =>
                          enableEdit(index)
                        }
                        className="btn btn-info btn-xs"
                      >
                        <span className="glyphicon glyphicon-edit"></span> Edit
                      </button>{" "}
                      <button
                        onClick={() => handleDeleteReciever(_id)}
                        className="btn btn-danger btn-xs"
                      >
                        <span className="glyphicon glyphicon-remove"></span> Del
                      </button>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{card_number}</td>
                    <td>
                      <input
                        onChange={(e) => setNameEdit(e.target.value)}
                        type="text"
                        defaultValue={reminiscent_name}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() =>
                          handleEditReciever(_id, card_number, nameEdit)
                        }
                        className="btn btn-info btn-xs"
                      >
                        <span className="glyphicon glyphicon-edit">Xong</span>
                      </button>{" "}
                      <button
                        onClick={() => enableEdit(-1)}
                        className="btn btn-danger btn-xs"
                      >
                        <span className="glyphicon glyphicon-remove">Huỷ</span>
                      </button>
                    </td>
                  </tr>
                );
              }
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
