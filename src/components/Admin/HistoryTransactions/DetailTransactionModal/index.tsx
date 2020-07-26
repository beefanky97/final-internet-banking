import React, { FunctionComponent, useEffect } from "react";
import { connectModal } from "redux-modal";
import moment from "moment";

interface Props {
  info_transaction: any;
  closeModal: () => void;
}

const DetailTransactionModal: React.FunctionComponent<Props> = (props) => {
  console.log("detail transaction: ", props.info_transaction);

  return (
    <div className="modal-center ">
      <div className="modal-dialog modal-dialog-centered justify-content-center" >
        <div className="modal-content" style={{width: '1140px'}}>
          <div className="modal-header">
            <h5 className="modal-title">Chi Tiết Giao Dịch</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" >
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 fdr">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>#ID</span>
                  </div>
                  <div className="input-info" >
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction._id} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 fdr mt-15">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>Tên Ngân Hàng</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction.bank_name} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 fdr mt-15">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>Tên Người Gửi</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction.full_name_sender} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled 
                    />
                  </div>
                </div>
                <div className="col-lg-6 fdr mt-15">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>STK Người Gửi</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction.card_number_sender} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 fdr mt-15">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>Tên Người Nhận</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction.full_name_receiver} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-6 fdr mt-15">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>STK Người Nhận</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction.card_number_receiver} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 fdr mt-15">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>Số Tiền</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction.money} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 fdr mt-15">
                  <div className="keyword">
                    <span style={{color: '#003679'}}>Lời Nhắn</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={props.info_transaction.message} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 fdr mt-15">
                  <div className="keyword" >
                    <span style={{color: '#003679'}}>Ngày Giao Dịch</span>
                  </div>
                  <div className="input-info">
                    <input
                      type="text"
                      className="col-12"
                      value={moment(props.info_transaction.date_created).format(
                        "DD-MM-YYYY h:mm:ss"
                      )} style={{backgroundColor: '#003679', color: 'white', fontWeight: 'bold'}}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn credit-btn mr-15"
              data-dismiss="modal"
              onClick={props.closeModal}
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(DetailTransactionModal as FunctionComponent);

export default connectModal({
  name: "DETAIL_TRANSACTION_MODAL",
  destroyOnHide: true,
})(DetailTransactionModal as FunctionComponent);
