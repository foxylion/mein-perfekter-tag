import React from 'react';

import { AppBar, Theme, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  burger: { fontSize: '1.3em', cursor: 'pointer' },
  toolbar: { backgroundColor: '#000', color: '#fff', justifyContent: 'center' }
}));

export interface Props {
  onHiddenClick: () => void;
}

export const Header: React.ComponentType<Props> = (props: Props) => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="default">
      <Toolbar classes={{ root: classes.toolbar }}>
        <Typography variant="h5" color="inherit">
          Mein Perfekter Tag&nbsp;&nbsp;
          <span className={classes.burger} onClick={props.onHiddenClick}>
            🍔
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
