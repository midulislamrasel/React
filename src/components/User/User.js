import React from 'react';

const User = ({user}) => {
    const { name, username } = user;
    // console.log(`User ${name}`)
    return (
        <div style={{color:'red', border:'2px solid yellow' , margin:'10px'}}>
            <h3>Name: {name}</h3>
            <h3>UserName: {username}</h3>
        </div>
    );
};

export default User;