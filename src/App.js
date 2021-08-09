import {Expenses} from "./components/Expenses/Expenses";
import {NewExpense} from "./components/NewExpense/NewExpense";
import {useState} from "react";

const testExpenses = [
    {id: 'e1', date: new Date(2021, 2, 28), title: 'Car Insurance', amount: '294.6'},
    {id: 'e2', date: new Date(2021, 5, 28), title: 'Dining Out', amount: '100.6'},
    {id: 'e3', date: new Date(2021, 5, 28), title: 'Groceries shopping', amount: '300.6'},
    {id: 'e4', date: new Date(2021, 1, 28), title: 'New TV', amount: '500.0'},
    {id: 'e5', date: new Date(2020, 2, 28), title: 'New TV', amount: '500.0'},
    {id: 'e6', date: new Date(2020, 0, 28), title: 'New TV', amount: '500.0'},
]

export const  App = () => {
    const [expenses, setExpenses] = useState(testExpenses);


    const addNewExpenseHandler = (expense) => {
        setExpenses(state => state.concat([expense]))
    }

    return (
        <div>
            <NewExpense onAddNewExpense={addNewExpenseHandler}/>
            <Expenses expenses={expenses}  />
        </div>
    );
}


