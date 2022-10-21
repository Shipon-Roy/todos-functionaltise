import React, { useRef } from "react";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  handleAllClear,
  handleDelete,
  handleEdit,
  searchInput,
  searchHandler,
}) => {
  const inputEl = useRef("");
  const getSearchInput = () => {
    searchHandler(inputEl.current.value);
  };
  return (
    <>
      <ul className="list">
        <input
          ref={inputEl}
          type="text"
          className="form-control mb-5"
          placeholder="Search..."
          value={searchInput}
          onChange={getSearchInput}
        />
        {expenses.length > 0
          ? expenses.map((expense) => (
              <ExpenseItem
                expense={expense}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))
          : "No Expenses Available"}
      </ul>
      {expenses.length > 0 && (
        <button onClick={handleAllClear} className="btn">
          Clear Epxpenes <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
