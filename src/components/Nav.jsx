import {Link} from 'react-router-dom'

function Nav() {
    return (
          <nav>
               <Link to="/">Home</Link>
               <Link to="/users/Eminem">Eminem</Link>
               <Link to="/users/2Pac">2Pac</Link>
               <Link to="/users/Dr. Dre">Dr. Dre</Link>
              </nav>
    );
}

export default Nav;