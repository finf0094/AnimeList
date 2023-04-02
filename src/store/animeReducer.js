import axios from "axios"



const initialState = {
    animes: [],
    descendingFilter: [],
    fetching: false,
    anime: {},
    genres: [],
    animeOrManga: '',
    getFilter: ''
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
        case "GET-ANIME":
            return {
                ...state,
                anime: {...action.payload}
            }
        case "GET-GENRES":
            return {
                ...state,
                genres: [...action.payload]
            }
        case "ANIME-OR-MANGA":
            return {
                ...state,
                animeOrManga: action.payload
            }
        case "GET-FILTER":
            return {
                ...state,
                getFilter: action.payload
            }
        case "CLEAR-FILTER":
            return {
                ...state,
                descendingFilter: []
            }
        default:
            return state
    }
}


// ACTIONS
export const getAnimesAC = (payload) => ({type: "GET-ANIMES", payload})
export const toggleFetchingAc = (payload) => ({type: 'TOGGLE-FETCHING', payload})
export const searchAnimeAC = (payload) => ({type: 'SEARCH-ANIME', payload})
export const getAnimeAC = (payload) => ({type: "GET-ANIME", payload})
export const getGenresAC = (payload) => ({type: "GET-GENRES", payload})
export const animeOrMangaAC = (payload) => ({type: 'ANIME-OR-MANGA', payload})
export const getFilterAC = (payload) => ({type: 'GET-FILTER', payload})
export const clearFilterAC = () => ({type: "CLEAR-FILTER"})

//filter
export const descendingFilterAC = (payload) => ({type: 'DESCENDING-FILTER', payload})



// THUNK'S
// GET FULL ANIME DATA CARDS
export const getAnimesThunk = (page, animeOrManga) => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/${animeOrManga}?page[limit]=20&page[offset]=${page}`)
        .then(res => dispatch(getAnimesAC(res.data.data)))
        .finally(() => dispatch(toggleFetchingAc(false)))
    };
};


// SEARCH FILTER ANIME THUNKS
export const searchAnimeThunk = (searchTerm, animeOrManga = 'anime') => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/${animeOrManga}?filter[text]=${searchTerm}`)
        .then(res => dispatch(searchAnimeAC(res.data.data)))
    }
}

// FILTERS
export const descendingFilterThunk = (page, filterParam, animeOrManga) => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/${animeOrManga}?page[limit]=20&page[offset]=${page}&sort=${filterParam}`)
        .then(res => dispatch(descendingFilterAC(res.data.data)))
        .finally(() => dispatch(toggleFetchingAc(false)))
    }
}

// GET ONE ANIME
export const getAnimeThunk = (id, animeOrManga) => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/${animeOrManga}/${id}`)
        .then(res => dispatch(getAnimeAC(res.data.data)))
    }
}
//GET GENRES 
export const getGenresThunk = (id, animeOrManga) => {
    return dispatch => {
        axios.get(`https://kitsu.io/api/edge/${animeOrManga}/${id}/genres`)
        .then(res => dispatch(getGenresAC(res.data.data)))
    }
}

export default animeReducer;