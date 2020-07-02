export const recieverActionTypes = {
  GET_RECIVER: "GET_RECIVER",
  GET_RECIVER_SUCCESS: "GET_RECIVER_SUCCESS",
  DELETE_RECIEVER: "DELETE_RECIEVER",
  DELETE_RECIEVER_SUCCESS: "DELETE_RECIEVER_SUCCESS",
};

//asign type for each action => identify
//Define structure of data when dispatch
export const getReciever = () => {
  return {
    type: recieverActionTypes.GET_RECIVER,
  };
};

export const getRecieverSuccsess = (data: any) => ({
  type: recieverActionTypes.GET_RECIVER_SUCCESS,
  data,
});

export const deleteReciever = (id_customer: string) => {
  return {
    type: recieverActionTypes.DELETE_RECIEVER,
    id_customer
  };
};

