import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Common from './Common';
import web from "./images/selfi.svg";


const About = () => {
    return (
        <>
            <Common
                name='welcome to about'
                hname="prashant"
                imgsrc={web}
                visit='/contact'
                btname='contact'
            />
        </>
    );
};
export default About;