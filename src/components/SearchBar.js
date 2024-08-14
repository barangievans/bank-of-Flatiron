import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm, transactions }) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    if (selectedTransaction) {
      setSearchTerm(selectedTransaction.description);
    }
  }, [selectedTransaction, setSearchTerm]);

  const handleChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selected = transactions.find(transaction => transaction.id === selectedId);
    setSelectedTransaction(selected || null);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search transactions..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedTransaction ? selectedTransaction.id : ''}
        onChange={handleChange}
      >
        <option value="">Select a transaction</option>
        {transactions.map(transaction => (
          <option key={transaction.id} value={transaction.id}>
            {transaction.description} - {transaction.date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
