import axios from "axios";
import {setIsFetchError, setUsers} from "../reducers/usersReducer";

export const getUsers = (login) => {
    return async (dispatch) => {
        try{
            const response = await axios.get(`https://api.github.com/search/users?q=${login}`)
            dispatch(setIsFetchError(false))
            dispatch(setUsers(response.data))
        }catch (e){
            dispatch(setIsFetchError(true))
        }

    }
}