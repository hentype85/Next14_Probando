'use client'

import React, { useState } from 'react';
import './handleStates.css';


export default function HandleuseState() {
    const [count, setCount] = useState(0);
  
    return (
        <div className='container center'>
            <button className='btn' onClick={() => { setCount(count + 1) }}>
                click = {count}
            </button>
        </div>
    );
}