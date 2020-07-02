import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login, logout } from "src/app/actions/accountActions";

interface Props {
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const RecieversManager: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("customer1");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (props.isAuthenticated) {
      window.location.href = "/";
    }
  }, [props.isAuthenticated]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.login(username, password);
  };

  let recievers = [
    {
      id: "1",
      card_number: "111",
      name: "Nguyễn Văn A",
    },
    {
      id: "2",
      card_number: "222",
      name: "Nguyễn Thị B",
    },
    {
      id: "3",
      card_number: "333",
      name: "Lê Tuấn C",
    },
    {
      id: "4",
      card_number: "444",
      name: "Trịnh D",
    },
  ];

  const editReciever = () => {

  }

  const deleteReciever = () => {
    
  }
  
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
            {recievers.map((reciever, index) => {
              const { card_number, name } = reciever;
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{card_number}</td>
                  <td>{name}</td>
                  <td className="text-center">
                    <button onClick={editReciever} className="btn btn-info btn-xs">
                      <span className="glyphicon glyphicon-edit"></span> Edit
                    </button>{" "}
                    <button onClick={deleteReciever} className="btn btn-danger btn-xs">
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
  isAuthenticated: state.accountState.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
  logout: () => dispatch(logout()),
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(RecieversManager);
