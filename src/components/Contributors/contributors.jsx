import React from 'react';
import Data from '../../data/Contributors.json';
import Layout from '../../components/Layout/Layout';
import './css/index.css';

function Contribute() {
  return (
    <Layout>
      <section className='flex flex-wrap justify-center'>
        {
          Data.map(data =>
            <div
              id="container"
              className="py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 md:px-6 border-l-4 rounded-lg bg-dark-secondary flex flex-col mt-8 items-center mx-auto gap-2 px-3 border-gray hover:border-primary hover:text-primary">
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
      </section>
    </Layout>
  )
}

export default Contribute