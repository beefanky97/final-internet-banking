import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from 'query-string';

import HeaderBody from "src/components/commons/HeaderBody";
import { actShowDetailCustomerRequest, actShowInfoCardsRequest } from "src/app/actions/tellerActions";
import InfoCustomer from "./InfoCustomer";
import InfoCard from "./InfoCard";
import { appAxios } from "src/api/appAxios";
import axios from 'axios';

interface Props {
  customer: any;
  cards: [];
  user: any;
  showDetailCustomer: (id: string) => void;
  // showInfoCards: () => void;
}

const CustomerDetail: React.FC<Props> = (props) => {
  const [profile, setProfile] = useState({
    customerInfo: {
      username: "",
      _id: "",
      full_name: "",
      email: "",
      address: "",
      phone_number: "",
      day_of_birth: ""
    },
    cardInfo: [{
      card_number: 0,
      id_type_card: 0,
      balance: 0
    }]
  });
  const [isTeller, setIsTeller] = useState(false);

  const path = window.location.pathname;
  const parsed: any = qs.parseUrl(window.location.href);
  
  useEffect(() => {
    console.log("path", path);
    if(path === "/my-profile") {
      axios.all([
        appAxios.get("/customers/detail"),
        appAxios.get("/cards/customer")
      ]).then(axios.spread((customerRes: any, cardRes: any) => {
        setProfile({...profile, customerInfo: customerRes.data, cardInfo: cardRes.data});
      })).catch((err) => console.log('error: ', err.response));
      console.log('id: ', props.user.id);
      // props.showDetailCustomer(props.user.id);
    } else {
      setIsTeller(true);
      props.showDetailCustomer(parsed.query.id);
    }
  }, []);

  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <HeaderBody namePage={path === "/my-profile" ? "Thông tin cá nhân" : "Khách hàng"} />
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      <div className="map-area" style={{height: '1200px'}}>
        <div className="contact---area">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-10">
                {/* <!-- Contact Area --> */}
                <div className="contact-form-area contact-page">
                  <h4 className="mb-50">{path === "/my-profile" ? "THÔNG TIN CÁ NHÂN" : "THÔNG TIN KHÁCH HÀNG"}</h4>
                  <div className="row">
                    {/* <InfoCustomer customer={props.customer} />
                    <InfoCard isTeller={isTeller} cards={props.cards} /> */}
                    <InfoCustomer customer={isTeller ? props.customer : profile.customerInfo} />
                    <InfoCard isTeller={isTeller} cards={isTeller ? props.cards : profile.cardInfo} />
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
  user: state.accountState.userInfo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showDetailCustomer: (id: string) => dispatch(actShowDetailCustomerRequest(id)),
  // showInfoCards: () => dispatch(actShowInfoCardsRequest("5eeb5d49522755fd2ddb8d3d")),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetail);
