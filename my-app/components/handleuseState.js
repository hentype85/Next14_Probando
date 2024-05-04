'use client'

import React, { useState } from 'react';
import './component.css';


export default function HandleuseState() {
    const [count, setCount] = useState(0);
  
    return (
        <div className='center'>
            <h1>useState</h1>
            <button className='btn' onClick={() => { setCount(count + 1) }}>
                click = {count}
            </button>
        </div>
    );
}