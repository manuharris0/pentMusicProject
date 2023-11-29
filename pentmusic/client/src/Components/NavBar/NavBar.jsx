import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={styles.container}>
            <Link to='/about'><button>ABOUT</button></Link>
            <Link to='/artists'><button>ARTIST</button></Link>
            <Link to='/beats'><button>BEATS</button></Link>
            <Link to='/merch'><button>MERCH</button></Link>
            <Link to='/contact'><button>CONTACT</button></Link>
        </header>
    )
};

export default NavBar