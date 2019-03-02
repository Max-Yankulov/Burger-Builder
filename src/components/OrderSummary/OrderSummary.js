import React from 'react';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ing) => (
    <li key={ing}>
      <span style={{ textTransform: 'capitalize' }}>{ing}</span>:{' '}
      {props.ingredients[ing]}
    </li>
  ));

  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
};

export default orderSummary;
