const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
    items: [],
}

export default function usersReducer(state = defaultState, action){
    switch (action.type){
        case SET_USERS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
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

export const setCurrentPage = () => {

}