import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

class Table2 extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: "Date", dataIndex: "date", key: "date" },
      {
        title: "Time Slots",
        children: [
          { title: "12-1" },
          { title: "1-2" },
          { title: "2-3" },
          { title: "3-4" },
          { title: "4-5" },
          { title: "5-6" },
          { title: "6-7" },
          { title: "7-8" },
          { title: "8-9" },
          { title: "9-10" },
          { title: "10-11" },
          { title: "11-12" },
          { title: "12-1" },
          { title: "1-2" },
          { title: "2-3" },
          { title: "3-4" },
          { title: "4-5" },
          { title: "5-6" },
          { title: "6-7" },
          { title: "7-8" },
          { title: "8-9" },
          { title: "9-10" },
          { title: "10-11" },
          { title: "11-12" }
        ]
      }
    ];
    this.state = {
      data: [
        {
          key: 1,
          date: "11/10/2019"
        },
        {
          key: 2,
          date: "12/10/2019"
        },
        {
          key: 3,
          date: "13/10/2019"
        },
        {
          key: 4,
          date: "14/10/2019"
        },
        {
          key: 5
        },
        {
          key: 6
        },
        {
          key: 7
        }
      ]
    };
  }

  render() {
    return (
      <Table
        pagination={false}
        bordered
        columns={this.columns}
        dataSource={this.state.data}
        scroll={{ x: 2000 }}
      />
    );
  }
}
export default Table2;
