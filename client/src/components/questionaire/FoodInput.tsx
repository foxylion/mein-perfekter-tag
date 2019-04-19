import React, { useEffect, useRef, useState } from 'react';

import { TextField } from '@material-ui/core';
import { Food } from '../../types/FoodList';

export interface Props {
  food: Food;
  value: number | undefined;
  focus: boolean;
  onChange: (value: number) => void;
  onFocus: () => void;
  onEnterKey: () => void;
}

export const FoodInput: React.FunctionComponent<Props> = props => {
  const textFieldRef = useRef<HTMLElement>();

  useEffect(() => {
    if (props.focus && textFieldRef.current !== undefined) {
      textFieldRef.current.focus();
    }
  }, [props.focus]);

  return (
    <TextField
      label={props.food.info.nicename}
      helperText={props.food.info.unit}
      type="number"
      fullWidth={true}
      value={props.value ? props.value : ''}
      onChange={event => props.onChange(parseFloat(event.target.value))}
      onFocus={props.onFocus}
      onKeyDown={event => event.key === 'Enter' && props.onEnterKey()}
      inputRef={textFieldRef}
    />
  );
};
