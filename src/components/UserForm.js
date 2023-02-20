import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmation, setConfirmation] = useState("");  

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { username, email, password, confirmation};
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onSubmit={ (e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onSubmit={ (e) => setEmail(e.target.value) } value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onSubmit={ (e) => setPassword(e.target.value) } value={password}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onSubmit={ (e) => setConfirmation(e.target.value) } value={confirmation}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
