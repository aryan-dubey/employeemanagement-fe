import axios from 'axios';
import  {GET_ERRORS, GET_EMPLOYEES, GET_EMPLOYEE, DELETE_EMPLOYEE} from "./types";

export const createEmployee= (employee,history)=>async dispatch=>{
    try
    {
        const res=await axios.post("http://localhost:9080/api/employeemanagement/employees",employee);
        history.push("/dashboard");
    }
    catch(error)
    {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        });
    }
};

export const getEmployees = () => async (dispatch) => {
        const res = await axios.get("http://localhost:9080/api/employeemanagement/employees/all");
    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data,
    });
  };

  export const getEmployee = (id, history) => async (dispatch) => {
        const res = await axios.get(`http://localhost:9080/api/employeemanagement/employees/${id}`);
    dispatch({
      type: GET_EMPLOYEE,
      payload: res.data,
    });
  };

  export const deleteEmployee = (id) => async (dispatch) => {
    if
     (
      window.confirm
      (
        "Are you sure! You want to delete this employee record?  you will lose everything?"
      )
    ) 
    
    {
      await axios.delete(`http://localhost:9080/api/employeemanagement/employees/${id}`);
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: id,
      });
    }
  };
