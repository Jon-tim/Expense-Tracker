import "./expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expense(props) {
  const [year, setYear] = useState("2020");

  const expend = props.item.map((i) => <ExpenseItem item={i} key={i.id} />);

  const knowYear = (para) => {
    setYear(para);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter getYear={knowYear} initYear={year} />
        {expend}
      </Card>
    </div>
  );
}

export default Expense;
