import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...transaction, id: Date.now() });
    setTransaction({
      date: '',
      description: '',
      amount: '',
      category: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={transaction.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        value={transaction.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="amount"
        value={transaction.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="category"
        value={transaction.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;

