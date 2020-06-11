import jwtDecode from 'jwt-decode';
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';

export const isValidToken = () => {
  const token_expire = sessionStorage.getItem("token_expire") || "";
  if (token_expire && +token_expire) {
    const currentTime = new Date().getTime();
    const expireTime = +token_expire * 1000 - 30000; // before real expire time on server 30s
    return expireTime >= currentTime;
  }
  //set to using
  return false;
};

interface IToken {
  access_token: string
  refresh_token: string
}

export const saveTokenExpire = (token: IToken) => {
  if (token && typeof sessionStorage !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedJwt: any = jwtDecode(token.refresh_token);
    if (decodedJwt && decodedJwt.exp && typeof decodedJwt.exp !== 'undefined' && +decodedJwt.exp) {
      sessionStorage.setItem('token_expire', `${decodedJwt.exp}`);
    }
    sessionStorage.setItem('access_token', token.access_token);
    sessionStorage.setItem('refresh_token', token.refresh_token);
  }
}

export const clearTokenInfo = () => {
  if(sessionStorage) {
    sessionStorage.removeItem("token_expire");
  }
}