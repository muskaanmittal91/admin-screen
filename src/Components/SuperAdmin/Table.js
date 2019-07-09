import React from 'react'
import { Table } from 'antd';



const buttonClick=()=>{
    return alert("connectAPI");  // api
}
const ReqTable =(props)=>{
    
    
 
        const {column1,column2,column3,column4,buttons}=props
        const buttonStyle={
            color:"white",background:'#000000',width:"15em",border:"none",borderRadius:"5px",margin:"1px",cursor:"pointer"
        }
        const columns = [
            {
              title: column1,
              dataIndex: column1,
              key: column1,
            },
            {
              title: column2,
              dataIndex: column2,
              key: column2,
            },
            {
              title: column3,
              dataIndex: column3,
              key: column3,
            },
            {
                title: column4,
                dataIndex: column4,
                key: column4,
              },
            {
              title:"Action",
              key:buttons,
              render: () => (<div>
                <button style={buttonStyle} onClick={buttonClick}>button1</button><br/>
                <button style={buttonStyle} onClick={buttonClick}>button2</button>
                </div>
              ),
            },
          ];
        return <Table columns={columns} dataSource={props.data} />
    
}

export default ReqTable
