export const recieverActionTypes = {
  GET_RECIVER: "GET_RECIVER",
  GET_RECIVER_SUCCESS: "GET_RECIVER_SUCCESS",
  ADD_RECIVER: "ADD_RECIVER",
  ADD_RECIVER_SUCCESS: "ADD_RECIVER_SUCCESS",
  EDIT_RECIVER: "GET_RECIVEEDIT_RECIVERR",
  EDIT_RECIVER_SUCCESS: "EDIT_RECIVER_SUCCESS",
  DELETE_RECIEVER: "DELETE_RECIEVER",
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
export const addReciever = (card_number: number, reminiscent_name: string) => {
  return {
    type: recieverActionTypes.ADD_RECIVER,
    card_number,
    reminiscent_name
  };
};

export const addRecieverSuccsess = (data: any) => ({
  type: recieverActionTypes.ADD_RECIVER_SUCCESS,
  data,
});

export const editReciever = (id: string, card_number: number, reminiscent_name: string) => {
  return {
    type: recieverActionTypes.EDIT_RECIVER,
    id,
    card_number,
    reminiscent_name
  };
};

export const editRecieverSuccsess = (data: any) => ({
  type: recieverActionTypes.EDIT_RECIVER_SUCCESS,
  data,
});

export const deleteReciever = (id_customer: string) => {
  return {
    type: recieverActionTypes.DELETE_RECIEVER,
    id_customer
  };
};

