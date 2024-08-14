// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm, transactions }) => {
  const [selectedTransaction, setSelectedTransaction] = useState('');

  useEffect(() => {
    // Update search term when a transaction is selected
    if (selectedTransaction) {
      setSearchTerm(selectedTransaction.description);
    }
  }, [selectedTransaction, setSearchTerm]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search transactions..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedTransaction.id || ''}
        onChange={(e) => {
          const selected = transactions.find(t => t.id === parseInt(e.target.value));
          setSelectedTransaction(selected || {});
        }}
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
