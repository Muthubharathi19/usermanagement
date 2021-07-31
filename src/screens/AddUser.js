import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';

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
const AddUser = (props) => {
    const initialFormState = { userId: '', userName: '', email: '', createdAt: '', updatedAt: '' }
    const [user, setUser] = useState(initialFormState);
    // const [selectedDate, setSelectedDate] = useState();

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            style={{ flexDirection: 'column' }}
            onSubmit={event => {
                event.preventDefault()
                if (!user.userName || !user.userName) return

                props.addUser(user)
                setUser(initialFormState)
            }}
         >     
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                <div>
                    <TextField id="outlined-basic" label="User id" variant="outlined" name="userId" required value={user.userId} onChange={handleInputChange} />
                </div>
                <div style={{ paddingTop: 20, }}>
                    <TextField id="outlined-basic" label="User Name" variant="outlined" name="userName" required value={user.userName} onChange={handleInputChange} />
                </div>
                <div style={{ paddingTop: 20 }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" name="email" required value={user.email} onChange={handleInputChange} />
                </div>
                <div style={{ paddingTop: 20 }}>

                    {/* <KeyboardDatePicker
            style={{width: '80%'}}
            name="createdAt"
          margin="normal"
          id="date-picker-dialog"
          label="Created At"
          format="MM/dd/yyyy"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
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
                    />
                </div>
                <div style={{ paddingTop: 20 }}>
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

                <div style={{ paddingTop: 20 }}>
                    <Button>ADD</Button>
                </div>
             {/* </MuiPickersUtilsProvider> */}
        </form>
    )
}

export default AddUser;
