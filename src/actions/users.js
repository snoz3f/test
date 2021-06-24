import axios from "axios";
import {setUsers} from "../reducers/usersReducer";

export const getUsers = (login) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/search/users?q=${login}`)
        dispatch(setUsers(response.data))
    }
}