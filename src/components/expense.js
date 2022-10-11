import "./expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  const expend = props.item.map((i) => <ExpenseItem item={i} key={i.id} />);
  return <div className="expenses">{expend}</div>;
}

export default Expense;
