import React, { useState } from 'react';


const ToDoList = () => {

    const [num, setNum] = useState(0);

    const incNum = () =>{
        setNum(num+1);
    };

    const decNum = () =>{
        if(num>0){
            setNum(num-1);
        }else{
            console.log('number is 0');
        }
        
    };

    return (
        <>
            <div className='main'>
                <div className='center-div'>
                    <h1> {num} </h1>
                    <div className='btn-div'>
                        <button onClick = {incNum}>Inc</button>
                        <button onClick = {decNum}>Dec</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ToDoList;