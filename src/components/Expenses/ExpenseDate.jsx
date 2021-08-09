import React from "react";
import classes from './ExpenseDate.module.css';
import { Card } from "../UI/Card";

export const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <Card classProp={classes.expenseDate}>
            <div className={classes.expenseDate__month}>{month}</div>
            <div className={classes.expenseDate__day}>{day}</div>
            <div className={classes.expenseDate__year}>{year}</div>
        < /Card>
    )
}
