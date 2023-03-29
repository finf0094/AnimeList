import axios from "axios"



const initialState = {
    animes: [],
    isFilter: []
}

const animeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET-ANIMES':
            return {
                ...state,
                 animes: [...action.payload]
                }
        case 'FILTERED':
            return {
                ...state,
                isFilter: animes
            }
        default:
            return state
    }
}


// ACTIONS
export const getAnimesAC = (payload) => ({type: "GET-ANIMES", payload})


// THUNK'S
export const getAnimesThunk = () => {
    return dispatch => {
        axios.get('https://kitsu.io/api/edge/anime')
        .then(res => dispatch(getAnimesAC(res.data.data)))
    };
};

export default animeReducer;