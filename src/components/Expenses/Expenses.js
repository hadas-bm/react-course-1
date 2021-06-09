import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onFilterExpense = (event) => {
        setFilteredYear(event.target.value)
    }

    const filteredItems = items.filter((item) => item.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterExpense={onFilterExpense} />
            <ExpenseChart expenses={filteredItems} />
            <ExpensesList items={filteredItems} />
        </Card>
    )
}

export default Expenses;