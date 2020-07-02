export const commonActionTypes = {
  ON_LOADING: "ON_LOADING",
  OFF_LOADING: "OFF_LOADING",
};

//asign type for each action => identify
//Define structure of data when dispatch
export const onLoading = () => {
  return {
    type: commonActionTypes.ON_LOADING,
  };
};

export const offLoading = () => ({
  type: commonActionTypes.OFF_LOADING,
});
