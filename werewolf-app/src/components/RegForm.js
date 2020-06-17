import React, { useState } from 'react'
import Input from './Input';
import axios from 'axios';

const RegForm = props => {
    const [submitted, setSubmitted] = useState(false);
    const [uname, setUname] = useState("");
    const [unameError, setUnameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const validate = () => {
        let valid = true;
        if(uname.length < 1){
            setUnameError("Username is required.");
            valid = false;
        } else if(uname.length < 4) {
            setUnameError("Username must be minimum 4 characters.");
            valid = false;
        } else if(uname.length > 16) {
            setUnameError("Username cannot be longer than 16 characters.")
            valid = false;
        } else {
            setUnameError("");
        }
        if(password.length < 1){
            setPasswordError("Password is required.");
            valid = false;
        } else if(password.length < 8) {
            setPasswordError("Password must be minimum 8 characters long.")
            valid = false;
        } else if(password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            valid = false;
        } else {
            setPasswordError("");
        }

        return valid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
        let user = {
            "uname": uname,
            "password": password,
            "confirmPassword": confirmPassword
        }

        if(validate()){

            
            axios.post("http://localhost:8000/users/register",user)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })

            setUname("");
            setUnameError("")
            setPassword("");
            setPasswordError("");
            setConfirmPassword("");
            setConfirmPasswordError("");
        }
            
    }

    return (
        <div className={props.class}>
            <form onSubmit={ handleSubmit }>
                <Input
                    value={ uname }
                    setValue={ setUname }
                    error={ unameError }
                    setError={ setUnameError }
                    type="text"
                    name="uname"
                    labelText="Username: "
                    placeholder="enter a username"
                    submitted={ submitted }
                    />
                <Input
                    value={ password }
                    setValue={ setPassword }
                    error={ passwordError }
                    setError={ setPasswordError }
                    type="password"
                    name="password"
                    labelText="Password: "
                    placeholder="enter a password"
                    submitted={ submitted }
                    />
                <Input
                    value={ confirmPassword }
                    setValue={ setConfirmPassword }
                    error={ confirmPasswordError }
                    setError={ setConfirmPasswordError }
                    type="password"
                    name="confirmPassword"
                    labelText="Confirm: "
                    placeholder="confirm your password"
                    submitted={ submitted }
                    />
                <div className="inputRow">
                    <button className="form-right">Sign Up!</button>
                </div>
            </form>
        </div>
    )
}

export default RegForm
