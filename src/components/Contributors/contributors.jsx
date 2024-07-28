import React, { useState, useEffect } from "react";
// import Data from '../../data/Contributors.json';
import Layout from "../../components/Layout/Layout";
import "./css/index.css";

function Contribute() {
  const url =
    "https://api.github.com/repos/devvsakib/github-error-solve/contributors";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const fetchUsers = async (url) => {
      const response = await fetch(url);
      const users = await response.json();
      setData(users);
      const usersMerged = await Promise.all(
        users.map(async (item) => {
          const result = await getUserObj(item.url);
          let tempFinData = {
            ...item,
            ...result,
          };
          return tempFinData;
        }),
      );
      setData(usersMerged);
      setLoading(true);
    };
    const getUserObj = async (url) => {
      const response = await fetch(url);
      let dataOfUser = await response.json();
      return { twitter_username: dataOfUser.twitter_username };
    };
    fetchUsers(url);
  }, [data.length]);

  // fun purpose, but looks better, isn't it?
  const changeColor = () => {
    const colorArray = [
      "4024e0",
      "1a5ba5",
      "118d7c",
      "8d54e1",
      "ff0000",
      "7e1aa5",
    ];
    let element;

    return (element = colorArray[Math.floor(Math.random() * 6)]);
  };
  return (
    <Layout>
      <section className="flex flex-wrap justify-center">
        {
          // User filtered by CONTRIBUTIONS number, contribute more to jump in first place

          data && data.length !== 0 ? (
            loading ? (
              data.map((user) => (
                <div
                  key={user.login}
                  id="container"
                  className={`py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 md:px-6 border-l-4 rounded-lg shadow-lg bg-[#${changeColor()}]/10 backdrop-blur-[10px] flex flex-col mt-8 items-center mx-auto gap-2 px-3 border-[#${changeColor()}] hover:border-primary hover:text-primary`}
                >
                  <img className="pfp mb-8 skeleton" src={user.avatar_url} />
                  <h1 className="text-center -mb-10 font-semibold uppercase">
                    {user.login}{" "}
                    <small className="text-violet-400 container:hover:text-white">
                      {user.contributions}
                    </small>
                  </h1>
                  <div className="links text-sm">
                    <a className="spf-link" href={user.html_url}>
                      GitHub
                    </a>
                    {user.twitter_username && (
                      <a
                        className="spf-link"
                        href={`https://twitter.com/${user.twitter_username}`}
                      >
                        Twitter
                      </a>
                    )}
                    {/* spf-link : abbreviation of (specific-link) for css */}
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center mt-20 md:text-2xl text-white">
                GitHub API Limit Exceeded
              </h1>
            )
          ) : (
            <div className="translate-y-[4rem]">
              <img
                src="/assets/run.gif"
                className="w-1/2 mx-auto"
                alt="Running.gif"
              />
              <h1 className="text-center md:text-2xl text-white">
                Contributors coming❤️‍🔥...
              </h1>
            </div>
          )
        }
      </section>
    </Layout>
  );
}

export default Contribute;
