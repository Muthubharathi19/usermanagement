import React, { useState } from 'react'
import AddUser from './screens/AddUser'
import UpdateUser from './screens/UpdateUser'
import UserList from './screens/UserList'
import styled from 'styled-components';

const Header = styled.div`
height: 50px;
background: linear-gradient(272.88deg, #169bd4 4.95%, #4a48eb 93.62%);
box-shadow: 0px 4px 20px rgba(104, 109, 224, 0.09);
border: none;
color: #fff;
font-weight: 600;
`
const App = () => {
  const usersData = [
    { sNo: 1, userId: 'AS2344352', userName: 'John Doe', email: 'johndoe@example.com', createdAt: '2021-08-29T03:43', updatedAt: '2021-08-29T03:43' },
    { sNo: 2, userId: 'AS2344353', userName: 'Albert Wayne', email: 'albert.w@example.com	', createdAt: '2021-08-29T03:43', updatedAt: '2021-08-29T03:43' },
    { sNo: 3, userId: 'AS2344354', userName: 'Angela ', email: 'a.smith@example.com	', createdAt: '2021-08-29T03:43', updatedAt: '2021-08-29T03:43' },
  ]
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.sNo = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.sNo !== id))
  }
  const [editing, setEditing] = useState(false);
  const initialFormState = { userId: null, userName: '', email: '', createdAt: '', updatedAt: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({
      sNo: user.sNo,
      userId: user.userId,
      userName: user.userName,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    })
  }
  const updateUser = (sNo, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.sNo === sNo ? updatedUser : user)))
  }
  return (
    <div className="container" >
      <Header style={{ color: '#fff'}}>
        <h2 style={{ paddingTop:5, marginLeft: 20 , marginTop:0}}>User Management</h2>
      </Header>
      <div className="flex-row" style={{ display: 'flex', flexDirection: 'row' }}>
        {editing ? (
          <div style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ color: '#a1a1a1' }}>Edit user</h2>
            <UpdateUser
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div className="flex-large" style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ color: '#a1a1a1' }}>Add user</h2>
            <AddUser addUser={addUser} />
          </div>
        )}
        <div className="flex-large" style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#a1a1a1' }}>View users</h2>
          <UserList users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>

  )
}

export default App