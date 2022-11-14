import axios from "axios";

export const loginApi= (loginObj) => {
let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
return response
}
export const signup = (signupObject) => {
    let result = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/adminSignUp", signupObject)
    return result
    console.log("Signup in process")    
}