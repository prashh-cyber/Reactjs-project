import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import web from "./images/selfi.svg";


const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 mt-5 editRow justify-content-center ' >
                                    <h1> {props.name} </h1>
                                    <h2 className my-3>{props.hname}</h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn btn-outline-primary'>{props.btname}</NavLink>
                                    </div>
                                </div>
                           

                                <div className='col-md-6 pt-5 pt-lg-0'>
                                    <img src={props.imgsrc} className='img-fluid' alt='hi' />
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
};
export default Common;