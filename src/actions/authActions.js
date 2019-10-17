import axiosWithAuth from "../utilities/axiosWithAuth";
import { types } from "./index";

export const loginUser = (data) => {
    return dispatch => {
        dispatch({ type: types.LOGIN_START });
        return axiosWithAuth()
            .post("/auth/login", data)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: types.LOGIN_FAILURE, payload: err.response })
            });
    };
};

export const registerUser = data => dispatch => {
    dispatch({ type: types.REGISTER_USER_START });
    return axiosWithAuth().post("/auth/register", data)
        .then(res => {
            dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({type: types.REGISTER_USER_FAILURE, payload: err});
        })
}