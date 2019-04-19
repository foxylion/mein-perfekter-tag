import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import { foodList } from '../../types/FoodList';
import { FullWidthGridItem } from '../grid/FullWidthGridItem';
import { PrettyContent } from '../grid/PrettyContent';
import { FoodInput } from './FoodInput';
import { ResultProp, ResultsTable } from './ResultsTable';

interface UnitsMap {
  [key: number]: number | undefined;
}

export const QuestionairePage: React.ComponentType<{}> = () => {
  const [units, setUnits] = useState<UnitsMap>({});
  const [focusedIdx, setFocusedIdx] = useState<number>();
  const [showResults, setShowResults] = useState<boolean>(false);
  const results = foodList
    .map((food, idx) => ({ food, units: units[idx] }))
    .filter((result): result is ResultProp => result.units !== undefined && result.units !== 0);

  return (
    <>
      {!showResults && (
        <PrettyContent maxWidth={400}>
          {foodList.map((food, idx) => {
            return (
              <FullWidthGridItem key={idx}>
                <FoodInput
                  food={food}
                  focus={idx === focusedIdx}
                  onChange={newValue => setUnits({ ...units, [idx]: newValue })}
                  onFocus={() => setFocusedIdx(idx)}
                  onEnterKey={() => setFocusedIdx(idx + 1)}
                  value={units[idx]}
                />
              </FullWidthGridItem>
            );
          })}
          <FullWidthGridItem>
            <Button variant="contained" color="secondary" onClick={() => setShowResults(true)}>
              Auswertung
            </Button>
          </FullWidthGridItem>
        </PrettyContent>
      )}
      {showResults && (
        <PrettyContent maxWidth={1200}>
          <FullWidthGridItem>
            <ResultsTable results={results} />
          </FullWidthGridItem>
          <FullWidthGridItem>
            <Button variant="contained" color="primary" onClick={() => setShowResults(false)}>
              Zurück
            </Button>
          </FullWidthGridItem>
        </PrettyContent>
      )}
    </>
  );
};
