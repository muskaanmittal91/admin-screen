import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

class AdvancedSearchForm extends React.Component {
    state = {
        venue: '',
        screen: ''
    };

    getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [];
        children.push(
            <Row style={{marginLeft:'500px'}}>
                <Col span={3} style={{marginRight:'20px'}}>
                    <Form.Item label="Venue : " >
                        {getFieldDecorator('venue', {
                            rules: [
                                {
                                    required: false,
                                    message: "Input something!"
                                },
                            ]
                        })(<Input placeholder="Enter Venue" />)}
                    </Form.Item>
                </Col>
                <Col span={3} style={{ marginRight: '20px' }}>
                    <Form.Item label="Screen">
                        {getFieldDecorator('screen', {
                            rules: [
                                {
                                    required: false,
                                    message: "Input something!"
                                },
                            ]
                        })(<Input placeholder="Enter Screen" />)}
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Button type="primary" htmlType="submit" style={{ marginTop: '43px' }}>
                        Search
                    </Button>
                </Col>
                
            </Row>
        );

        return children;
    }


    render() {
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row>{this.getFields()}</Row>
            </Form>
        );
    }
}


export const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


