import React from "react";
import classes from './Expenses.module.css';
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "./Card";

export const Expenses = ({ expenses }) => {
    return (
        <Card classProp={classes.expenses}>
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </Card>
    )
}
