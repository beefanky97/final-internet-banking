import React, { useEffect, useState } from 'react';
import { Dispatch } from "redux";

import HeaderBody from 'src/components/commons/HeaderBody';
import { connect } from 'react-redux';
import { actShowAllCustomersRequest } from 'src/app/actions/tellerActions';

interface Props {
    showAllCustomers: () => void;
    customers: []
}

const ShowAllCustomers: React.FC<Props> = (props) => {
    useEffect(() => {
        props.showAllCustomers();
    }, [])

    const listCustomers = (customers: []) => customers.map((c: any, i) => <p key={i}>{c.username}</p>)

    return(
        <div>
            {/* <!-- ##### Breadcrumb Area Start ##### --> */}
            <HeaderBody namePage='Customers' />
            {/* <!-- ##### Breadcrumb Area End ##### --> */}

            <div className="map-area">
                <div className="contact---area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                {/* <!-- Contact Area --> */}
                                <div className="contact-form-area contact-page">
                                    <h4 className="mb-50">Customers</h4>
                                    {listCustomers(props.customers)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    customers: state.tellerState
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showAllCustomers: () => dispatch(actShowAllCustomersRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllCustomers);