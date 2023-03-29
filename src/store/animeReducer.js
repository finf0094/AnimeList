import axios from "axios"



const initialState = {
    animes: [],
}

const animeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET-ANIMES':
            return {
                ...state,
                 animes: [...action.payload]
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