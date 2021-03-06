import React from "react";
import {Link} from "react-router-dom";
class Header extends React.Component{
    render()
    {
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="Dashboard.html">
                    Personal Employee Management Tool
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/maindashboard">
                                 Dashboard
                            </Link>
                        </li>
                    </ul>
    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="RegistrationPage.html">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="LoginPage.html">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}
export default Header;