import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, amount } = expense || {};
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">{amount}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="edit btn">
          <MdEdit onClick={() => handleEdit(id)} />
        </button>
        <button className="clear-btn" aria-label="delete btn">
          <MdDelete onClick={() => handleDelete(id)} />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
