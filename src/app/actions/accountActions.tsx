export const accountActionTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

//asign type for each action => identify
//Define structure of data when dispatch
export const login = (username: string, password: string) => {
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

export const loginFail = () => ({
  type: accountActionTypes.LOGIN_FAIL,
});

export const logout = () => ({
  type: accountActionTypes.LOGOUT
});

export const logoutSuccsess = () => ({
  type: accountActionTypes.LOGOUT_SUCCESS,
});

export const refreshToken = () => {
  return {
  type: accountActionTypes.REFRESH_TOKEN
}};