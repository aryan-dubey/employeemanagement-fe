import React from 'react';
import './App.css';
import EmployeeDashboard from './component/Employees/EmployeeDashboard';
import Header from './component/common/Header';
import "bootstrap/dist/css/bootstrap.min.css"; 
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddEmployee from './component/Employees/AddEmployee';
import {Provider} from "react-redux";
import store from './store';
import UpdateEmployee from './component/Employees/UpdateEmployee';
import MainDashboard from './component/Employees/MainDashboard';
import DepartmentDashboard from './component/Employees/DepartmentDashboard';
import StatusDashboard from './component/Status/StatusDashboard/statusDashboard'
import AddStatus from "./component/Status/AddStatus"

function App() {
  return (
    <Provider store={store}>
      <Router>
      
      <Route exact path="/" component= {Header}/>
        <Route exact path="/maindashboard" component={MainDashboard}/>
        <Route exact path="/dashboard" component= {EmployeeDashboard}/>
        <Route exact path="/departmentdashboard" component= {DepartmentDashboard}/>
        <Route exact path="/addEmployee" component= {AddEmployee}/>
        <Route exact path="/statusDashboard" component={StatusDashboard}/>
        <Route exact path="/addStatus" component={AddStatus}/>
        <Route exact path="/updateEmployee/:id" component= {UpdateEmployee}/>
      </Router>
      </Provider>
    
  );
}

export default App;
