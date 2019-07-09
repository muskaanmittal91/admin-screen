import React from "react";
import { Tabs } from "antd";
import Request from "./Request";
import Payment from "./Payment";
const { TabPane } = Tabs;

class App extends React.Component {
  state = { size: "small" };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" size={size}>
          <TabPane tab="Payment" key="1">
            <Payment />
          </TabPane>
          <TabPane tab="Request" key="2">
            <Request />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default App;
