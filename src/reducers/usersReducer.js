const SET_USERS = "SET_USERS"

const defaultState = {
    items: [],
}

export default function usersReducer(state = defaultState, action){
    switch (action.type){
        case SET_USERS:
            return {
                ...state,
                items: action.payload.items,
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