import "./expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "../ExpenseForm/NewExpense";
function Expense(props) {
  const expend = props.item.map((i) => (
    <Card>
      <ExpenseItem item={i} key={i.id} />
    </Card>
  ));
  return (
    <Card className="expenses">
      <NewExpense />
      {expend}
    </Card>
  );
}

export default Expense;
