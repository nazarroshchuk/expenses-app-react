import React from 'react';
import classes from './ExpenseItem.module.css';
import { ExpenseDate } from "./ExpenseDate";
import { Card } from '../UI/Card'

export const ExpenseItem = ({ expense }) => {

    return (
        <li>
            <Card classProp={classes.expenseItem}>
                <ExpenseDate  date ={expense.date} />
                <div className={classes.expenseItem__description}>
                    <h2>{expense.title}</h2>
                    <div className={classes.expenseItem__price}>${expense.amount}</div>
                </div>
            </Card>
        </li>
    )
}
