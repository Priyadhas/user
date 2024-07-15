
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const UserTable = ({ users,deleteUser }) => {
    const navigate = useNavigate();

    const handleEdit = (index) => {
        navigate(`/register-props/${index}`);
    };
    const handleDelete = (index) => {
        deleteUser(index);
    };
    

    if (!users || users.length === 0) {
        return <div className='background3'>No users available</div>;
    }

    return (
        <div className='background3'>
            <header>
            <h1 id="centre">User Registration Page</h1>
            
            <tr>
                <th id="space" onClick={()=>navigate('/')} >Home</th>
                <th id="space" onClick={()=>navigate("/register-props")} >Registration Form</th>
                <th id="space" onClick={()=>navigate("/user-table")} >DataDisplay</th>
            </tr>
            <hr></hr>
            </header>
            <table id="border">
            <thead id="border">
                <tr id="border">
                    <th id="border">Name</th>
                    <th id="border">Address</th>
                    <th id="border">Email</th>
                    <th id="border">Phone Number</th>
                    <th id="border">Gender</th>
                    <th id="border">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr id="border" key={user.id}>
                        <td id="border">{user.name}</td>
                        <td id="border">{user.address}</td>
                        <td id="border">{user.email}</td>
                        <td id="border">{user.phoneNumber}</td>
                        <td id="border">{user.gender}</td>
                        <td id="border">
                            <button id="green" onClick={() => handleEdit(index)}>Edit</button>
                            <button id="red" onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default UserTable;
