import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
import { strictEqual } from 'assert';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingrdientAdded(ctrl.type)}
        removed={() => props.ingrdientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      disabled={!props.purchaseable}
      className={classes.OrderButton}
      onClick={props.ordered}>ORDER NOW</button>
  </div>
)

export default buildControls;