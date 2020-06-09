import jwtDecode from 'jwt-decode';

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

interface ITokenInfo {
  token_expire: string
}

export const saveTokenExpire = (token: string) => {
  if (token && typeof sessionStorage !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedJwt: any = jwtDecode(token);
    if (decodedJwt && decodedJwt.exp && typeof decodedJwt.exp !== 'undefined' && +decodedJwt.exp) {
      sessionStorage.setItem('token_expire', `${decodedJwt.exp}`);
    }
  }
}

export const clearTokenInfo = () => {
  if(sessionStorage) {
    sessionStorage.removeItem("token_expire");
  }
}