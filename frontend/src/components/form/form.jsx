import React, { useState } from 'react'
import "./form.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../button/button';

const Form = () => {
    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        category:"",
        description:""
    });

    const{title, amount,date,category,description } = inputState
    const handleInput = (name)=>(event)=>{setInputState({...inputState,[name]: event.target.value})
    setError("")
}
    

    const{addIncome, getIncomes, error, setError}=useGlobalContext()
        
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('triggered handle submit')
        addIncome(inputState)
    
        // get income data after addition of item into database
        getIncomes()
        setInputState({
        title: "",
        amount: "",
        date: "",
        category:"",
        description:""
        });
    }

  return (
    <form className='form-styled' onSubmit={handleSubmit}>
        {error && <p className='err'>{error}</p>}
        <div className="input-control">
            <input 
                value={title}
                name='title'
                onChange={handleInput('title')}
                placeholder='Income title'
                type="text" 
            />
        </div>
        <div className="input-control">
            <input 
                value={amount}
                name='amount'
                onChange={handleInput('amount')}
                placeholder='Income amount'
                type="text" 
            />
        </div>
        <div className="input-control">
            <DatePicker
                id='date' 
                placeholderText="Enter Date here"
                selected={date}
                dateFormat={'dd/MM/yyyy'}
                onChange={(date)=>{ setInputState({...inputState,date:date })}}

            />

        </div>
        <div className="input-control selects">
            <select required name="category" id="category" value={category} onChange={handleInput('category')}>
                <option value="" disabled> Select option</option>
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="investments">Investments</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bank">Bank</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>
        
        <div className="submit-btn">
            <Button
                name={'Add Income'}
                icon={<i className="fa-solid fa-plus"></i>}
                bPad={'.8rem 1.6rem'}
                bRad={'30px'}
                bg={'var(--color-accent'}
                color={'#fff'}
             />
            <button></button>
        </div>
    </form >
  )
}

export default Form