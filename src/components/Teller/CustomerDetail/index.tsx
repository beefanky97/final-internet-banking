import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { actShowDetailCustomerRequest } from "src/app/actions/tellerActions";
import InfoCustomer from "./InfoCustomer";

interface Props {
  customer: any;
  showDetailCustomer: () => void;
}

const CustomerDetail: React.FC<Props> = (props) => {
  useEffect(() => {
    props.showDetailCustomer();
  }, []);
  console.log("cus", props.customer);
  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Khách hàng" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area">
        <div className="contact---area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">Hồ sơ khách hàng</h4>
                  <div className="fdr">
                    <InfoCustomer customer={props.customer} />
                    <div className="col-6">
                      <h4 className="mb-50">Thông tin thẻ</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  customer: state.tellerState.customer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showDetailCustomer: () =>
    dispatch(actShowDetailCustomerRequest("5eeb5d49522755fd2ddb8d3d")),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetail);
