import React from "react";
import { Form, Row, Col, Input, Button } from "antd";

class AdvancedSearchForm extends React.Component {
  state = {
    userId: "",
    email: "",
    name: "",
    phone: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.userId);
  };

  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Row style={{ marginLeft: "20px" }}>
        <Col span={3}>
          <Form.Item label="user ID">
            {getFieldDecorator("userID", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(
              <Input
                placeholder="Enter user ID"
                onChange={e => {
                  this.setState({ userId: e.target.value });
                }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={3}>
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
        <Col span={1} />
        <Col span={3}>
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
        <Col span={1} />
        <Col span={3}>
          <Form.Item label="Contact no">
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
      </Row>
    );

    return children;
  }

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.onSubmit}>
        <Row gutter={17}>{this.getFields()}</Row>
        <Row>
          <Col span={17}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export const WrappedAdvancedSearchForm = Form.create({
  name: "advanced_search"
})(AdvancedSearchForm);
