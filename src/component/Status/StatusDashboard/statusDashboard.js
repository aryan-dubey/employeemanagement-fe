import React from 'react'
import Header from '../../common/Header';
import { getStatus } from "../../../actions/StatusAction"
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import StatusItem from "../StatusItem"
import "./status-dashboard.css"

class StatusDashboard extends React.Component {
    
    componentDidMount(){
        this.props.getStatus();
    }
  
    render(){

        const {statuses} = this.props.statuses;


        return(
    <>
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Status Dashboard</h1>
                        <br />
                        <a className="text-white bg-success btn btn-lg btn-info" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/addStatus";
                        }}>
                            Add Status
                        </a>
                        <br />
                        <hr />

                        {
                            statuses && statuses.map((status)=>(
                                <>
                                    <StatusItem key={status.statusId} status={status}/>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
        );
  }
}

StatusDashboard.propTypes = {
    getStatus: PropTypes.func.isRequired,
    statuses: PropTypes.object.isRequired,
}

    const mapStateToProps = (state) => ({
        statuses: state.statuses ? state.statuses : {},
    });

export default connect(mapStateToProps,{getStatus})(StatusDashboard);