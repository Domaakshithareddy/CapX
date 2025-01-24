import { useState } from 'react';
import './Funds.css';
const Funds=()=>{
    const [balance,setBalance]=useState(0);
    const [amount,setAmount]=useState(0);
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [actionType, setActionType]=useState("");

    const deposit=()=>{
        setBalance(balance+Number(amount));
        closeModal();
    };
    const withdraw=()=>{
        if (balance>=Number(amount)){
            setBalance(balance-Number(amount));
        } else {
            alert("Insufficient balance!");
        }
        closeModal();
    };
    const openModal=(type)=>{
        setActionType(type);
        setAmount();
        setIsModalOpen(true);
    }
    const closeModal=()=>{
        setIsModalOpen(false);
    }
    return(
        <>
        <div className='boxf'>
            <p>Available to invest</p>
            <p>Balance: ${balance}</p>
            <div className='buttons'>
                <button className='dip' onClick={()=>openModal("Deposit")}>Deposit</button>
                <button className='with' onClick={()=>openModal("Withdraw")}>Withdraw</button>
            </div>
        </div>

        {isModalOpen  && (
            <div className='modal'>
                <div className='modal-content'>
                    <h3>{actionType} Amount</h3>
                    <input type='number' value={amount} 
                    onChange={(e)=>setAmount(e.target.value)} 
                    placeholder='Enter Amount'/>
                    <div className='modal-buttons'>
                        <button  className='action' onClick={actionType==='Deposit' ? deposit : withdraw}>
                            {actionType}
                        </button>
                        <button className='cancel' onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
export default Funds;