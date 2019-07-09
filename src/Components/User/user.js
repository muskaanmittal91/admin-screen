import React from "react";
import { WrappedAdvancedSearchForm } from "./AdvancedSearchForm";
import EditableFormTable from "./EditableTable";
import axios from "axios";
import { Spin } from "antd";

class User extends React.Component {
  state = {
    selecteduser: [],
    visible: true
  };
  componentDidMount() {
    this.onTermSubmit(); //default value set to 1
  }
  onTermSubmit = async term => {
    try {
      this.setState({ visible: true });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${term}`
      );
      //  console.log(response.data);
      this.setState({ selecteduser: [response.data], visible: false });
      //this.setState({ selecteduser: response.data });
    } catch (e) {
      console.log("error: ", e);
    }
  };
  render() {
    return (
      <div>
        <WrappedAdvancedSearchForm onSubmit={this.onTermSubmit} />
        <br />
        <Spin spinning={this.state.visible} size="large" tip="Loading..." />
        <div>
          <EditableFormTable userid={this.state.selecteduser} />
        </div>
      </div>
    );
  }
}
export default User;
