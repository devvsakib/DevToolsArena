import React from 'react';
import Layout from '../Layout/Layout';
import DocItem from './DocItem';
import { gettingStarted, popular } from '../../data/Doc.json';
const Doc = () => {
  return (
    <Layout>
      <div className='w-full md:w-5/6 mx-auto px-4 py-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className='mb-4'>Getting started</h4>
            <div className="items grid grid-cols-1 gap-6">
            {
                gettingStarted.map((item, idx) => (
                  <DocItem
                    key={idx}
                    title={item.title}
                    content={item.description}
                  />
                ))
              }
            </div>
          </div>
          <div>
            <h4 className='mb-4'>Popular</h4>
            <div className="items grid grid-cols-1 gap-6">
              {
                popular.map((item, idx) => (
                  <DocItem
                    key={idx}
                    title={item.title}
                    content={item.description}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doc;