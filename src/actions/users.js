import axios from "axios";
import {setIsFetchError, setIsLoading, setTotalCount, setUsers} from "../reducers/usersReducer";

export const getUsers = (login, page) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const response = await axios.get(`https://api.github.com/search/users?q=${login}&per_page=9&page=${page}`)
            dispatch(setIsFetchError(false))
            dispatch(setUsers(response.data))
            dispatch(setTotalCount(response.data.total_count))
            dispatch(setIsLoading(false))
        } catch (e) {
            dispatch(setIsFetchError(true))
        }

    }
}