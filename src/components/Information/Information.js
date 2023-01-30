import React from 'react';

const Information = ({ info }) => {
    const { title,body } = info;
    return (
        <div style={{color:'black', border:'2px solid red' , margin:'10px'}}>
            <h1>Title:{title}</h1>
            <p>Body:{body}</p>
        </div>
    );
};

export default Information;