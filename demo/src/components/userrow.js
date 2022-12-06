import React from 'react';
import { Table } from 'semantic-ui-react'
export default function Userrow({user,index}) {
    return ( 
            <Table.Row key={index} >
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.roles.role_name}</Table.Cell>
            </Table.Row>
             );
}