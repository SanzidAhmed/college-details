import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CollegeDetails = () => {
    const singleCollege = useLoaderData();
    console.log(singleCollege)
    return (
        
        <div>
            <h1>{singleCollege.name}</h1>
        </div>
    );
};

export default CollegeDetails;