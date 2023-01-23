import React from 'react';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import DocItem from './DocItem';

const DocCard = () => {
    return (
          <div className='w-full md:w-5/6 mx-auto px-4 py-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className='mb-4'>Getting started</h4>
                <div className="items grid grid-cols-1 gap-6">
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Set up Git' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Connecting to Github with SSH' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Creating and managing repositories' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Basic writing and formatting syntax' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                </div>
              </div>
              <div>
                <h4 className='mb-4'>Popular</h4>
                <div className="items grid grid-cols-1 gap-6">
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='About pull request' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Authentication' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Adding locally hosted code to Github' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Managing remote repositories' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                  {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
                  <DocItem 
                    title='Github pages documentation' 
                    content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' 
                  />
                </div>
              </div>
            </div>
          </div>
    );
};

export default DocCard;