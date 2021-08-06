import {ExpenseItem} from "./components/ExpenseItem";
import {Expenses} from "./components/Expenses";

function App() {
    const expenses = [
        {id: 'e1', date: new Date(2021, 2, 28), title: 'Car Insurance', amount: '294.6'},
        {id: 'e2', date: new Date(2021, 2, 28), title: 'Dining Out', amount: '100.6'},
        {id: 'e3', date: new Date(2021, 2, 28), title: 'Groceries shopping', amount: '300.6'},
        {id: 'e4', date: new Date(2021, 2, 28), title: 'New TV', amount: '500.0'},
    ]
  return (
    <div>
      <h2>Let's get started!</h2>
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

