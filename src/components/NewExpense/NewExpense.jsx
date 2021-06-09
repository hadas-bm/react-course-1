import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExspense = ({ onSaveExpense }) => {
    const [isAddNewExpense, setIsAddNewExpense] = useState(false);

    const onClickHandler = () => {
        setIsAddNewExpense((prevState) => setIsAddNewExpense(!prevState))
    }

    return (
        <div className="new-expense">
            {
                isAddNewExpense ?
                    <ExpenseForm onSaveExpense={onSaveExpense} onCloseFrom={onClickHandler} />
                    : <button onClick={onClickHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExspense;