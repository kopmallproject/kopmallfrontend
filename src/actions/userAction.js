import axios from "axios";
import { USER_LOGIN_REQUEST,  USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
    USER_LOGOUT, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL
} from "../constants/UserConstants";


export const signup = (fname, lname, email, phoneNumber, password) => async(dispatch) => {

    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        })

        const config={
            headers: {
                'Content-type': 'application/json'
            }

        }

        const {data} = await axios.post('https://kopmall-nxwdv.ondigitalocean.app/api/users/register',
            {
                first_name: fname,
                last_name: lname,
                email: email,
                mobile: phoneNumber,
                password: password

            }, config
        )
        dispatch({
            type:USER_SIGNUP_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }

    catch(error) {
        dispatch({
            type:USER_SIGNUP_FAIL,
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail : error.message
        })
    }



}


export const login = (email, password) => async(dispatch) => {

    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        })

        const config={
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post('https://kopmall-nxwdv.ondigitalocean.app/api/users/login',
            {
                username: email,
                password: password

            }, config
        )
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }

    catch(error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail : error.message
        })
    }



}


