import axios from 'axios';
import { GET_ERRORS, GET_STATUSES, ADD_STATUS } from './types';

export const addStatus = (status) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:9080/api/employeemanagement/compliance/status', status);
        window.location.href = "/statusDashboard";
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : null,
        });
    }
}

export const getStatus = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:9080/api/employeemanagement/compliance/ListAll');
        dispatch({
            type: GET_STATUSES,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : null,
        });
    }
}

