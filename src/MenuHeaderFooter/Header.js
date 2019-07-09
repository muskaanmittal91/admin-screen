import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import Dashboard from "../Components/Dashboard/dashboard";
import Meseros from "../manageclient";

const { Content } = Layout;

class Header extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <div style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
            <div style={{ float: "left" }}> LOGO </div>
            <Menu
              defaultSelectedKeys={[""]}
              mode="horizontal"
              style={{ float: "right" }}
            >
              <Menu.Item key="1">
                <Icon type="notification" />
                <span>Notifications</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="profile" />
                <span>Profile</span>
                <Link to="/meseros" />
              </Menu.Item>
            </Menu>
          </div>
        { /* <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Route exact path="/" component={Dashboard} />
            <Route path="/meseros" component={Meseros} />
          </Content>*/}
        </Layout>
      </Router>
    );
  }
}

export default Header;
