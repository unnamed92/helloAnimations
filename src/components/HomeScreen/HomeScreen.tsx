import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  PanResponder,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Crashes from 'appcenter-crashes';

import ErrorComponent from '../ErrorComponent';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const HomeScreen = () => {
  const didCrash = async () => {
    const result = await Crashes.hasCrashedInLastSession();
    console.log('result', result);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ErrorComponent />
      <Button onPress={async () => await didCrash()} title="Log if was error" />
      <Text>s</Text>
      <AnimatedTextInput placeholder="email" />
      <AnimatedTextInput placeholder="password" />
    </View>
  );
};

export default HomeScreen;
