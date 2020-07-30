export const accountActionTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  FORGET_PASSWORD: "FORGET_PASSWORD",
  FORGET_PASSWORD_SUCCESS: "FORGET_PASSWORD_SUCCESS",
  RESET_PASSWORD: 'RESET_PASSWORD',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
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

export const loginSuccsess = () => ({
  type: accountActionTypes.LOGIN_SUCCESS
});

export const loginFail = () => ({
  type: accountActionTypes.LOGIN_FAIL,
});

export const logout = () => ({
  type: accountActionTypes.LOGOUT
});

export const changePassword = (current_password: string, new_password: string, confirm_password: string) => ({
  type: accountActionTypes.CHANGE_PASSWORD,
  current_password,
  new_password,
  confirm_password
});

export const logoutSuccsess = () => ({
  type: accountActionTypes.LOGOUT_SUCCESS,
});

export const refreshToken = () => {
  return {
  type: accountActionTypes.REFRESH_TOKEN
}};

export const actForgetPassword = (email: string) => ({
  type: accountActionTypes.FORGET_PASSWORD,
  email
})

export const actForgetPasswordSuccess = (data: boolean) => ({
  type: accountActionTypes.FORGET_PASSWORD_SUCCESS,
  data
})

export const actResetPassword = (token: any, new_password: string, confirm_password: string) => ({
  type: accountActionTypes.RESET_PASSWORD,
  token,
  new_password,
  confirm_password
})

export const actResetPasswordSuccess = (data: boolean) => ({
  type: accountActionTypes.RESET_PASSWORD_SUCCESS,
  data
})