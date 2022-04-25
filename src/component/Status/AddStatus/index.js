import React  from "react";
import {connect} from "react-redux";
import { addStatus } from '../../../actions/StatusAction';
import PropTypes from "prop-types";

class AddStatus extends React.Component{
    
    constructor(props){
        super(props);
        this.state=
        {
            comments : "",
            details : "",
            userId : "",
            complianceId : "",
            createDate : "",
        };
    }
    
    onChange=(event)=>{
       this.setState({[event.target.name]:event.target.value});
    }

    onSubmit=(event)=>{
        event.preventDefault();
        //   console.log("submit");
        const newStatus = {
            comments:this.state.comments,
            details:this.state.details,
            userId:this.state.userId,
            complianceId:this.state.complianceId,
            createDate:this.state.createDate,
        };
        // console.log(newEmployee);
        // call the create employee method from employee action
        this.props.addStatus(newStatus);
    };
    
    render(){
        return(
            <div className="project">
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add Status form</h5>
                <hr />

                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg " 
                    placeholder="Comments" 
                    name="comments"
                    value={this.state.comments}
                    onChange={this.onChange}
                 />
                 </div>
                        &nbsp;
                        &nbsp;


                <div className="form-group">
                 <input type="text" className="form-control form-control-lg " placeholder="Details"
                     name="details" 
                     value={this.state.details}
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
                <input type="text" className="form-control form-control-lg" placeholder="Unique Employee complianceId"
                       name="complianceId"
                       value={this.state.complianceId}
                       onChange={this.onChange}
                />
                </div>
                        &nbsp;
                        &nbsp;

                
                        <h6>Create Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="createDate" 
                                value={this.state.createDate}
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

AddStatus.propTypes={
    addStatus : PropTypes.func.isRequired,    
};

export default connect(null,{addStatus})(AddStatus);