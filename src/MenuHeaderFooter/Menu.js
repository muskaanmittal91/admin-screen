import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import Dashboard from "../Components/Dashboard/dashboard";
import Client from "../Components/Client/client";
import User from "../Components/User/user";
import Meseros from "../manageclient";
import Footer from "./Footer";
import SuperAdmin from "../Components/SuperAdmin/SuperAdminScreen";
import Booking from "../Components/Booking/App";
const { Header, Content, Sider } = Layout;
//const SubMenu = Menu.SubMenu;

class RouterApp extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu theme="dark" defaultSelectedKeys={["6"]} mode="vertical">
              <Menu.Item key="6">
                <Icon type="home" />
                <span>Dashboard</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="1">
                <Icon type="team" />
                <span>Manage Client</span>
                <Link to="/client" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
                <span>Manage User</span>
                <Link to="/user" />
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="hdd" />
                <span>Manage Voucher</span>
                <Link to="/meseros" />
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="interaction" />
                <span>Manage Requests and Payments</span>
                <Link to="/meseros" />
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="schedule" />
                <span>Manage Bookings</span>
                <Link to="/booking" />
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="solution" />
                <span>Super Admin</span>
                <Link to="/superadmin" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
              {/* <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{ cursor: "pointer" }}
                onClick={this.toggle}
             />*/}
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
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route exact path="/" component={Dashboard} />
              <Route path="/client" component={Client} />
              <Route path="/user" component={User} />
              <Route path="/meseros" component={Meseros} />
              <Route path="/superadmin" component={SuperAdmin} />
              <Route path="/booking" component={Booking} />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    );
  }
}
//ReactDOM.render(<RouterApp />, document.getElementById("root"));
export default RouterApp;
