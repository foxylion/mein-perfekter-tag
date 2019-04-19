import React from 'react';

import { Grid, Paper, Theme } from '@material-ui/core';
import { createStyles, makeStyles, withStyles, WithStyles } from '@material-ui/styles';
import { StyledComponentProps, StyleRulesCallback, Styles } from '@material-ui/styles/withStyles';

const useStyles = makeStyles((theme: Theme) => ({
  paper: (props: Props) => ({ maxWidth: `${props.maxWidth}px`, margin: '100px auto', padding: theme.spacing.unit * 2 })
}));

export interface Props {
  maxWidth: number;
  children: React.ReactNode;
}

export const PrettyContent = (props: Props) => {
  const classes = useStyles(props);
  return (
    <Paper classes={{ root: classes.paper }}>
      <Grid container={true} spacing={16}>
        {props.children}
      </Grid>
    </Paper>
  );
};
