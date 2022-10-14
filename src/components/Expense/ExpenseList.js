import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  let expenseContent =
    props.goGetFilter.length > 0 ? (
      props.goGetFilter.map((i) => <ExpenseItem item={i} key={i.id} />)
    ) : (
      <p className="expenses-list__fallback ">Found No Expense.</p>
    );

  return <ul className="expenses-list">{expenseContent}</ul>;
}

export default ExpenseList;
