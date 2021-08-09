import React, { useState } from "react";
import './NewExpense.css';
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = ({ onAddNewExpense }) => {
    const [isFormExpanded, setIsFormExpanded] = useState(false);

    const expandFormHandler = () => {
        setIsFormExpanded(!isFormExpanded);
    }

    return (
        <div className="new-expense">
            {
                !isFormExpanded
                    ? <button onClick={expandFormHandler}>Add New Expense</button>
                    : <ExpenseForm onAddNewExpense={onAddNewExpense} onExpand={expandFormHandler}/>
            }

        </div>
    )
}
