import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
const Button = styled.button`
width: 200px;
height: 50px;
background: linear-gradient(272.88deg, #169bd4 4.95%, #4a48eb 93.62%);
box-shadow: 0px 4px 20px rgba(104, 109, 224, 0.5);
border-radius: 50px;
border: none;
color: #fff;
padding: 12px 30px;
font-weight: 600;
`
const UpdateUser = (props) => {
    const [user, setUser] = useState(props.currentUser)

const handleInputChange = (event) => {
    const { name, value } = event.target
  
    setUser({ ...user, [name]: value })
  }
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
  return (
    <form 
    style={{flexDirection:'column'}} 
    onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.sNo, user)
      }}
      >
        <div>
                <TextField id="outlined-basic"  label="User id" variant="outlined" name="userId" required value={user.userId} onChange={handleInputChange} />
            </div>
            <div  style={{marginTop: 20, width: '100%'}}>
                <TextField id="outlined-basic" label="User Name" variant="outlined" name="userName" required value={user.userName} onChange={handleInputChange} />
            </div>
            <div  style={{marginTop: 20}}>
                <TextField id="outlined-basic" label="Email" variant="outlined" name="email" required value={user.email} onChange={handleInputChange} />
            </div>
            <div  style={{marginTop: 20}}>
            <TextField
                        style={{ width: '90%' }}
                        id="datetime-local"
                        label="Created At"
                        type="datetime-local"
                        variant="outlined"
                        name="createdAt"
                        value={user.createdAt}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />            </div>
            <div  style={{marginTop: 20}}>
            <TextField
                        style={{ width: '90%' }}
                        id="datetime-local"
                        label="Created At"
                        type="datetime-local"
                        variant="outlined"
                        name="updatedAt"
                        value={user.updatedAt}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />            </div>
      <div style={{marginTop: 20, width: '90%'}}>
      <Button style={{marginLeft: '4%'}}>UPDATE</Button>
      </div>
    </form>
  )
}

export default UpdateUser;
