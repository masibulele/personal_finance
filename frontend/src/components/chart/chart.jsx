import React from 'react'
import "./chart.css"
import {dateFormat} from "../../utils/dateFormat"

import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)


function Chart() {
    //  get incomes and expense list objects from global states
    const {myIncomes, myExpenses} = useGlobalContext();

    // create data object to be used in line graph

    const data = {
        labels: myIncomes.map((income)=>{
            const {date} = income;
            return dateFormat(date);
        }),

        datasets:[
            {
                label:"income",
                data:[
                    ...myIncomes.map((income)=>{
                        const {amount} = income;
                        return amount;
                    })
                ],
                backgroundColor: "green",
                tension: 0.2,
            },
            {
                label:"expense",
                data:[
                    ...myExpenses.map((expense)=>{
                        const {amount} = expense;
                        return amount;
                    })
                ],
                backgroundColor: "red",
                tension: 0.2,
            }
        ]
        
    }
  return (
    <div className='chart-styled'>
        <Line data={data}/>
    </div>
  )
}

export default Chart