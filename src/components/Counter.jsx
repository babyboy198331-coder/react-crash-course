import React, { useState } from 'react';

function Counter() {
  const [cart, setCart] = useState({
    item: 'apple',
    quantity: 0,
  });

  function addApple() {
    // 1. use a callback function to get the previous value
    // 2. spread out all the properties of the previous value
    // 3.only change the property that you need to change
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity + 1,
    }));
  }

  function removeApple() {
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity - 1 
    }));
  }

  return (
    <div>
      <button onClick={removeApple}>-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApple}>+</button>
    </div>
  );
}

export default Counter;