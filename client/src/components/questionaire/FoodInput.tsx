import React from 'react';

import { TextField } from '@material-ui/core';
import { Food } from '../../types/FoodList';

export interface Props {
  food: Food;
  value?: number;
  onChange: (food: Food, value: number) => void;
}

export const FoodInput: React.FunctionComponent<Props> = props => {
  return (
    <TextField
      label={props.food.info.nicename}
      helperText={props.food.info.unit}
      value={props.value}
      onChange={event => props.onChange(props.food, parseFloat(event.target.value))}
      type="number"
      fullWidth={true}
    />
  );
};
