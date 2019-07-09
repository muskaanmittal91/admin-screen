import React from "react";
import "./UserDetail.css";
import { Card, Table } from "antd";

const columns = [
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date"
  },
  {
    title: "Event",
    dataIndex: "Event",
    key: "Event"
  },
  {
    title: "Payment Done",
    dataIndex: "PaymentDone",
    key: "Payment Done"
  }
];
const data = [
  {
    key: "1",
    Date: "9/01/2019",
    Event: "Kabir Singh",
    PaymentDone: "2000"
  }
];

class UserDetail extends React.Component {
  state = {
    regdate: "8/01/2019",
    adhaar: "23456789",
    balance: 5000,
    booking: 25
  };

  render() {
    return (
      <div>
        <div>
          <h3>
            Registered on : {this.state.regdate} &nbsp;&nbsp; Adhaar number :{" "}
            {this.state.adhaar} &nbsp; &nbsp;
          </h3>
        </div>
        &nbsp;
        <div>
          <Card title="Personal Details" style={{ width: 600 }}>
            <p>Balance : {this.state.balance}</p>
            <p>Number of bookings done : {this.state.booking}</p>
          </Card>
        </div>
        &nbsp;
        <div />
        &nbsp;
        <div>
          <Card title="Booking Details" style={{ width: 900 }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Card>
        </div>
        <div />
      </div>
    );
  }
}
export default UserDetail;
