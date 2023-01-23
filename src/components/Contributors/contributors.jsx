import React from 'react';
import Data from '../../data/Contributors.json';
function Contribute() {
  return (
    <div>
        {
          Data.map(data =>
          <>
            <h1>{data.name}</h1>
            <a href={data.github}>Github</a>
            <a href={data.twiter}>Twiter</a>
          </>
          )
        }
    </div>
  )
}

export default Contribute