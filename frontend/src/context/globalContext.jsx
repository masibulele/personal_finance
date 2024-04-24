import { React , createContext, useState, useContext} from "react";
import axios from "axios"



const GlobalContext = createContext();

const baseURL = "https://dashboard-backend-7jfm.onrender.com/"


const GlobalProvider = ({children})=>{
    const [myIncomes, setIncomes] = useState([]);
    const [myExpenses, setExpense] = useState([]);
    const [error, setError] = useState(null);


    // adds an income to database
    const addIncome = async (income)=>{
        const response = await axios.post(`${baseURL}add-income`,income)
            .catch((err)=>{
                console.log(err.response.data.message)
                setError(err.response.data.message)
            })

        // get the incomes after adding item
        getIncomes();

    };
    // retrieves incomes from database
    const getIncomes = async()=>{
        const response = await axios.get(`${baseURL}get-incomes`)
        .catch((err)=>{
            console.log(err.response.data.message)
            setError(err.response.data.message)
        })
        setIncomes(response.data.data);

    };

    // delete income from database
    const deleteIncome = async (id)=>{
        const response = await axios.delete(`${baseURL}delete-income/${id}`)
        .catch((err)=>{
            console.log(err.response.data.message)
            setError(err.response.data.message)

        })

        // get the incomes after deleting item
        getIncomes();
    };

    // calculate total income
    const getTotalIncome = ()=>{
        let totalIncome =0;
        myIncomes.forEach((income)=>{
            totalIncome = totalIncome + income.amount;

        })
        return totalIncome;
    };

    
    // expense requests

      // adds an expense  to database
      const addExpense = async (expense)=>{
        const response = await axios.post(`${baseURL}add-expense`,expense)
            .catch((err)=>{
                console.log(err.response.data.message)
                setError(err.response.data.message)
            })

        // get the expense after adding item
        getExpenses();

    };
    // retrieves incomes from database
    const getExpenses = async()=>{
        const response = await axios.get(`${baseURL}get-expenses`)
        .catch((err)=>{
            console.log(err.response.data.message)
            setError(err.response.data.message)
        })
        setExpense(response.data.data);

    };

    // delete income from database
    const deleteExpense = async (id)=>{
        const response = await axios.delete(`${baseURL}delete-expense/${id}`)
        .catch((err)=>{
            console.log(err.response.data.message)
            setError(err.response.data.message)

        })

        // get the expense after deleting item
        getExpenses();
    };

    // calculate total income
    const getTotalExpense = ()=>{
        let totalExpenses =0;
        myExpenses.forEach((expense)=>{
            totalExpenses = totalExpenses + expense.amount;

        })
        return totalExpenses;
    };

    //calculate balance
    const getTotalBalance =()=>{
        return getTotalIncome()- getTotalExpense()
    }
    // organise transactions by date

    const transactionsHistory = ()=>{
        const history = [...myIncomes, ...myExpenses].sort((a,b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        });
        return history.slice(0,3)
    };


    return(
        <GlobalContext.Provider 
        value={{
            addIncome,
            getIncomes,
            myIncomes,
            deleteIncome,
            getTotalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            myExpenses,
            getTotalExpense,
            getTotalBalance,
            transactionsHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>

    )


};




const useGlobalContext = () =>{
    return useContext(GlobalContext)
}


export {GlobalProvider,useGlobalContext }