import React from "react";
import {connect} from "react-redux";
import {getEmployee,createEmployee} from '../../actions/EmployeeAction';
import PropTypes from "prop-types";

class UpdateEmployee extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            id:"",
            firstName:"",
            lastName:"",
            userId:"",
            email:"",
            dob:"",
        };
    }

    componentDidMount() 
    {
        const { id } = this.props.match.params;
        this.props.getEmployee(id, this.props.history);
      }


    componentWillReceiveProps(nextProps) 
      {
          const
          {
            id,
            firstName,
            lastName,
            userId,
            email,
            dob,
        }= nextProps.employee;
            this.setState({
            id,
            firstName,
            lastName,
            userId,
            email,
            dob,
            });
      }


    onChange=(event)=>{
        // console.log("onchange");
        this.setState({[event.target.name]:event.target.value});
     };

     onSubmit=(event)=>{
        event.preventDefault();
     //   console.log("submit");
     const newEmployee={
         id:this.state.id,
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
     
    render()
    {
        return(
            <div className="project">
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Employee form</h5>
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
                        disabled
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
    
                <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
        );
    }
}
UpdateEmployee.propTypes = {
    getEmployee: PropTypes.func.isRequired,
    createEmployee: PropTypes.func.isRequired,
  };


  const mapStateToProps = (state) => ({
    employee: state.employees.employee,
  });

export default connect(mapStateToProps, {getEmployee,createEmployee})(UpdateEmployee);