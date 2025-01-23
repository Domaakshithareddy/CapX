import './Account.css'
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
            </form>
        </div>
        </>
    )
}
export default Account;