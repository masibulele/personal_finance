import React from 'react'
import "./history.css"
import { useGlobalContext } from '../../context/globalContext'

const History = () => {
    const {transactionsHistory} = useGlobalContext();

    const [...history] = transactionsHistory();
  return (
    <div className='history-styled'>
        <h2>Recent history</h2>
        {history.map((item)=>{

            const {_id, amount, title, type} = item

            return(
                <div key={_id} className="history-item">
                    <p style={
                        {
                        'color': type === "expense"? 'red': 'var(--color-green)'
                    }
                    }>
                        {title}
                    </p>
                    <p style={
                        {
                        'color': type === "expense"? 'red': 'var(--color-green)'
                    }
                    }>
                        {
                            type === "expense"? `-${amount}`:`+${amount}`
                        }
                    </p>


                </div>
            )

        })}
    </div>
  )
}

export default History