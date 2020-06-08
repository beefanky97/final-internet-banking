export const isValidToken = () => {
  const token_expire = sessionStorage.getItem("token_expire") || "";
  if (token_expire && +token_expire) {
    const currentTime = new Date().getTime();
    const expireTime = +token_expire * 1000 - 30000; // before real expire time on server 30s
    return expireTime < currentTime;
  }
  //set to using
  return true;
};
