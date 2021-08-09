import React, { useState } from "react";
import './ExpenseForm.css';

export const ExpenseForm = ({ onAddNewExpense, onExpand }) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: "0.01",
        date: '',
    })

    const userInputChangeHandler = (e) => {
        setUserInput(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const updatedUserInputData = {
            ...userInput,
            id: Math.random().toString(),
            date: new Date(userInput.date),
        }

        onAddNewExpense(updatedUserInputData);

        setUserInput({
            title: '',
            amount: "0.01",
            date: '',
        });
        onExpand();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        onChange={userInputChangeHandler}
                        value={userInput.title}
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        onChange={userInputChangeHandler}
                        value={userInput.amount}
                        type="number"
                        min="0.01"
                        step="0.01"
                        name="amount"
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        onChange={userInputChangeHandler}
                        value={userInput.date}
                        type="date"
                        min="2019-01-01"
                        max="2025-12-31"
                        name="date"
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={onExpand} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>

)
}
