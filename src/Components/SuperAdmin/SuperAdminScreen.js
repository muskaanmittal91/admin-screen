import './SuperAdminScreen.css'
import React from 'react'
import ReqTable from './Table'


class SuperAdminScreen extends React.Component{
    AddEmployee(e){
        e.preventDefault();
        alert("added");
        console.log("Clicked"); //api will be added to send req to sever to add admin
    }
    render(){
        const  EmployeeData = [ //this will be replaced by api for Employee data
            {
              EmployeeID: '1',
              Name: 'John Brown',
              PhoneNo: 32,
              Email: "Employee@getMaxListeners.com",
            }
          ];
        const ReqData = [   //this will be replaced by api
            {
              AdminIDNameContact: '1',
              ReqID: 'John Brown',
              ReqTitle: 32,
              ReqDetails: "Employee@getMaxListeners.com",
            }
          ];
        return (
            <div className="container">
                <h1>
                    SuperAdmin.NAME
                </h1>
                <p>Add Admin</p>
                <form className="searchbox" onSubmit={this.AddEmployee}> 
                    <div>Employee ID : <input type="text"/> </div>
                    <div>Password :  <input type="password"/></div>
                    <div><button className="buttonBlack">ADD</button></div>
                </form>
                <p style={{margin:"10px 0 0"}}>List of Admins</p>
                <ReqTable 
                column1="EmployeeID" column2="Name" column3="PhoneNo" column4="Email" column5="Details"
                data={EmployeeData}
                />
                <p style={{margin:"10px 0 0"}}>Notification Table</p>
                <button className="buttonBlack">Payments</button>
                <button className="buttonBlack">Requests</button>
                <ReqTable 
                column1="AdminIDNameContact" column2="ReqID" column3="ReqTitle" column4="ReqDetails" column5="Action" data={ReqData}
                />
            </div>
        )
    }
}

export default SuperAdminScreen