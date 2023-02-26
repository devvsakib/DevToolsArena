import React from 'react';
import Layout from '../Layout/Layout';
import DocItem from './DocItem';

const Doc = () => {
  return (
    <Layout>
      <div className='w-full md:w-5/6 mx-auto px-4 py-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className='mb-4'>Getting started</h4>
            <div className="items grid grid-cols-1 gap-6">
              {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
              <DocItem
                title='Set up Git'
                content="Download git by just searching for git on google, you'll find a first link click on it and download it. After downloading, open the file click on install, make your preferences and Vola, git is on your PC."
              />
              {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
              <DocItem
                title='Connecting to Github with SSH'
                content='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
              />
              {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
              <DocItem
                title='Creating and managing repositories'
                content="You can create as many repo's as you want, all you need is a github account and some internet connection. Create a github account, create a repo, you can see how to add files to the repo on our github repo readme file."
              />
              {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
              <DocItem
                title='Basic writing and formatting syntax'
                content="You can use prettier a vscode extension, which format's your code in a perfect manner with all the indentation and colour matchings. This will help you understand the syntax that you have written and help you resolving an issue."
              />
            </div>
          </div>
          <div>
            <h4 className='mb-4'>Popular</h4>
            <div className="items grid grid-cols-1 gap-6">
              {/* <div className="bg-gray w-full h-[1px] my-4" /> */}
              <DocItem
                title='About pull request'
                content="We have many repo's on GitHub. Suppose you want to make some changes to some repo then, you'll fork that repo and make all of your changes. Now, when you create a pull request, it compares what's the difference in your fork and the main project. If owner like's it, he'll approve it."
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
    </Layout>
  );
};

export default Doc;