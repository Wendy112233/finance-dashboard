import React, { useState, useContext } from 'react';
import StockContext from './StockContext';

function StockForm() {
  const { setStocks } = useContext(StockContext);
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setStocks((prevStocks) => [...prevStocks, { symbol, quantity, purchasePrice }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <button type="submit">Add Stock</button>
    </form>
  );
}

export default StockForm;
