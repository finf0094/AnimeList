import axios from "axios"



const initialState = {
    animes: [],
    descendingFilter: [],
    fetching: false
}

const animeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET-ANIMES':
            return {
                ...state,
                 animes: [...state.animes, ...action.payload],
                }
        case 'TOGGLE-FETCHING':
            return {
                ...state,
                animes: [...state.animes],
                descendingFilterAC: [...state.descendingFilter],
                fetching: action.payload
            }
        case 'SEARCH-ANIME':
            return {
                ...state,
                animes: [...action.payload],
            }
        case "DESCENDING-FILTER":
            return {
                ...state,
                descendingFilter: [...state.descendingFilter, ...action.payload]
            }
        default:
            return state
    }
}


// ACTIONS
export const getAnimesAC = (payload) => ({type: "GET-ANIMES", payload})
export const toggleFetchingAc = (payload) => ({type: 'TOGGLE-FETCHING', payload})
export const searchAnimeAC = (payload) => ({type: 'SEARCH-ANIME', payload})

//filter
export const descendingFilterAC = (payload) => ({type: 'DESCENDING-FILTER', payload})


// THUNK'S
// GET FULL ANIME DATA CARDS
export const getAnimesThunk = (page) => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}`)
        .then(res => dispatch(getAnimesAC(res.data.data)))
        .finally(() => dispatch(toggleFetchingAc(false)))
    };
};


// SEARCH FILTER ANIME THUNKS
export const searchAnimeThunk = (searchTerm) => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`)
        .then(res => dispatch(searchAnimeAC(res.data.data)))
    }
}

// FILTERS
// DESCENDING
export const descendingFilterThunk = (page, filterParam) => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}&sort=${filterParam}`)
        .then(res => dispatch(descendingFilterAC(res.data.data)))
        .finally(() => dispatch(toggleFetchingAc(false)))
    }
}


export default animeReducer;