import React from "react";

import './ExpensesList.css';
import {ExpenseItem} from "./ExpenseItem";

export const ExpensesList = ({ expenses }) => {
    if(!expenses.length) {
        return <h2 className="expenses-list__fallback">No expenses with selected year.</h2>
    }

    return (
        <ul className="expenses-list">
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </ul>
    )
}
