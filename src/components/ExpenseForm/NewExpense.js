import "./NewExpense.css";
import Form from "./Form";
export default function NewExpense(props) {
  const shipDataFromForm = (dataToBeShipped) => {
    const shippedData = {
      ...dataToBeShipped,
      id: Math.floor(Math.random() * (9 - 1 + 1) + 1),
    };
    // console.log(shippedData);
    props.onGetData(shippedData);
  };

  return (
    <div className="new-expense">
      <Form onAddNewExpense={shipDataFromForm} />
    </div>
  );
}
