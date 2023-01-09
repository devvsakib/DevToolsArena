import Notice from '../Notice/Notice'
import './css/style.css'

function Header({ notice }) {
  return (
    <header className='pt-2'>
      <p><span>GitHub</span> <span>Error</span> <span>Solve</span></p><b className="badge text-white">{notice}</b>
    </header>
  )
}

export default Header