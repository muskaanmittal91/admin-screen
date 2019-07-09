import { Table, Popconfirm, Button } from "antd";
import React from "react";

import axios from "axios";

//make a state for called response for accept and decline and pass that as parameter in axios.post
class Payment extends React.Component {
  handleDelete = name => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.name !== name) });
  };

  componentDidMount() {
    //use try catch
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      this.setState({ data: res.data });

      console.log(this.state.data.req);
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      columns: [
        {
          title: "Notification",
          dataIndex: "name"
        },

        {
          title: "operation",
          dataIndex: "operation",
          render: (text, record) =>
            this.state.data.length >= 1 ? (
              <span>
                <Popconfirm
                  title="Sure to accept?"
                  onConfirm={() => this.handleDelete(record.name)}
                >
                  <Button>Accept</Button>
                </Popconfirm>
                <Popconfirm
                  title="Sure to decline?"
                  onConfirm={() => this.handleDelete(record.name)}
                >
                  <Button>Decline</Button>
                </Popconfirm>
                <Popconfirm
                  title="Sure to send?"
                  onConfirm={() => this.handleDelete(record.name)}
                >
                  <Button>Request to SuperAdmin </Button>
                </Popconfirm>
              </span>
            ) : null
        }
      ],

      data: [
        {
          username: ""
        }
      ]
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Table columns={this.state.columns} dataSource={data} bordered />
      </div>
    );
  }
}

export default Payment;
