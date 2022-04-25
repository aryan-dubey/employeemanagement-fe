import { GET_EMPLOYEES, GET_EMPLOYEE, DELETE_EMPLOYEE, GET_STATUSES } from "../actions/types";
const initialState={
    employees:[],
    employee:{},
    statuses:[],

};
export default function(state=initialState,action){
    switch (action.type) {
        case GET_EMPLOYEES:
          return {
            ...state,
            employees: action.payload,
        };
        case GET_EMPLOYEE:
          return{
            ...state,
            employee: action.payload,
          };
          case DELETE_EMPLOYEE:
            return{
              ...state,
              employees: action.payload,

            }
            case GET_STATUSES:
              return{
                ...state,
                statuses:action.payload,
              };
        default:
            return state;
          }
        }
