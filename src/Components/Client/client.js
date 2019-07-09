import React from "react";
import { WrappedAdvancedSearchForm } from "./AdvancedSearchForm";
import EditableFormTable from "./EditableTable";
import axios from "axios";
import { Spin } from "antd";
class Client extends React.Component {
  state = {
    selectedclient: [],
    visible: true
  };
  componentDidMount() {
    this.onTermSubmit(1);
  }
  onTermSubmit = async term => {
    try {
      this.setState({ visible: true });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${term}`
      );
      this.setState({ selectedclient: [response.data], visible: false });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        <WrappedAdvancedSearchForm onSubmit={this.onTermSubmit} />
        <br />
        <Spin spinning={this.state.visible} size="large" tip="Loading..." />
        <div>
          <EditableFormTable clientid={this.state.selectedclient} />
        </div>
      </div>
    );
  }
}
export default Client;
