import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
width: 50px;
height: 30px;
background: linear-gradient(272.88deg, #fff 4.95%, #fff 93.62%);
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
font-size: 12px;
border-radius: 50px;
border: none;
color: #0077a8;
cursor: pointer;
// padding: 12px 30px;
margin-left: 10px;
font-weight: 600;
`
const Tr = styled.tr`
height: 30px;
background: linear-gradient(272.88deg, #169bd4 4.95%, #4a48eb 93.62%);
box-shadow: 0px 4px 20px rgba(50, 50, 50, 0.1);
border-radius: 50px;
border: none;
color: #fff;
// padding: 12px 30px;
margin-left: 10px;
font-weight: 600;
`
const UserList = (props) => (
  <table style={{width: '100%',msOverflowY: 'scroll', height: 100}}>
    <thead>
      <Tr style={{backgroundColor: '#0077a8', color: '#fff'}}>
        <th>S.No</th>
        <th>User Id</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th></th>
      </Tr>
    </thead>
    <tbody style={{ height:100}}>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.sNo} style={{height:50}}>
            <td>{user.sNo}</td>
            <td>{user.userId}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.updatedAt}</td>
            <td>
              <Button  onClick={() => {props.editRow(user)}}>Edit</Button>
              <Button onClick={() => props.deleteUser(user.sNo)}>Delete</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserList;