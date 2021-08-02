import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const Button = styled.button`
width: 200px;
height: 50px;
background: linear-gradient(272.88deg, #169bd4 4.95%, #4a48eb 93.62%);
box-shadow: 0px 4px 20px rgba(104, 109, 224, 0.5);
border-radius: 50px;
border: none;
color: #fff;
padding: 12px 30px;
font-weight: 800;
cursor: pointer;
`
const dropdown =[
  {value : 'Premium User', name : 'Premium User'},
  {value : 'New User', name : 'New User'},
]
const AddUpdateUser = (props) => {
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
        props.addUpdateUser(user)
      }}
      >
        <div>
                <TextField  style={{ width: '90%' }} id="outlined-basic"  label="User id" variant="outlined" name="userId" required value={user.userId} onChange={handleInputChange} />
            </div>
            <div  style={{marginTop: 20}}>
                <TextField  style={{ width: '90%' }} id="outlined-basic" label="User Name" variant="outlined" name="userName" required value={user.userName} onChange={handleInputChange} />
            </div>
            <div  style={{marginTop: 20}}>
                <TextField  style={{ width: '90%' }} id="outlined-basic" label="Email" variant="outlined" name="email" required value={user.email} onChange={handleInputChange} />
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
                    />       
              </div>
              <div  style={{marginTop: 20}}>
              <FormControl variant="outlined"  style={{width: '90%'}}>
        <InputLabel htmlFor="outlined-age-native-simple">User Type</InputLabel>
            <Select
            required
            style={{width: '100%'}}
            label="User Type"
            name="userType"
            value={user.userType}
            onChange={handleInputChange}
          >
              {
                  dropdown.map((e,key) => {
                      return <MenuItem key={key} value={e.value}>{e.name}</MenuItem>;
                  })
              }
          </Select>
          </FormControl>
      <div style={{marginTop: 20, width: '90%'}}>
      <Button style={{marginLeft: '4%'}}>UPDATE</Button>
      </div>
      </div>
    </form>
  )
}

export default AddUpdateUser;
