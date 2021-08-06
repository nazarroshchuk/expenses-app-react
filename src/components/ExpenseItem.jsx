import React from 'react';
import classes from './ExpenseItem.module.css';
import { ExpenseDate } from "./ExpenseDate";
import { Card } from '../components/Card'

export const ExpenseItem = ({ expense }) => {

    return (
        <Card classProp={classes.expenseItem}>
            <ExpenseDate  date ={expense.date} />
            <div className={classes.expenseItem__description}>
                <h2>{expense.title}</h2>
                <div className={classes.expenseItem__price}>${expense.amount}</div>
            </div>
        </Card>
    )
}
