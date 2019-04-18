import { AppBar, Icon, Theme, Toolbar, Typography } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import React from 'react';
import ReactRainbow from 'react-rainbow-text';

const appIconStyles = (theme: Theme) =>
  createStyles({
    appTitle: { verticalAlign: 'middle' },
    iconsBar: { whiteSpace: 'nowrap', overflow: 'hidden', opacity: 0.7, marginLeft: '-20px' },
    toolbar: { flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }
  });

export const Header: React.ComponentType<{}> = withStyles(appIconStyles)((props: WithStyles<typeof appIconStyles>) => (
  <AppBar position="absolute" color="default">
    <Toolbar classes={{ root: props.classes.toolbar }}>
      <Typography variant="h6" color="inherit">
        <span className={props.classes.appTitle}>Mein Perfekter Tag 🍔</span>
      </Typography>
      <div className={props.classes.iconsBar}>
        🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🥝🍅🥥🥑🍆🥔🥕🌽🌶🥒🥦🍄🥜🌰🍞🥐🥖🥨🥞🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🥙
        🍳🥘🍲🥣🥗🍿🥫🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🍡🥟🥠🥡🍦🍧🍨🍩🍪🎂🍰🥧🍫🍬🍭🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑
        🍒🍓🥝🍅🥥🥑🍆🥔🥕🌽🌶🥒🥦🍄🥜🌰🍞🥐🥖🥨🥞🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🥙 🍳🥘🍲🥣🥗🍿🥫🍱🍘🍙🍚
        🍛🍜🍝🍠🍢🍣🍤🍥🍡🥟🥠🥡🍦🍧🍨🍩🍪🎂🍰🥧🍫🍬🍭🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🥝🍅🥥🥑🍆🥔🥕🌽🌶
        🥒🥦🍄🥜🌰🍞🥐🥖🥨🥞🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🥙 🍳🥘🍲🥣🥗🍿🥫🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🍡🥟🥠
        🥡🍦🍧🍨🍩🍪🎂🍰🥧🍫🍬🍭
      </div>
    </Toolbar>
  </AppBar>
));
