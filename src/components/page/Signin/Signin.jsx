import React, { useState } from "react"
import './Signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginApi } from "../../services/userService"
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {
    const [signInObj, setSignInObj] = useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takeEmail = (event) => {
        setSignInObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takePassword = (event) => {
        setSignInObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let emailTest = emailRegex.test(signInObj.email)
        let pwdTest = passwordRegex.test(signInObj.password)
        if (emailTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter valid Email or Phone"
            }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: " "
            }))
        }


        if (pwdTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter valid Password"
            }))
        }
        else if (pwdTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder:  false,
                passwordHelper: " "
            }))
        }
        console.log(signInObj)

        if (emailTest === true && pwdTest === true) {
            loginApi(signInObj)
                .then((response) => {
                    console.log(response)
                    localStorage.setItem("token",response.data.id)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log("login success")
        }

    }

    return (
        <div className='main-container1'>
            <div className='child-container'>
                <div className='mainchild'>
                    <div className='logo'>
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />

                    </div>
                </div>
                <div className="header">
                    <div className='text'>
                        <h2>Sign in </h2>
                    </div>
                    <div className='text2'>
                        <p>Use your Google Account</p>
                    </div>
                </div>
                <div className='text-field'>
                    <div className='child-text-field'>
                        <TextField id="outlined-basic" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email or Phone" variant="outlined" size="small" fullWidth="true" />
                    </div>
                    <div className='child-text-field2'>
                        <li>Forget email?</li>
                    </div>
                    <div className='child-text-field'>
                        <TextField id="outlined-basic" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size="small" fullWidth="true" />
                    </div>
                    <div className='child-text-field2'>
                        <li>Forget password?</li>
                    </div>

                </div>
                <div className='textbtm'>
                    <div className="child-textbtm1">
                       
                    </div>
                    <div className="child-textbtm2">
                        <li>Learn more</li>
                    </div>
                </div>
                <div className="footer">
                    <Button variant="text" >Create account</Button>
                    <Button variant="contained" onClick={submit}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default Signin;