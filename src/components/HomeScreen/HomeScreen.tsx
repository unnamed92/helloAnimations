import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  PanResponder,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>s</Text>
      <AnimatedTextInput placeholder="email" />
      <AnimatedTextInput placeholder="password" />
    </View>
  );
};

export default HomeScreen;
