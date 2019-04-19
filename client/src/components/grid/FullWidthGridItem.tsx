import React from 'react';

import { Grid } from '@material-ui/core';

export const FullWidthGridItem = (props: { children: React.ReactNode }) => (
  <Grid item xs={12} sm={12}>
    {props.children}
  </Grid>
);
