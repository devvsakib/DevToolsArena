import React from 'react';
import Layout from '../components/Layout/Layout';
import DocItem from '../components/Doc/DocItem';
import { docs } from '../data/Doc.json';
const Doc = () => {
  console.log(docs)
  return (
    <Layout>
      <div className='w-full md:w-5/6 mx-auto px-4 py-8'>
        <h3 className='text-3xl text-center mb-20'>Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className='mb-4'>Getting started</h4>
            <div className="items grid grid-cols-1 gap-6">
              {
                docs.filter(item => item.tag[0] == "popular").map((item, idx) => (
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
                docs.filter(item => item.tag[0] == "popular").map((item, idx) => (
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