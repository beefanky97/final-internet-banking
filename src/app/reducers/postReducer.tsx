import { postActionType } from 'src/app/actions/postActions'
import { AnyAction } from 'redux';

const initialPostState = {
    posts: []
}

export const postReducer = (state = initialPostState, action: AnyAction) => {
    switch (action.type) {
        case postActionType.GET_ALL_POST_SUCCESS: {
            return {
                ...state,
                posts: action.posts
            }
        }

        default:
          return state;
    }
}
