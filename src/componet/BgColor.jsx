import React, { useState } from 'react';
import './bg.css';
const BgColor = () => {
    const bgC = "#8a2be2";
    const [bg , setbackc] = useState(bgC);
    const [name , setName] = useState('Click Me')
    const bgcolor = () =>{
       const ChangeBC = '#00ffff';
       setbackc(ChangeBC);
       setName('Ochh')
    };
    const bba = () => {
        setbackc(bgC);
       setName('Ochh No')
    }
    return (
        <div className='bg' style={{backgroundColor : bg}}>
            <button className='btn' onClick={bgcolor} onDoubleClick={bba}>{name}</button>
        </div>
    );
};

export default BgColor;