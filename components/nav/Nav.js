import Link from 'next/link'

/* middleware */
import {
  setLogout,
} from '../../middleware/utils';

function Nav() {

  function handleOnClickLogout(e) {
    setLogout(e);
  }

	return (
		<nav>
      <Link href={{ pathname: '/' }}>
        <a style={{ marginRight: '.75rem' }}>&bull; Home Page</a>
      </Link>
      <Link href={{ pathname: '/about' }}>
        <a style={{ marginRight: '.75rem' }}>&bull; About Page</a>
      </Link>
      <a href="#" onClick={e => handleOnClickLogout(e)}>
        &bull; Logout
      </a>
		</nav>
	)
}

export default Nav