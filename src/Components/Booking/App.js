import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import {Card} from 'antd';
import {WrappedAdvancedSearchForm} from './Search';
import 'antd/dist/antd.css';

class App extends React.Component{
    render(){
        return(
            <div style={{width:'1400px',marginLeft:'20px'}}>
                <Table1 />
                <Card style={{marginTop:'20px'}}>
                    <WrappedAdvancedSearchForm />
                    <Table2 />
                </Card>
                
            </div>
        )
    }
}
export default App;