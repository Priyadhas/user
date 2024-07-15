
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
    const navigate=useNavigate()
    return (
        <div className='background'>
             
                <h1 id="centre">User Registration Page</h1>
            
                <tr>
                    <th id="space" onClick={()=>navigate('/')} >Home</th>
                    <th id="space" onClick={()=>navigate("/register-props")} >Registration Form</th>
                    <th id="space" onClick={()=>navigate("/user-table")} >DataDisplay</th>
                </tr>
                <hr></hr>
                
            
            <h1 id="space1">Welcome to <br></br>the User Registration <br></br>Page!</h1>
            
            
        </div>
    );
};

export default Home;
