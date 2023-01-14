import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <div>{props.date.toLocaleString("en-us", { month: "long" })}</div>
        <div>{props.date.toLocaleString("en-us", { day: "2-digit" })}</div>
        <div>{props.date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
