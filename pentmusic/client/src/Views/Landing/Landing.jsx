import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <div>
            <p>BIENVENIDOS A PENT MUSIC STUDIOS</p>
            <Link to='/about'><button>ABOUT</button></Link>
            <Link to='/artists'><button>ARTIST</button></Link>
            <Link to='/beats'><button>BEATS</button></Link>
            <Link to='/merch'><button>MERCH</button></Link>
            <Link to='/contact'><button>CONTACT</button></Link>
        </div>
    )
};

export default Landing;