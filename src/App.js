import Expense from "./components/Expense/expense";
import NewExpense from "./components/ExpenseForm/NewExpense";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 2, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 3,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 5,
    title: "New Shoes",
    amount: 850,
    date: new Date(2019, 6, 12),
  },
  {
    id: 6,
    title: "Youtube Music Subscription",
    amount: 2,
    date: new Date(2019, 1, 4),
  },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_DATA);

  const getDatafromChild = (dataGotten) => {
    setExpense((prevState) => {
      return [dataGotten, ...prevState];
    });
  };
  return (
    <div className="App">
      <NewExpense onGetData={getDatafromChild} />
      <Expense item={expense} />
    </div>
  );
}

export default App;
