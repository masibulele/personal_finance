import React from 'react'
import "./transactions.css"
import { useGlobalContext } from '../../context/globalContext'
import axios from 'axios'
import IncomeItem from '../incomeItem/incomeItem'

const Transactions = () => {
  const {selectedFile, setSelectedFile, addCsvData, setError,myIncomes,deleteIncome,myExpenses,deleteExpense} = useGlobalContext();

  const handleChange = (event)=>{
    setSelectedFile(event.target.files[0])
    
    console.log("file changed")
   
  }
 

  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(selectedFile)
    alert(selectedFile)

    if(selectedFile){
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileName', selectedFile.name);


      addCsvData(formData);
      myIncomes();
      myExpenses();

      // const config ={
      //   headers:{
      //       'content-type':'multipart/form-data',

      //     }
      // }

      // const response = await axios.post(`${baseURL}csv`,formData,config)
      //   .catch((err)=>{
      //       console.log(err.response.data.message)
      //       setError(err.response.data.message)
      //   })

      //   console.log(response.data)


    
    }
    


  }

  return (
    <div>
      <div className="inner-layout">
        <div className="form-container">
          <form id="upload-form"  name="file" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="file-input" >Select file to upload</label>
              <input type="file" id='file-input' onChange={handleChange} />
            </div>
            <div className="submit-btn">
              <button type='submit' className='btn'><i className="fa-solid fa-plus"></i>Upload File</button>
            </div>

          </form>
        </div>
        <div className="trans-container">
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

export default Transactions