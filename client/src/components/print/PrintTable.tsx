import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import { foodList } from '../../types/FoodList';
import { FullWidthGridItem } from '../grid/FullWidthGridItem';
import { PrettyContent } from '../grid/PrettyContent';

export const PrintTable: React.FunctionComponent<{}> = () => (
  <PrettyContent maxWidth={1000}>
    <FullWidthGridItem>
      <Typography variant="display1">Aufgabenblatt</Typography>
      <Typography variant="caption">Copy &amp; Paste to Word</Typography>
    </FullWidthGridItem>
    <FullWidthGridItem>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Gericht</TableCell>
            <TableCell>Frühstück</TableCell>
            <TableCell>Mittagessen</TableCell>
            <TableCell>Abendessen</TableCell>
            <TableCell>Gesamt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodList.map((food, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <span style={{ fontWeight: 'bold' }}>{food.info.nicename}</span>
                &nbsp;&nbsp;
                <span style={{ fontStyle: 'italic', color: '#777' }}>{food.info.unit}</span>
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </FullWidthGridItem>
  </PrettyContent>
);
