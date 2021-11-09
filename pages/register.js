import React,{useState} from 'react';
import {gql, useMutation} from "@apollo/client"
const CREATE_USER=gql`
mutation Mutation($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    id
    email
    password
  }
}
`;

const register = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const[register]=useMutation(CREATE_USER);
    const handleSubmit=(e)=>{
        e.preventDefault();
        register({variables:{
            email: Email,
           password:Password
        }})
        

    }
    console.log(Email,Password)
    return (
        <div>
        <form onSubmit={handleSubmit}>
 <input type="text"  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
 <input type="password" placeholder="password" onChange={e=>{setPassword(e.target.value)}}/>
 <button type="submit">Register</button> 
            </form>
        </div>
    )
}

export default register;
