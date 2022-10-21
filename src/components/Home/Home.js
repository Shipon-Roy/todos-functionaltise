import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import Alert from "./Alert";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

// const initialExpense = [
//   { id: v4(), charge: "rent", amount: 1600 },
//   { id: v4(), charge: "car payment", amount: 400 },
//   { id: v4(), charge: "credit card bill", amount: 1200 },
// ];
const initialExpense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

const Home = () => {
  const [expenses, setExpenses] = useState(initialExpense);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "Item Editi successfully" });
      } else {
        const addItem = { id: v4(), charge, amount };
        setExpenses([...expenses, addItem]);
        handleAlert({ type: "success", text: "Item Added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`,
      });
    }
  };

  const handleAllClear = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  };

  const handleDelete = (id) => {
    const tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const searchHandler = (searchInt) => {
    setSearchInput(searchInt);
    if (searchInput !== "") {
      const searchExpense = expenses.filter((expense) => {
        return Object.values(expense)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(searchExpense)
      setSearchResults(searchExpense);
    } else {
      setSearchResults(expenses);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          {alert.show && <Alert type={alert.type} text={alert.text} />}
          <div className="App">
            <Alert />
            <ExpenseForm
              charge={charge}
              amount={amount}
              handleCharge={handleCharge}
              handleAmount={handleAmount}
              handleSubmit={handleSubmit}
              edit={edit}
            />
            <ExpenseList
              expenses={searchInput.length < 1 ? expenses : searchResults}
              handleAllClear={handleAllClear}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              searchInput={searchInput}
              searchHandler={searchHandler}
            />
          </div>
        </div>
        <div className="col-md-3">
          <h5 className="mt-5">
            Total spasing:{" "}
            <span className="total">
              ${" "}
              {expenses.reduce((acc, curr) => {
                return (acc += parseInt(curr.amount));
              }, 0)}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
