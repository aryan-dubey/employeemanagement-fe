import React from "react";
import EmployeeItem from "./EmployeeItem";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getEmployees} from '../../actions/EmployeeAction';
import PropTypes from "prop-types";

class EmployeeDashboard extends React.Component{

    componentDidMount()
    {
        this.props.getEmployees();
    }

    render(){
        const {employees}=this.props.employees;
        return(
            
            <div className="projects">
            <div className="container">
            <div className="row">
            <div className="col-md-12">
                    <h1 className="display-4 text-center">Employees</h1>
                    <br />
                    <Link to="/addEmployee" className="text-white bg-success btn btn-lg btn-info">
                            Add Employee
                     </Link>
                    <br />
                    <hr />

                       {
                           employees.map((employee)=>(
                           <EmployeeItem key={employee.id} employee={employee}/>))
                       }
                    </div>
                    </div>
                    </div>
                    </div>
    
        );
    }
}
EmployeeDashboard.propTypes=
{
    getEmployees:PropTypes.func.isRequired,
    employees:PropTypes.object.isRequired,
}

  const mapStateToProps = (state) => ({
    employees: state.employees,
  });

export default connect(mapStateToProps,{getEmployees})(EmployeeDashboard);