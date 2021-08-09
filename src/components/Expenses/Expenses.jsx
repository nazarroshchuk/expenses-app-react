import React, { useState } from "react";

import classes from './Expenses.module.css';
import { Card } from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import {ExpensesChart} from "./ExpensesChart";

export const Expenses = ({ expenses }) => {
    const [filterYearValue, setFilterYearValue ] = useState('All');


    const onSetFilterYearValue = (year) => {
        setFilterYearValue(year);
    }

    const filteredExpenses = filterYearValue === 'All'
        ? expenses
        : expenses.filter(expense => expense.date.getFullYear().toString() === filterYearValue)

    return (
        <Card classProp={classes.expenses}>
            <ExpensesFilter
                onSetFilterYearValue={onSetFilterYearValue}
                selected={filterYearValue}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}
