import React, { useState } from 'react';

const App = () => {

    const state = useState();
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(newTime);

    const UpdateTime =()=>{
        let newCTime = new Date().toLocaleTimeString();
        setTime(newCTime);
    };
    

    return (
        <>
        <div className="addToCart">
            <h1 className="heading_style">{ctime} </h1>
            <button className="button button1" onClick={UpdateTime}>Get Time</button>
            </div>
        </>
    );
};

export default App;