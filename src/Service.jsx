import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Card from './Card';
import web from "./images/tea.jpg";


const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our services</h1>
            </div>

            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 col-md-4 mx-auto'>
                      <Card/>
                      <Card/>
                      <Card/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Service;