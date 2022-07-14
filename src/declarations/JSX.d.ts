// define custom HTML Tag in JSX to avoid syntax check error
// move to package ?
declare namespace JSX {
    interface IntrinsicElements {
      "edk-storybook": any;
      "edk-button": any;
      "edk-radiobutton": any;
    }
  }