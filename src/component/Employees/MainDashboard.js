import React from "react";
import {Link} from "react-router-dom";
class MainDashboard extends React.Component{
    render(){
        return(
            <div class="projects">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="display-4 text-center">Main Dashboard</h1>
                        <br />
                        <Link to="/dashboard" class="text-white bg-success btn btn-lg btn-info">
                           Employee Dashboard
                        </Link>
                        &nbsp;
                        &nbsp;
                        <Link to="/departmentdashboard" class="text-white bg-success btn btn-lg btn-info">
                            Department Dashboard
                         </Link>
                         &nbsp;
                        &nbsp;
                         <a href="ComplianceDashboard.html" class="text-white bg-success btn btn-lg btn-info">
                            Compliance Dashboard
                         </a>
                         &nbsp;
                        &nbsp;
                         <a class="text-white bg-success btn btn-lg btn-info" onClick={
                             (e) => {
                                 e.preventDefault();
                                 window.location.href = "/statusDashboard";
                             }
                         }>
                            Status Dashboard
                         </a>
                        <br/>
                        <hr/>
                        </div>    
                        </div>
                        </div>
                        </div>


        );

    }
}
export default MainDashboard;