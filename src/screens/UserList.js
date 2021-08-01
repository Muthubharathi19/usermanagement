import React from 'react'

const UserList = (props) => (
  <table style={{width: '100%',msOverflowY: 'scroll', height: 100}}>
    <thead>
      <tr style={{backgroundColor: '#0077a8', color: '#fff'}}>
        <th>S.No</th>
        <th>User Id</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th></th>
      </tr>
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
              <button  onClick={() => {props.editRow(user)}}>Edit</button>
              <button onClick={() => props.deleteUser(user.sNo)}>Delete</button>
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