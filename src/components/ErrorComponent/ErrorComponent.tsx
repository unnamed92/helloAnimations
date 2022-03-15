import {Button} from 'react-native';
import React, {Component} from 'react';
import Crashes from 'appcenter-crashes';

export class ErrorComponent extends Component {
  render() {
    return (
      <Button
        onPress={() => {
          Crashes.generateTestCrash();
          // throw new Error();
        }}
        title="Throw error"></Button>
    );
  }
}

export default ErrorComponent;
