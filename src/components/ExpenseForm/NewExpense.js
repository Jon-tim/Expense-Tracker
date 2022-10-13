import "./NewExpense.css";
import Form from "./Form";

export default function NewExpense(props) {
  const shipDataFromForm = (dataToBeShipped) => {
    const shippedData = {
      ...dataToBeShipped,
      id: Math.random(),
    };
    props.onGetData(shippedData);
  };

  return (
    <div className="new-expense">
      <Form onAddNewExpense={shipDataFromForm} />
    </div>
  );
}
