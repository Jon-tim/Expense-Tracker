import "./expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expense(props) {
  const [year, setYear] = useState("2020");

  const knowYear = (para) => {
    setYear(para);
  };
  
  const filteredYear = props.item.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          getYear={knowYear}
          initYear={year}
          // filter={filterYear}
        />

        {filteredYear.map((i) => (
          <ExpenseItem item={i} key={i.id} />
        ))}
      </Card>
    </div>
  );
}

export default Expense;
