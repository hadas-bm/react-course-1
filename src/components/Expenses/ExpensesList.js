import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
    if (!items.length)
        return <h2 className="expenses-list__fallback">No expenses found.</h2>

    return (
        <ul className="expenses-list">
            {  items.map(expense =>
                <ExpenseItem key={expense.id} {...expense} />
            )}
        </ul>
    )

};

export default ExpensesList;