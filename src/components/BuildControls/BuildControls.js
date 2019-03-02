import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)} $</strong>
    </p>
    {Object.keys(props.ingredients).map((ing) => {
      const ingLabel = `${ing[0].toUpperCase()}${ing.slice(1)}`;
      return (
        <BuildControl
          updateIngredientHandler={props.updateIngredientHandler}
          label={ingLabel}
          type={ing}
          key={ingLabel}
          isDisabled={props.ingredients[ing]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchased}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
