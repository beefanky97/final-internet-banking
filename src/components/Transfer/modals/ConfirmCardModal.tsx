import React from 'react';
import { connectModal } from 'redux-modal';


const ConfirmCardModal = () => {

    

    return (
        <div>
            Confirm now!!
            <button className="btn btn-primary">Xác nhận</button>
            <button className="btn btn-secondary">Không chuyển nữa</button>
        </div>
    )
}

export default connectModal({ name: 'CONFIRM_CARD_MODAL', destroyOnHide: true })(ConfirmCardModal);