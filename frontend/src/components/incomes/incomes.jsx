import React, { useEffect } from 'react'
import Form from '../form/form'
import { useGlobalContext } from '../../context/globalContext'
import IncomeItem from '../incomeItem/incomeItem'
import "./incomes.css"

const Incomes = () => {
  const{addIncome,getIncomes, myIncomes,deleteIncome, getTotalIncome}=useGlobalContext()

  useEffect(()=>{

    getIncomes();

  },[]);


  return (
    <div className='income-styled'>
      <div className="inner-layout">
        <h1>Income</h1>
        <h2 className="total-income">Total income: <span>R{getTotalIncome()}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {myIncomes.map((income)=>{
              const {_id,title,amount, date, description,type, category}= income;
              return (<IncomeItem
              
              key={_id}
              id={_id} 
              title={title} 
              description={description} 
              amount={amount} 
              date={date} 
              type={type}
              category={category} 
              indicatorColor="var(--color-green)"
              deleteItem={deleteIncome}
              
    
              />)

            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Incomes