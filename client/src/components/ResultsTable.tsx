import React from 'react';

import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@material-ui/core';

import { Food, foodList } from '../types/FoodList';
import { FoodMetrics } from '../types/FoodMetrics';

export interface ResultProp {
  food: Food;
  units: number;
}

export interface Props {
  results: ResultProp[];
}

const reduce = (results: ResultProp[], field: keyof FoodMetrics) => {
  const reducer = (acc: number, cur: ResultProp) =>
    acc + ((cur.units * cur.food.info.gPerUnit) / 100) * cur.food.metrics[field];
  const result = results.reduce(reducer, 0);
  return result.toFixed(2);
};

const NoBreakCell = (props: { children: React.ReactNode }) => (
  <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>
    {props.children}
  </TableCell>
);

export const ResultsTable: React.FunctionComponent<Props> = props => (
  <>
    <Typography variant="display1">Ergebnis</Typography>
    <div style={{ overflow: 'auto' }}>
      <Table padding="dense">
        <TableHead>
          <TableRow>
            <TableCell>Nahrungsmittel</TableCell>
            <TableCell>Menge</TableCell>
            <TableCell>Kalorien</TableCell>
            <TableCell>Salz</TableCell>
            <TableCell>Zucker</TableCell>
            <TableCell>Wasser</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.results.map(({ food, units }) => {
            const weight = units * food.info.gPerUnit;
            const factor = weight / 100;
            const pretty = (value: number) => (factor * value).toFixed(2);
            return (
              <TableRow>
                <TableCell>{food.info.nicename}</TableCell>
                <NoBreakCell>{weight} g</NoBreakCell>
                <NoBreakCell>{pretty(food.metrics.kilokalorien)} kcal</NoBreakCell>
                <NoBreakCell>{pretty(food.metrics.salz)} g</NoBreakCell>
                <NoBreakCell>{pretty(food.metrics.zucker)} g</NoBreakCell>
                <NoBreakCell>{pretty(food.metrics.wasser)} ml</NoBreakCell>
              </TableRow>
            );
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell>Summe</TableCell>
            <TableCell />
            <NoBreakCell>{reduce(props.results, 'kilokalorien')} kcal</NoBreakCell>
            <NoBreakCell>{reduce(props.results, 'salz')} g</NoBreakCell>
            <NoBreakCell>{reduce(props.results, 'zucker')} g</NoBreakCell>
            <NoBreakCell>{reduce(props.results, 'wasser')} ml</NoBreakCell>
          </TableRow>

          <TableRow>
            <TableCell>Tagesbedarf</TableCell>
            <TableCell />
            <NoBreakCell>-</NoBreakCell>
            <NoBreakCell>?</NoBreakCell>
            <NoBreakCell>?</NoBreakCell>
            <NoBreakCell>2650 ml</NoBreakCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </>
);
