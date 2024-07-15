
// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//     const [users, setUsers] = useState([]);

//     const addUser = (user) => {
//         setUsers([...users, user]);
//     };

//     const editUser = (index, updatedUser) => {
//         const updatedUsers = users.map((user, i) => (i === index ? updatedUser : user));
//         setUsers(updatedUsers);
//     };

//     const deleteUser = (index) => {
//         const updatedUsers = users.filter((_, i) => i !== index);
//         setUsers(updatedUsers);
//     };

//     return (
//         <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserProvider;
