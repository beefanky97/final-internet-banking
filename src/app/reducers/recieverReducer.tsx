import { recieverActionTypes } from 'src/app/actions/recieverActions'
import { AnyAction } from 'redux';

const initialRecieverState = {
    recievers: []
}

export const recieverReducer = (state = initialRecieverState, action: AnyAction) => {
    switch (action.type) {
        case recieverActionTypes.GET_RECIVER_SUCCESS: {
            return {
                ...state,
                recievers: action.data
            }
        }
        
        case recieverActionTypes.EDIT_RECIVER_SUCCESS: {
            return {
                ...state,
                recievers: action.data
            }
        }

        default:
          return state;
    }
}
