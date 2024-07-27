import {
  MdPeople,
  MdInsertDriveFile,
  MdClose,
  MdMenu,
  MdHome,
} from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";

function Header({ notice }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const navLink = [
    {
      name: "Home",
      link: "/",
      icon: <MdHome size="1.2rem" />,
    },
    {
      name: "Doc",
      link: "/doc",
      icon: <MdInsertDriveFile size="1.2rem" />,
    },
    {
      name: "Contributors",
      link: "/Contributors",
      icon: <MdPeople size="1.2rem" />,
    },
    {
      name: "Github",
      link: "https://github.com/devvsakib/github-error-solve",
      icon: <AiFillGithub size="1.2rem" />,
      isExternalURL: true,
    },
  ];

  return (
    <header className="p-4 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full md:w-5/6 mx-auto flex flex-row md:flex-row justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/assets/logo.png"
            className="w-36 bg-transparent invert dark:invert-0"
            alt="GES"
          />
        </Link>

        {/* Menu icon */}
        <div
          onClick={() => setOpen((val) => !val)}
          className="cursor-pointer md:hidden"
        >
          {open ? <MdClose size="1.2rem" /> : <MdMenu size="1.2rem" />}
        </div>

        {/* Nav link items */}
        <div
          className={`
          md:flex md:items-center 
          md:pb-0 md:gap-6 
          md:static md:z-auto 
          md:w-auto md:pl-0 
          md:bg-transparent
          grid gap-2 absolute 
          z-[-1] left-0 w-full py-2 pl-8
          transition-all duration-500 ease-in 
          ${open ? (theme === "dark" ? "bg-dark/90" : "bg-white/90") : ""}
          ${open ? "top-14" : "top-[-490px]"}`}
        >
          {navLink.map((link, index) => {
            return (
              <div key={`${link.name}-${index}`}>
                {link?.isExternalURL ? (
                  <a target="_blank" href={link.link} className="githubBtn">
                    {link.icon}
                  </a>
                ) : (
                  <Link className="flex items-center gap-1" to={link.link}>
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="text-lg cursor-pointer" onClick={toggleTheme}>
            <HiMoon className="dark:hidden" />
            <HiSun className="hidden dark:inline" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
