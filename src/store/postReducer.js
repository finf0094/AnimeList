import axios from "axios"


const initialState = {
    posts: [],
    fetching: true
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET-POSTS":
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        case "TOGGLE-FETCHING":
            return {
                ...state,
                posts: [...state.posts],
                fetching: action.payload
            }
        default:
            return state
    }
}


// ACTIONS
const getPostsAC = (payload) => ({ type: 'GET-POSTS', payload })
const toggleFetchingAC = (payload) => ({ type: "TOGGLE-FETCHING", payload })

// THUNKS
export const getPostsThunk = () => {
    return dispatch => {
        axios.get('https://kitsu.io/api/edge/posts')
        .then(res => dispatch(getPostsAC(res.data.data)))
        .finally(() => dispatch(toggleFetchingAC(false)))
    }
}





export default postReducer;