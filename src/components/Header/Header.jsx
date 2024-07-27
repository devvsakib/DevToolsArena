import { MdPeople, MdInsertDriveFile, MdConstruction } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header({ notice }) {
  const navLink = [
    {
      name: 'Home',
      link: '/',
      icon: ''
    },
    {
      name: 'Doc',
      link: '/doc',
      icon: <MdInsertDriveFile size='1rem' />
    },
    {
      name: 'Contributors',
      link: '/Contributors',
      icon: <MdPeople size='1.25rem' />
    },
    {
      name: '',
      link: 'https://github.com/devvsakib/github-error-solve',
      icon: <AiFillGithub size='1.45rem' />
    }
  ]

  return (
    <header className="p-4 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* <h1 className="text-xl font-bold">
          GITHUB <span className="text-primary line-through">ERROR</span> SOLVE
        </h1> */}
        <Link to={'/'}>
          <img src="/assets/logo.png" className="w-36 bg-transparent" alt="GES" />
        </Link>
        <div className="flex mt-2 md:mt-0 items-center gap-7 text-sm">

          {
            navLink.map((link, index) => {
              return (
                link.name == "" ? (<a target='_blank' href={link.link} className="githubbtn">{link.icon}</a>
                ) : link.name == "Doc" ? (<Link className="flex items-center gap-1" to={link.link}>{link.icon}{link.name}</Link>
                ) : link.name == "Contributors" ? (<Link className="flex items-center gap-1" to={link.link}>{link.icon}{link.name}</Link>
                ) : link.name == "Home" ? (<Link className="flex items-center gap-1" to={link.link}>{link.icon}{link.name}</Link>
                ) : null
              )
            })

          }


          {/* <MdConstruction className="text-lg" />
          <h6>Under Construction</h6>

          <Link to={'/doc'}>Doc</Link>

          <Link to={'/Contributors'}>Contributors</Link>

          <a target='_blank' href="https://github.com/devvsakib/github-error-solve"><AiFillGithub size='1.25rem'/></a> */}


        </div>
      </div>
    </header>
  );
}

export default Header;