import {
  MdPeople,
  MdInsertDriveFile,
  MdClose,
  MdMenu,
  MdHome,
  MdStore,
} from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState, useEffect} from "react";

function Header({notice }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [countStar, setCountStar] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/devvsakib/github-error-solve")
      .then((response) => response.json())
      .then((data) => setCountStar(data.stargazers_count))
      .catch((error) => console.error("Error fetching GitHub stars:", error));
  }, []);

  // Handle window resize to close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) { // 768px is md breakpoint
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

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
      name: "DevArea",
      link: "/devarea",
      icon: <MdStore size="1.2rem" />,
    },
    {
      name: "Resources",
      link: "/resources",
      icon: <MdStore size="1.2rem" />,
    },
  ];

  const githubLink = {
    name: "Github",
    link: "https://github.com/devvsakib/github-error-solve",
    icon: <AiFillGithub size="1.2rem" />,
    isExternalURL: true,
  };

  // Dynamic styles for cleaner code
  const mobileMenuClasses = `
    md:flex md:items-center md:gap-6 md:static md:opacity-100 md:visible md:bg-transparent md:flex-row md:justify-end md:h-auto md:w-auto
    ${open ? 
      'fixed inset-0 w-full h-screen flex flex-col items-center justify-center gap-8 z-40 backdrop-blur-md opacity-100 visible' : 
      'fixed inset-0 w-full h-screen flex flex-col items-center justify-center gap-8 z-40 opacity-0 invisible pointer-events-none'
    }
    transition-opacity duration-500 ease-in-out
    md:pointer-events-auto md:relative md:inset-auto
  `;

  const mobileMenuStyle = {
    backgroundColor: open ? (theme === "dark" ? "rgba(2, 0, 14, 0.95)" : "rgba(209, 203, 244, 0.95)") : "transparent",
    backgroundImage: open ? (theme === "dark" 
      ? "radial-gradient(rgba(133, 138, 227, 0.1) 2px, transparent 0)" 
      : "radial-gradient(rgba(25, 25, 31, 0.1) 2px, transparent 0)"
    ) : "none",
    backgroundSize: "30px 30px",
    backgroundPosition: "-5px -5px"
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 p-4 shadow-lg backdrop-blur-md dark:bg-gray-900/20 border-b border-white/20 dark:border-gray-800/30 z-50">
      <div className="w-full md:w-5/6 mx-auto flex justify-between items-center h-full relative z-50">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/assets/logo.png"
            className="w-36 bg-transparent invert dark:invert-0"
            alt="GES"
          />
        </Link>

        {/* GitHub, theme toggle and menu icon for mobile */}
        <div className="flex items-center gap-3 md:hidden relative z-50">
          <a target="_blank" href={githubLink.link}>
            <div className="bg-blue-600/50 shadow font-semibold flex gap-1 p-1 px-2 items-center rounded-full text-sm">
              <span className="githubBtn">
                {githubLink.icon}
              </span>
              {
                countStar && (
                  <div className="flex items-center gap-1">
                    {countStar}
                  </div>
                )
              }
            </div>
          </a>
          <div className="text-lg cursor-pointer" onClick={toggleTheme}>
            <HiMoon className="dark:hidden" />
            <HiSun className="hidden dark:inline" />
          </div>
          <div
            onClick={() => setOpen((val) => !val)}
            className="cursor-pointer relative z-50 p-2"
          >
            {open ? <MdClose size="1.2rem" /> : <MdMenu size="1.2rem" />}
          </div>
        </div>

        {/* Nav link items */}
        <div className={mobileMenuClasses} style={mobileMenuStyle}>
          {navLink.map((link, index) => (
            <div key={`${link.name}-${index}`}>
              <Link 
                className="flex items-center gap-1 text-3xl md:text-base font-medium 
                          text-[#1E1E1F] dark:text-white hover:text-[#858AE3] 
                          transition-all duration-300 md:transform-none transform hover:scale-110
                          relative group" 
                to={link.link}
                onClick={() => setOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9912d8] to-[#858AE3] opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 md:hidden"></div>
              </Link>
            </div>
          ))}
          
          {/* GitHub link for desktop */}
          <div className="hidden md:block">
            <a target="_blank" href={githubLink.link}>
              <div className="bg-blue-600/50 shadow font-semibold flex gap-1 p-1 px-2 items-center rounded-full">
                <span className="githubBtn">{githubLink.icon}</span>
                {countStar && (
                  <div className="flex items-center gap-1">{countStar}</div>
                )}
              </div>
            </a>
          </div>
          
          {/* Theme toggle for desktop */}
          <div className="text-lg cursor-pointer hidden md:block" onClick={toggleTheme}>
            <HiMoon className="dark:hidden" />
            <HiSun className="hidden dark:inline" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
