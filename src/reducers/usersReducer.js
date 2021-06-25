const SET_USERS = "SET_USERS"
const SET_FETCH_ERROR = "SET_FETCH_ERROR"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_IS_LOADING = "SET_IS_LOADING"

const defaultState = {
    items: [],
    isFetchError: false,
    total_count: 0,
    isLoading: false
}

export default function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                items: action.payload,
            }
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                total_count: action.payload
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export const setUsers = (users) => (
    {
        type: SET_USERS,
        payload: users.items
    }
)

export const setIsFetchError = (bool) => (
    {
        type: SET_FETCH_ERROR,
        payload: bool
    }
)

export const setTotalCount = (count) => (
    {
        type: SET_TOTAL_COUNT,
        payload: count
    }
)

export const setIsLoading = (bool) => (
    {
        type: SET_IS_LOADING,
        payload: bool
    }
)