import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
        <div className='navbar'>
            <h3>CapX</h3>
            <div className='navbar-menu'>
                <Link to="/" className='p'>Dashboard</Link>
                <Link to="/funds" className='p'>Funds</Link>
                <Link to="/account" className='p'>Account</Link>
            </div>
        </div>
    </>
    )
}
export default Navbar;