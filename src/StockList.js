import React, { useContext } from 'react';
import StockContext from './StockContext';

function StockList() {
  const { stocks, fetchStockData } = useContext(StockContext);

  return (
    <ul>
      {stocks.length > 0 ? (
        stocks.map((stock) => (
          <li key={stock.symbol}>
          </li>
        ))
      ) : (
        <p>No stocks added yet.</p>
      )}
    </ul>
  );
}

export default StockList;
