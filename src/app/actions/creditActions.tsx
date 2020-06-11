export const creditActionTypes = {
  TRANSFER: 'TRANSFER',
  TRANSFER_SUCCESS: 'TRANSFER_SUCCESS',
};

//asign type for each action => identify
//Define structure of data when dispatch
export const transfer = () => {
  console.log("action over transfer");
  return {
    type: creditActionTypes.TRANSFER
  };
};

export const transferSuccsess = (tokkenInfo: any) => ({
  type: creditActionTypes.TRANSFER_SUCCESS,
  tokkenInfo,
});