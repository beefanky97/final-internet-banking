import React from "react";

export const LoadingOverlay = () => {
  return (
    <>
      <div className="overlay"> </div>
      <div className="spanner">
        <div className="loader"></div>
        <p>Đang thao tác...</p>
      </div>
    </>
  );
};
