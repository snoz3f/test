const SET_USERS = "SET_USERS"
const SET_FETCH_ERROR = "SET_FETCH_ERROR"

const defaultState = {
    items: [],
    isFetchError: false
}

export default function usersReducer(state = defaultState, action){
    switch (action.type){
        case SET_USERS:
            return {
                ...state,
                items: action.payload.items,
            }
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload
            }
        default:
            return state
    }
}

export const setUsers = (users) => (
    {
        type: SET_USERS,
        payload:users
    }
)

export const setIsFetchError = (bool) => ({type: SET_FETCH_ERROR, payload:bool})