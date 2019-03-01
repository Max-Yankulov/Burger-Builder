import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      onClick={props.updateIngredientHandler.bind(this, props.type, 'remove')}
      disabled={!props.isDisabled}
      className={classes.Less}
    >
      Less
    </button>
    <button
      onClick={props.updateIngredientHandler.bind(this, props.type, 'add')}
      className={classes.More}
    >
      More
    </button>
  </div>
);

export default buildControl;
