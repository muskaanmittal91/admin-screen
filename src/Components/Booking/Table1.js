import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Button, Icon, Row , Col} from 'antd';

class Table1 extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {   title: 'Date', 
                dataIndex: 'date', 
                key: 'date' 
            },
            {
                title: 'Total Collection',
                dataIndex: 'tcollection',
                key: 'tcollection',
            },
            {
                title: 'Ticket Sold',
                dataIndex: 'ticketsold',
                key: 'ticketsold',
            },
            {
                title: 'Slot Filled',
                dataIndex: 'slotfilled',
                key: 'slotfilled',
            },
            {
                title: 'New User Registered',
                dataIndex: 'newuser',
                key: 'newuser',
            },
            {
                title: 'Slot Affected',
                dataIndex: 'slotaffected',
                key: 'slotaffected',
            },
            {
                title: 'Switched User',
                dataIndex: 'switcheduser',
                key: 'switcheduser',
            }
        ];
        this.state = {
            data: [
                {
                    key: 1,
                    
                },
                {
                    key: 2,
                },
                {
                    key: 3,
                    
                },
                {
                    key: 4,
                    
                },
                {
                    key: 5,
    
                },
                {
                    key: 6,
                   
                },
                {
                    key: 7,
                   
                }
                
            ],
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16}>
                        <Table
                            pagination={false}
                            bordered
                            columns={this.columns}
                            dataSource={this.state.data}
                        />
                    </Col>
                    <Col span={6}>
                        <Button.Group>
                            <Button type="primary">
                                <Icon type="left" />
                                Prev. week
                </Button>
                            <Button type="primary">
                                Next week
                    <Icon type="right" />
                            </Button>
                        </Button.Group>
                    </Col>
                </Row>                
            </div>
            
        );
    }
}
export default Table1;