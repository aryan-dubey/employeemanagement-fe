import React from "react";

class StatusItem extends React.Component{

    render(){
        const { status } = this.props;

         return(
            <div className="container">
            <div className="card card-body bg-light mb-3">
                <div className="row">

                <div className="col-2">
                    <span className="mx-auto">Status ID : {status.statusId && status.statusId}</span>
                </div>

                <div className="col-2">
                    <span className="mx-auto">User ID : {status.userId}</span>
                </div>

                <div className="col-lg-6 col-md-4 col-8">
                    <h3>Compliance ID : {status.complianceId}</h3>

                    <h3>Detail : {status.details}</h3>

                    <h3>Comment : {status.comments}</h3>
            
                    <p>Date : {status.createDate}</p>
                </div>
                </div>
            </div>
            </div>
        );
    }
}


export default StatusItem;