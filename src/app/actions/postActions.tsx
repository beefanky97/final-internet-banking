export const postActionType = {
    GET_ALL_POST: "GET_ALL_POST",
    GET_ALL_POST_SUCCESS: "GET_ALL_POST_SUCCESS"
}

//asign type for each action => identify
//Define structure of data when dispatch
export const getAllPost = () => ({
    type: postActionType.GET_ALL_POST
})

export const getAllPostSuccess = (posts: any) => ({
    type: postActionType.GET_ALL_POST_SUCCESS,
    posts
})