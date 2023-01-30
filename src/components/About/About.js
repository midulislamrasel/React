import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Information from '../Information/Information';

const About = () => {
    const information = useLoaderData()
    return (
        <div>
            {
                information.map(info => <Information
                    key={info.id}
                    info={info}
                ></Information>)
            }
            <h3>This is About section</h3>
        </div>
    );
};

export default About;