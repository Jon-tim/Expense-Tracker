import "./expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
function Expense(props) {
  const [year, setYear] = useState("2019");
  // This is to set the defaualt year to "2019"
  const knowYear = (para) => {
    setYear(para);
  };
  // Filter output in accordance with the selected year
  const filteredYear = props.item.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter getYear={knowYear} initYear={year} />

        <ExpenseList goGetFilter={filteredYear} />
      </Card>
    </div>
  );
}

export default Expense;
