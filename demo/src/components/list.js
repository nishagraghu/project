import React from 'react';
import axios from "axios";
import './List.css';
import { Table } from 'semantic-ui-react';
import Userrow from './userrow';
import { API } from '../config'
export default function List() {
    const [userlist, setUserlist] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${API}user`).then((response) => {
            setUserlist(response.data.data);
            
        });
      }, []);
      if (!userlist) return null;
    return (
    <Table  className='list' singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    
            {userlist.map((user, index) => (  
               <Userrow  user={user} key={index} />
            ))}  
   
      
   
    </Table.Body>
  </Table> 
        
    )
}
