import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import web from "./images/tea.jpg";


const Card = () => {
    return (
        <>
         
                    <div className='col-10 col-md-4 mx-auto'>
                        <div class="card">
                            <img class="card-img-top" src={web} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
            
        </>
    );
};
export default Card;