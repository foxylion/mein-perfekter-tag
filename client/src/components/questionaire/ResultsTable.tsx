import React from 'react';

import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@material-ui/core';

import { Food, foodList } from '../../types/FoodList';
import { FoodMetrics, formatValue, getNiceName, getRecommendedDailyAmount, relevantMetrics } from '../../types/FoodMetrics';

export interface ResultProp {
  food: Food;
  units: number;
}

export interface Props {
  results: ResultProp[];
  showInfo: (metricName: keyof FoodMetrics) => void;
}

const reduce = (results: ResultProp[], field: keyof FoodMetrics) => {
  const reducer = (acc: number, cur: ResultProp) => acc + ((cur.units * cur.food.info.gPerUnit) / 100) * cur.food.metrics[field];
  return results.reduce(reducer, 0);
};

const NoBreakCell = (props: { children: React.ReactNode }) => (
  <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>
    {props.children}
  </TableCell>
);

export const ResultsTable: React.FunctionComponent<Props> = props => {
  return (
    <>
      <Typography variant="display1">Ergebnis</Typography>
      <div style={{ overflow: 'auto' }}>
        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell>Inhaltsstoff</TableCell>
              <NoBreakCell>Tagesbedarf</NoBreakCell>
              <NoBreakCell>Tatsächlich</NoBreakCell>
              {props.results.map(result => (
                <NoBreakCell key={result.food.info.nicename}>
                  {result.food.info.nicename}
                  <br />
                  <i>{result.units * result.food.info.gPerUnit} g</i>
                </NoBreakCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {relevantMetrics.map(metricName => {
              return (
                <TableRow key={metricName}>
                  <TableCell onClick={() => props.showInfo(metricName)} style={{ cursor: 'pointer' }}>
                    {getNiceName(metricName)}
                  </TableCell>
                  <NoBreakCell>{!isNaN(getRecommendedDailyAmount(metricName)) && formatValue(getRecommendedDailyAmount(metricName), metricName)}</NoBreakCell>
                  <NoBreakCell> {formatValue(reduce(props.results, metricName), metricName)}</NoBreakCell>
                  {props.results.map(({ food, units }) => {
                    const weight = units * food.info.gPerUnit;
                    const value = (weight / 100) * food.metrics[metricName];
                    return <NoBreakCell key={food.info.nicename}>{formatValue(value, metricName)}</NoBreakCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
