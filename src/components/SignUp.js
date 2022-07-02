import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""});
    let navigate = useNavigate();
    
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, password})
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
          //Save the auth token and redirect
          localStorage.setItem('token', json.authtoken);
          navigate("/");
          props.showAlert('Sign Up Successful.', 'success');
      }else{
        props.showAlert('Invalid Credentials', 'danger');
      }
    }
  return (
    <div className='container mt-3'>
        <h2>Create an account to use CloudBook</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={credentials.name}
            className="form-control"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            className="form-control"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  )
}

export default SignUp
