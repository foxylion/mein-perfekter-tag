import React, { useState } from 'react';

import { Button, Grid, Paper, Theme } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';

import { foodList } from '../types/FoodList';
import { FoodInput } from './FoodInput';
import { ResultProp, ResultsTable } from './ResultsTable';

interface UnitsMap {
  [key: number]: number | undefined;
}

const FullWidthGridItem = (props: { children: React.ReactNode }) => (
  <Grid item xs={12} sm={12}>
    {props.children}
  </Grid>
);

const contentStyles = (theme: Theme) =>
  createStyles({
    paper: { maxWidth: '600px', margin: '100px auto', padding: theme.spacing.unit * 2 }
  });

export const Content: React.ComponentType<{}> = withStyles(contentStyles)((props: WithStyles<typeof contentStyles>) => {
  const [units, setUnits] = useState<UnitsMap>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const results = foodList
    .map((food, idx) => ({ food, units: units[idx] }))
    .filter((result): result is ResultProp => result.units !== undefined && result.units !== 0);

  return (
    <Paper classes={{ root: props.classes.paper }}>
      <Grid container={true} spacing={8}>
        {!showResults && (
          <>
            {foodList.map((food, idx) => {
              return (
                <FullWidthGridItem key={idx}>
                  <FoodInput
                    food={food}
                    onChange={(_, newValue) => setUnits({ ...units, [idx]: newValue })}
                    value={units[idx]}
                  />
                </FullWidthGridItem>
              );
            })}
            <FullWidthGridItem>
              <Button variant="contained" color="primary" onClick={() => setShowResults(true)}>
                Auswertung
              </Button>
            </FullWidthGridItem>
          </>
        )}
        {showResults && (
          <>
            <FullWidthGridItem>
              <ResultsTable results={results} />
            </FullWidthGridItem>
            <FullWidthGridItem>
              <Button variant="contained" color="primary" onClick={() => setShowResults(false)}>
                Zurück
              </Button>
            </FullWidthGridItem>
          </>
        )}
      </Grid>
    </Paper>
  );
});
