import React from 'react'
import "./incomeItem.css"
import Button from '../button/button'
import { dateFormat } from '../../utils/dateFormat'

const IncomeItem = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
    }) => {

        //  show category icon
        const categoryIcon = ()=>{
            switch (category) {
                case 'salary':
                    return <i className="fa-solid fa-money-bill"></i>
                case 'freelancing' :
                    return <i className ="fa-solid fa-earth-americas"></i>
                case 'investments':
                    return <i className="fa-solid fa-arrow-trend-up"></i>
                case 'bitcoin':
                    return <i className="fa-brands fa-bitcoin"></i>
                case 'bank':
                    return <i className="fa-brands fa-cc-visa"></i>
                case 'other':
                    return <i className="fa-solid fa-piggy-bank"></i>
                default:
                    return "";
            }
        }

        const expenseCatIcon = () => {
            switch (category) {
                case 'education':
                    return <i className="fa-solid fa-book-open"></i>;
                case 'groceries':
                    return <i className="fa-solid fa-bowl-food"></i>;
                case 'health':
                    return <i className="fa-solid fa-briefcase-medical"></i>;
                case 'subscriptions':
                    return <i className="fa-solid fa-tv"></i>;
                case 'takeaways':
                    return <i className="fa-solid fa-utensils"></i>;
                case 'clothing':
                    return <i className="fa-solid fa-shirt"></i>;
                case 'travelling':
                    return <i className ="fa-solid fa-earth-americas"></i>;
                case 'other':
                    return <i className="fa-solid fa-circle-dot"></i>;
                default:
                    return ''
            }
        }


        return (
            <div className='income-item-styled'>
                <div className="icon">
                    {type === 'expense' ? expenseCatIcon() : categoryIcon()}

                </div>
                <div className="content">
                    <h5>{title}</h5>
                    <div className="inner-content">
                        <div className="text">
                            <p><i className="fa-solid fa-r"></i>{amount}</p>
                            <p><i className="fa-solid fa-calendar"></i>{dateFormat(date)}</p>
                            <p><i className="fa-solid fa-comment"></i>{description}</p>
                        </div>
                        <div className="btn-container">
                            <Button 
                            icon={<i className="fa-solid fa-trash"></i>}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={()=> deleteItem(id)}
                            

                            />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default IncomeItem