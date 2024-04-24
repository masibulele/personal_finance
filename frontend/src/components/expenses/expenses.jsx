import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import IncomeItem from '../incomeItem/incomeItem'
import "./expenses.css"
import ExpenseForm from './expenseForm'

const Expenses = () => {
  const{addIncome,getExpenses, myExpenses,deleteExpense, getTotalExpense}=useGlobalContext()

  useEffect(()=>{

    getExpenses();

  },[]);


  return (
    <div className='expense-styled'>
      <div className="inner-layout">
        <h1>Expense</h1>
        <h2 className="total-expense">Total expense: <span>R{getTotalExpense()}</span></h2>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="expenses">
            {myExpenses.map((expense)=>{
              const {_id,title,amount, date, description,type, category}= expense;
              return (<IncomeItem
              
              key={_id}
              id={_id} 
              title={title} 
              description={description} 
              amount={amount} 
              date={date} 
              type={type}
              category={category} 
              indicatorColor="var(--color-delete)"
              deleteItem={deleteExpense}
              
    
              />)

            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Expenses