import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { signup } from "../../services/userService";
import FormControlLabel from '@mui/material/FormControlLabel';
import './Signup.css';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signup() {
    const [signupObj, setSignupObj] = React.useState({ firstName: "", lastName: "", email: "", password: "", service: "advance" })
    const [rejexObj, setRejexObj] = React.useState({
        fnameBorder: false, fnameHelper: "", lnameBorder: false, lnameHelper: "",
        usernameBorder: false, usernameHelper: "", passwordBorder: false, passwordHelper: ""
    })
    const takeUserFirstName = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserLastName = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserName = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let fnameTest = fnameRegex.test(signupObj.firstName)
        let lnameTest = lnameRegex.test(signupObj.lastName)
        let usernameTest = emailRegex.test(signupObj.email)
        let passwordTest = passwordRegex.test(signupObj.password)
        if (fnameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                fnameBorder: true,
                fnameHelper: "Enter valid name"
            }))
        }
        else if (fnameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                fnameBorder: false,
                fnameHelper: ""
            }))
        }
        if (lnameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                lnameBorder: true,
                lnameHelper: "Enter valid name"
            }))
        }
        else if (lnameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                lnameBorder: false,
                lnameHelper: ""
            }))
        }
        if (usernameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                usernameBorder: true,
                usernameHelper: "Enter valid email"
            }))
        }
        else if (usernameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                usernameBorder: false,
                usernameHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        console.log(signupObj)
        if (fnameTest === true && lnameTest === true && usernameTest === true && passwordTest === true) {
            signup(signupObj).then((response) => {
                console.log(response);
                // localStorage.setItem("token",response)
            }).catch((error) => { console.log(error) })
            console.log("Signup successful");
        }
    }


    return (
        <div className='container'>
            <div className="input">
                <div className="input-child">
                    <div className='input-child1'>
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" width={100} />

                    </div>
                    <p>Create your Google account</p>
                    <div className="input-child3">
                        <TextField
                            label="First name"
                            id="outlined-size-small"
                            size="small"
                            onChange={takeUserFirstName}
                            error={rejexObj.fnameBorder} helperText={rejexObj.fnameHelper}
                        />
                        <TextField
                            label="Last name"
                            id="outlined-size-small"
                            size="small"
                            onChange={takeUserLastName}
                            error={rejexObj.lnameBorder} helperText={rejexObj.lnameHelper}
                        />
                    </div>
                    <div className="input-child4">
                        <TextField id="outlined-basic" label="Username" variant="outlined" size="small" fullWidth="true"
                            onChange={takeUserName}
                            error={rejexObj.usernameBorder} helperText={rejexObj.usernameHelper} />
                    </div>
                    <div className="input-child5">
                        <span>Use my current email address instead</span>
                    </div>
                    <div className="missing">
                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={takePassword}
                            error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} />
                        <TextField id="outlined-basic" label="Confirm" variant="outlined" size="small" onChange={takePassword}
                            error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} />
                    </div>
                    <div className="input-child6">
                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                    </div>
                    <div className="checkbox">
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
                    </div>
                    <div className="input-child7">
                        <Button variant="text" >Sign in instead</Button>
                        <Button id="nextbtnSU" variant="contained" size="medium"  onClick={submit}>Next</Button>
                    </div>

                </div>
                <div className="img-g">
                    <div className='logo'>
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width={500} />

                    </div>
                    <div className="txr-centr">
                    <span>One account. All of Google<br></br> working for you.</span>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Signup