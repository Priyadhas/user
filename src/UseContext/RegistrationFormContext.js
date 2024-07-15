
// import React, { useContext, useState } from 'react';
// import { UserContext } from './UserContext';

// const RegistrationFormContext = () => {
//     const { addUser } = useContext(UserContext);
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         email: '',
//         password: '',
//         phoneNumber: '',
//         gender: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addUser(formData);
//         setFormData({
//             name: '',
//             address: '',
//             email: '',
//             password: '',
//             phoneNumber: '',
//             gender: '',
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//             <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
//             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//             <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
//             <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//             <div>
//                 <label>
//                     <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
//                     Male
//                 </label>
//                 <label>
//                     <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
//                     Female
//                 </label>
//             </div>
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default RegistrationFormContext;
