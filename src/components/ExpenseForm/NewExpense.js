import "./NewExpense.css";
import Form from "./Form";
import { useState } from "react";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const shipDataFromForm = (dataToBeShipped) => {
    const shippedData = {
      ...dataToBeShipped,
      id: Math.random(),
    };
    props.onGetData(shippedData);
  };

  const showFormHandler = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  const hideFormHandler = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button type="button" onClick={showFormHandler}>
          Add New Expense
        </button>
      ) : (
        <Form onAddNewExpense={shipDataFromForm} hideForm={hideFormHandler} />
      )}
    </div>
  );
}
