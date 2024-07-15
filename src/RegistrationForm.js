
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css';

const RegistrationForm = ({ addUser, editUser, users }) => {
    const { index } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: '',
    });

    useEffect(() => {
        if (index && users) {
            const userToEdit = users[index];
            if (userToEdit) {
                setFormData(userToEdit);
            }
        }
    }, [index, users]);

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? "" : "Name is required.";
        tempErrors.address = formData.address ? "" : "Address is required.";
        tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? "" : "Email is not valid.";
        tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters long.";
        tempErrors.phoneNumber = formData.phoneNumber.length >= 10 ? "" : "Phone number is not valid.";
        tempErrors.gender = formData.gender ? "" : "Gender is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (index) {
                editUser(parseInt(index), formData);
            } else {
                addUser({ ...formData, id: Date.now().toString() });
            }
            navigate('/user-table');
        }
    };

    return (
        <div className='background2'>
            <header className='sticky-header'>
            <h1 id="centre">User Registration Page</h1>
            
            <tr>
                <th id="space" onClick={()=>navigate('/')} >Home</th>
                <th id="space" onClick={()=>navigate("/register-props")} >Registration Form</th>
                <th id="space" onClick={()=>navigate("/user-table")} >DataDisplay</th>
            </tr>
            <hr></hr>
            </header>
        <form id="down"onSubmit={handleSubmit}>
            <div>
                <input id="size" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <div>{errors.name}</div>
            </div>
            <div>
                <input id="size" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                <div>{errors.address}</div>
            </div>
            <div>
                <input id="size" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <div>{errors.email}</div>
            </div>
            <div>
                <input id="size" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <div>{errors.password}</div>
            </div>
            <div>
                <input id="size" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                <div>{errors.phoneNumber}</div>
            </div>
            <div id="size">
                <label>
                    <input  type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
                </label>
                <label>
                    <input  type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
                </label> &nbsp;&nbsp;&nbsp;
               {errors.gender} 
            </div>
            <button id="size1" type="submit">{index ? "Update" : "Register"}</button>
        </form>
        </div>
    );
};

export default RegistrationForm;
