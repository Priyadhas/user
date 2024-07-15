
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './RegistrationForm';
import UserTable from './DataDisplay';

const App = () => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const editUser = (index, updatedUser) => {
        const updatedUsers = users.map((u, i) => (i === index ? updatedUser : u));
        setUsers(updatedUsers);
    };
    const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    return (
       
            <div>
               
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register-props" element={<RegistrationForm addUser={addUser} />} />
                    <Route path="/register-props/:index" element={<RegistrationForm addUser={addUser} editUser={editUser} users={users} />} />
                    <Route path="/user-table" element={<UserTable users={users} deleteUser={deleteUser}/>} />
                </Routes>
                
            </div>
       
    );
};

export default App;
