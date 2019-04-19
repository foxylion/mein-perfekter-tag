// tslint:disable:object-literal-sort-keys

import React from 'react';

export const FoodEmojiBackground: React.FunctionComponent<{}> = () => (
  <div
    style={{
      position: 'fixed',
      zIndex: -1,
      left: 0,
      right: -100,
      top: 0,
      bottom: 0,
      overflow: 'hidden',
      opacity: 0.2,
      fontSize: '2em' // Otherwise Chrome on Android won't render the emojis
    }}
  >
    {Array(40)
      .fill(0)
      .map((_, i) => (
        <span key={i}>
          🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🥝🍅🥥🥑🍆🥔🥕🌽🌶🥒🥦🍄🥜🌰🍞🥐🥖🥨🥞🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🥙🍳🥘🍲🥣🥗🍿🥫🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🍡🥟🥠🥡🍦🍧🍨🍩🍪🎂🍰🥧🍫🍬🍭
        </span>
      ))}
  </div>
);
