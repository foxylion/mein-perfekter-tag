/// <reference types="react-scripts" />
/// <reference types="@material-ui/core" />
/// <reference types="@material-ui/styles" />

declare module 'react-rainbow-text' {
  import * as React from 'react';

  interface Props {
    lightness?: number;
    saturation?: number;
  }

  declare class ReactRainbow extends React.Component<Props> {}
  export default ReactRainbow;
}
