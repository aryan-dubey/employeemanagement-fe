import React from "react";
import {Link} from "react-router-dom";
import DepartmentItem from "./DepartmentItem";
class DepartmentDashboard extends React.Component{
    render(){
        return(
            <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center">Department</h1>
                    <br />
                    <Link to="/adddepartment" class="bg-success btn btn-lg btn-info">
                        Add Department
                    </Link>
                    <br />
                    <hr />
                    <DepartmentItem/>
                </div>
            </div>
        </div>
    </div>

        );
    }
}
export default DepartmentDashboard;