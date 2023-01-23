import React from 'react';
import Data from '../../data/Contributors.json';
import './css/index.css';

function Contribute() {
  return (
    <div>
        {
          Data.map(data =>
          <div 
          id="container"
          className="py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 px-2 md:px-6 border-l-4 rounded-lg   items-start bg-dark-secondary flex flex-col flex mt-8 items-center gap-2 px-3 py-2 border border-gray rounded-lg hover:border-primary hover:text-primary">
            <h1>{data.name}</h1>
            <img className='pfp' src={data.image} />
            <div className="links">
              <a className='spf-link' href={data.github}>Github</a>
              <a className='spf-link' href={data.twiter}>Twiter</a>
              {/* spf-link : abbreviation of (specific-link) for css */}
            </div>
          </div>
          )
        }
    </div>
  )
}

export default Contribute