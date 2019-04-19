import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { foodList } from '../../types/FoodList';
import { FullWidthGridItem } from '../grid/FullWidthGridItem';
import { PrettyContent } from '../grid/PrettyContent';

const useStyle = makeStyles({
  cell: {
    borderRight: '1px solid #ddd',
    padding: 2,
    pageBreakInside: 'avoid'
  },
  row: {
    height: 0
  }
});

const DenseRow = (props: { children?: React.ReactNode }) => {
  const classes = useStyle();
  return <TableRow classes={{ root: classes.row }}>{props.children}</TableRow>;
};

const DenseCell = (props: { children?: React.ReactNode }) => {
  const classes = useStyle();
  return <TableCell classes={{ root: classes.cell }}>{props.children}</TableCell>;
};

export const PrintTable: React.FunctionComponent<{}> = () => (
  <PrettyContent maxWidth={600}>
    <FullWidthGridItem>
      <Typography variant="h5">Mein Speiseplan</Typography>
    </FullWidthGridItem>
    <FullWidthGridItem>
      <Table>
        <TableHead>
          <DenseRow>
            <DenseCell>Gericht</DenseCell>
            <DenseCell>Frühstück</DenseCell>
            <DenseCell>Mittagessen</DenseCell>
            <DenseCell>Abendessen</DenseCell>
            <DenseCell>Gesamt</DenseCell>
          </DenseRow>
        </TableHead>
        <TableBody>
          {foodList.map((food, idx) => (
            <DenseRow key={idx}>
              <DenseCell>
                <span style={{ fontWeight: 'bold' }}>{food.info.nicename}</span>
                &nbsp;&nbsp;
                <span style={{ fontStyle: 'italic', color: '#777' }}>{food.info.unit}</span>
              </DenseCell>
              <DenseCell />
              <DenseCell />
              <DenseCell />
              <DenseCell />
            </DenseRow>
          ))}
        </TableBody>
      </Table>
    </FullWidthGridItem>
  </PrettyContent>
);
