import React  from "react";
import {connect} from "react-redux";
import {createEmployee} from '../../actions/EmployeeAction';
import PropTypes from "prop-types";

class AddEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {
            firstName:"",
            lastName:"",
            userId:"",
            email:"",
            dob:"",
        };
    }
    onChange=(event)=>{
       // console.log("onchange");
       this.setState({[event.target.name]:event.target.value});
    }

    onSubmit=(event)=>{
        event.preventDefault();
     //   console.log("submit");
     const newEmployee={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        userId:this.state.userId,
        email:this.state.email,
        dob:this.state.dob,
     };
    // console.log(newEmployee);
    //call the create employee method from employee action
    this.props.createEmployee(newEmployee,this.props.history);

    };



    render(){
        return(
            <div className="project">
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add Employee form</h5>
                <hr />

                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg " 
                    placeholder="First Name" 
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                 />
                 </div>
                        &nbsp;
                        &nbsp;


                <div className="form-group">
                 <input type="text" className="form-control form-control-lg " placeholder="Last Name"
                     name="lastName" 
                     value={this.state.lastName}
                     onChange={this.onChange}
                 />
                </div>
                        &nbsp;
                        &nbsp;


                <div className="form-group">
                <input type="text" className="form-control form-control-lg " placeholder="Unique Employee UserId"
                      name="userId" 
                      value={this.state.userId}
                      onChange={this.onChange}
                />
                </div>
                        &nbsp;
                        &nbsp;



                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Email id"
                       name="email"
                       value={this.state.email}
                       onChange={this.onChange}
                />
                </div>
                        &nbsp;
                        &nbsp;

                
                        <h6>Date of Birth</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="dob" 
                                value={this.state.dob}
                                onChange={this.onChange}

                            />
                            </div>

                        <input type="submit" className="text-white bg-success btn btn-primary btn-block mt-4" />
                        </form>
                        </div>
                        </div>
                        </div>
                        </div>

        );
    }
}

AddEmployee.propTypes={
    createEmployee:PropTypes.func.isRequired,    
    
};
export default connect(null,{createEmployee})(AddEmployee);