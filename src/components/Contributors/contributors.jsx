import React, { useState, useEffect } from 'react';
// import Data from '../../data/Contributors.json';
import Layout from '../../components/Layout/Layout';
import './css/index.css';

function Contribute() {
  const url = "https://api.github.com/repos/devvsakib/github-error-solve/contributors"
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async (url) => {
      const response = await fetch(url);
      const users = await response.json();
      setData(users)
    }
    fetchUsers(url)
  }, [data.length])

  // fun purpose, but looks better, isn't it?
  const changeColor = () => {
    const colorArray = ["4024e0", "1a5ba5", "118d7c", "8d54e1", "40E4F0", "7e1aa5"]
    let element;

    return element = colorArray[Math.floor(Math.random() * 6)];
  }
  return (
    <Layout>
      <section className='flex flex-wrap justify-center'>
        {
          // User filtered by CONTRIBUTIONS number, contribute more to jump in first place

          data.map(user =>
            <div
              id="container"
              className={`py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 md:px-6 border-l-4 rounded-lg bg-dark-secondary flex flex-col mt-8 items-center mx-auto gap-2 px-3 border-[#${changeColor()}] hover:border-primary hover:text-primary`}>
              <h1>{user.login} <small className='text-violet-400 container:hover:text-white'>{user.contributions}</small></h1>
              <img className='pfp' src={user.avatar_url} />
              <div className="links">
                <a className='spf-link' href={user.html_url}>Github</a>
                <a className='spf-link' href={user.twiter}>Twiter</a>
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