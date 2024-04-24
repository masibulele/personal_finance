import React from 'react'
import "./navigation.css"
import avatar from "../../img/avatar.png"

const Navigation = ({active,setActive}) => {
  return (
    <div className='nav-styled'>
        <div className="user-container">
            <img src={avatar} alt="avatar" />
            <h2>Masi</h2>
            <p>Your Money</p>
        </div>
        <ul className="menu-items">
            <li key={1} 
                className={active===1? "active":""}
                onClick={()=>{ setActive(1)}}>
                <i className="fa-solid fa-chart-line"></i>
                <span>Dashboard</span>
            </li>
            <li key={2} 
                className={active===2? "active":""}
                onClick={()=>{ setActive(2)}}>
                <i className="fa-solid fa-credit-card"></i>
                <span> View Transactions</span>
            
            </li>
            <li key={3} 
                className={active===3? "active":""}
                onClick={()=>{ setActive(3)}}>
                <i className="fa-solid fa-money-bill-trend-up"></i>
                <span>Incomes</span>
            </li>
            <li key={4}  
                className={active===4? "active":""}
                onClick={()=>{ setActive(4)}}>
                <i className="fa-solid fa-money-bill-transfer"></i>
                <span>Expense</span>
                
            </li>
        </ul>
        <ul className="bottom-nav">
            <li>
                <i className="fa-solid fa-right-from-bracket"></i> 
                <span>Signout</span>
            </li>
        </ul>

    </div>
  )
}

export default Navigation