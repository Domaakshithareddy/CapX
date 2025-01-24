import './Account.css'
import { Link } from 'react-router-dom';
const Signup=()=>{
    return(
        <>
        <div className='box'>
            <p>Please Sign Up</p>
            <form>
                <label htmlFor="name">Username:</label>
                <input type="text" id="name"></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"></input>
                <label htmlFor="no">Number:</label>
                <input type="integer" id="no"></input>
                <label htmlFor="pass">Password:</label>
                <input type="password" id="pass"></input>
                <button className='btn'>Submit</button>
                <p>Do not have an account? <Link to="/account" className='link'>Sign In </Link></p>
            </form>
        </div>
        </>
    )
}
export default Signup;