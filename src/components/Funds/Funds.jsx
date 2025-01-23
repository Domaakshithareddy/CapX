import './Funds.css';
const Funds=()=>{
    let balance=250;
    return(
        <>
        <div className='boxf'>
            <p>Available to invest</p>
            <p>Balance: ${balance}</p>
            <button className='dip'>Deposit</button>
            <button className='with'>Withdraw</button>
        </div>
        </>
    )
}
export default Funds;