import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Common from './Common';
import web from "./images/selfi.svg";


const Home = () => {
    return (
        <>
          <Common
              name='grow your business'
              hname="nikita"
              imgsrc={web}
              visit='./service'
              btname='Get started'
          />
        </>
    );
};
export default Home;