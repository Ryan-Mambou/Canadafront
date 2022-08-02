import React from 'react';
import '../styles/indication.css';

function Indication({indication}) {
  return (
    <div className='indication_container'>
        <h2 className='indication'>{indication}</h2>
        <hr className='hr'/>
    </div>
  )
}

export default Indication