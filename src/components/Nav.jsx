import {Link} from 'react-router-dom'

function Nav() {
    return (
          <nav>
               <Link to="/">Home</Link>
               <Link to="/users/jordan">Jordan</Link>
               <Link to="/users/Kobe">Kobe</Link>
               <Link to="/users/Shaq">Shaq</Link>
              </nav>
    );
}

export default Nav;