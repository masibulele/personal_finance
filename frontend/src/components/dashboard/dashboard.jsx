import React, { useEffect } from 'react'
import Chart from '../chart/chart'
import { useGlobalContext } from '../../context/globalContext'
import History from '../history/history';
import "./dashboard.css"


const Dashboard = () => {
 const {getTotalExpense,getTotalIncome, getTotalBalance,transactionsHistory, getIncomes,getExpenses,myIncomes, myExpenses} =useGlobalContext();

 useEffect(()=>{
  getIncomes();
  getExpenses();

 },[])

  return (
    <div>
      <div className="inner-layout">
        <h1>All Transactions</h1>
        <div className="stats-container">
          <div className="chart-container">
            <Chart />
            <div className="amount-container">
              <div className="income">
                <h2>Total Income</h2>
                <p><i className="fa-solid fa-r"></i>{getTotalIncome()}</p>
              </div>
              <div className="expense">
                <h2>Total Expenses</h2>
                <p><i className="fa-solid fa-r"></i>{getTotalExpense()}</p>
              </div>
              <div className="balance">
                <h2>Balance</h2>
                <p><i className="fa-solid fa-r"></i>{getTotalBalance()}</p>
              </div>
            </div>
          </div>
          <div className="history-container">
            <History />
            <div>
              <h3 className="income-title"> Min <span>Income</span> Max</h3>
              <div className="income-item">
                <p>
                  {Math.min(...myIncomes.map((item)=> item.amount))}

                </p>
                <p>
                  {Math.max(...myIncomes.map((item)=> item.amount))}

                </p>
              </div>
              
            </div>
            <div>
              <h3 className="income-title"> Min <span>Expenses</span> Max</h3>
              <div className="income-item">
                <p>
                  {Math.min(...myExpenses.map((item)=> item.amount))}

                </p>
                <p>
                  {Math.max(...myExpenses.map((item)=> item.amount))}

                </p>
              </div>
              
            </div>
          </div>
        </div>

      </div>
      

    </div>
  )
}

export default Dashboard