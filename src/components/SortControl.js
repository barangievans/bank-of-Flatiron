import React from 'react';

function SortControl({ setSortBy, setSortOrder }) {
  return (
    <div>
      <label>
        Sort By:
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Date</option>
          <option value="description">Description</option>
          <option value="amount">Amount</option>
          <option value="category">Category</option>
        </select>
      </label>
      <label>
        Order:
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

export default SortControl;
