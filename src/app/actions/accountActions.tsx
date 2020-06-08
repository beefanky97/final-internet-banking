export const accountActionTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
};

//asign type for each action => identify
//Define structure of data when dispatch
export const login = (username: string, password: string) => {
  console.log("action over", username);
  return {
    type: accountActionTypes.LOGIN,
    username,
    password,
  };
};

export const loginSuccsess = (tokkenInfo: any) => ({
  type: accountActionTypes.LOGIN_SUCCESS,
  tokkenInfo,
});

export const logout = () => ({
  type: accountActionTypes.LOGOUT
});

export const logoutSuccsess = () => ({
  type: accountActionTypes.LOGOUT_SUCCESS,
});
