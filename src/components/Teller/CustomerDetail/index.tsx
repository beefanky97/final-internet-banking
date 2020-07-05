import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HeaderBody from "src/components/commons/HeaderBody";
import { actShowDetailCustomerRequest, actShowInfoCardsRequest } from "src/app/actions/tellerActions";
import InfoCustomer from "./InfoCustomer";
import InfoCard from "./InfoCard";

interface Props {
  customer: any;
  cards: [];
  showDetailCustomer: () => void;
  showInfoCards: () => void;
}

const CustomerDetail: React.FC<Props> = (props) => {
  useEffect(() => {
    props.showDetailCustomer();
    props.showInfoCards();
  }, []);

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage="Khách hàng" />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area" style={{height: '1200px'}}>
        <div className="contact---area">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-10">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">HỒ SƠ KHÁCH HÀNG</h4>
                  <div className="row">
                    <InfoCustomer customer={props.customer} />
                    <InfoCard cards={props.cards} />
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
  cards: state.tellerState.cards,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showDetailCustomer: () =>
    dispatch(actShowDetailCustomerRequest("5eeb5d49522755fd2ddb8d3d")),
  showInfoCards: () => dispatch(actShowInfoCardsRequest("5eeb5d49522755fd2ddb8d3d")),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetail);
