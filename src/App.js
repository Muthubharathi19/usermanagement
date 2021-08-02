import React, { useState } from 'react';
import UserList from './screens/UserList';
import styled from 'styled-components';
import AddUpdateUser from './screens/AddUpdateUser';

const Header = styled.div`
width: 100%;
height: 50px;
background: linear-gradient(272.88deg, #169bd4 4.95%, #4a48eb 93.62%);
box-shadow: 0px 4px 20px rgba(104, 109, 224, 0.09);
border: none;
color: #fff;
font-weight: 600;
display: flex;
flex-direction: row;
align-items: center;
`
const App = () => {
  const usersData = [
    { sNo: 1, userId: 'AS2344352', userName: 'John Doe', email: 'johndoe@example.com', createdAt: '2021-08-29T03:43', updatedAt: '2021-08-29T03:43' },
    { sNo: 2, userId: 'AS2344353', userName: 'Albert Wayne', email: 'albert.w@example.com	', createdAt: '2021-08-29T03:43', updatedAt: '2021-08-29T03:43' },
    { sNo: 3, userId: 'AS2344354', userName: 'Angela ', email: 'a.smith@example.com	', createdAt: '2021-08-29T03:43', updatedAt: '2021-08-29T03:43' },
  ]
  const [users, setUsers] = useState(usersData)

  const addUpdateUser = (user) => {
    if (editing){
      setEditing(false)
      setUsers(users.map((eachuser) => (eachuser.sNo === user.sNo ? user : eachuser)))
    }
    else{
      user.sNo = users.length + 1
      setUsers([...users, user])
    }
    setCurrentUser(initialFormState);
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.sNo !== id))
  }
  const [editing, setEditing] = useState(false);
  const initialFormState = { userId: '', userName: '', email: '', createdAt: '', updatedAt: '' }
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
  return (
    <div className="container" >
      <Header style={{ color: '#fff'}}>
        <div>
        <h2 style={{ marginLeft: 20 , }}>User Management</h2>
        </div>
      </Header>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div  style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ color: '#a1a1a1' }}>Add user</h2>
            <AddUpdateUser 
            setEditing={setEditing}
            currentUser={currentUser}
            addUpdateUser={addUpdateUser}
             />
          </div>
        <div  style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#a1a1a1' }}>View users</h2>
          <UserList users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>

  )
}

export default App