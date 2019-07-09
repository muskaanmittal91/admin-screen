import React from "react";
import "./ClientDetail.css";
import { Form, Row, Col, Input, Button } from "antd";

class AdvancedSearchForm extends React.Component {
  state = {
    clientId: "",
    email: "",
    name: "",
    phone: "",
    company: "",
    username: "",
    venue: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.clientId);
  };
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Row style={{ marginLeft: "10px" }}>
        <Col span={3} className="colpad">
          <Form.Item label="Client ID">
            {getFieldDecorator("clientID", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(
              <Input
                placeholder="Enter client ID"
                onChange={e => {
                  this.setState({ clientId: e.target.value });
                }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Email" />)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label=" Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Name" />)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="Phone no">
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Phone no" />)}
          </Form.Item>
        </Col>

        <Col span={3} className="colpad">
          <Form.Item label="Company name">
            {getFieldDecorator("company", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Company name" />)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="User name">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter User name" />)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="Venue">
            {getFieldDecorator("venue", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Venue" />)}
          </Form.Item>
        </Col>
        <Col span={2} style={{ marginTop: "40px" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Col>
      </Row>
    );

    return children;
  }

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.onSubmit}>
        <Row gutter={17}>{this.getFields()}</Row>
      </Form>
    );
  }
}

export const WrappedAdvancedSearchForm = Form.create({
  name: "advanced_search"
})(AdvancedSearchForm);
