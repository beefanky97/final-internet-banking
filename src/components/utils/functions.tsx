import jwtDecode from 'jwt-decode';
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';

export const isValidToken = () => {
  return sessionStorage.getItem("is_authentication") === "true";
};

interface IToken {
  access_token: string
  refresh_token: string
  permission: number
}

export const saveTokenExpire = (token: IToken) => {
  if (token && typeof sessionStorage !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const decodedJwt: any = jwtDecode(token.refresh_token,);
    // if (decodedJwt && decodedJwt.exp && typeof decodedJwt.exp !== 'undefined' && +decodedJwt.exp) {
    //   sessionStorage.setItem('token_expire', `${decodedJwt.exp}`);
    // }
    sessionStorage.setItem('access_token', token.access_token);
    sessionStorage.setItem('refresh_token', token.refresh_token);
    sessionStorage.setItem('is_authentication', "true");
    sessionStorage.setItem('permission', token.permission.toString());
  }
}

export const clearTokenInfo = () => {
  if(sessionStorage) {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem('is_authentication');
    sessionStorage.removeItem('permission');
  }
}