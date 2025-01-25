import './Account.css'
import { Link } from 'react-router-dom';
const Account=()=>{
    return(
        <>
        <div className='box'>
            <p>Please Sign In</p>
            <form>
                <label htmlFor="name">Username:</label>
                <input type="text" id="name"></input>
                <label htmlFor="pass">Password:</label>
                <input type="password" id="pass"></input>
                <button className='btn'>Submit</button>
                <p>Do not have an account? <Link to="/signup" className='link' >Sign Up </Link></p>
            </form>
        </div>
        </>
    )
}
export default Account;