/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';

import { Dimensions, Animated, PanResponder } from 'react-native';

import { icons } from '../../assets';
import { Container, SliderContainer, Slider, Label, Icon } from './styles';

const AnimatedSlider = Animated.createAnimatedComponent(Slider);
const AnimatedLabel = Animated.createAnimatedComponent(Label);
const AnimatedSliderContainer = Animated.createAnimatedComponent(
  SliderContainer,
);

const { width } = Dimensions.get('window');

export default ({ handleSliderMovement }) => {
  const [sliderAnimation, setSliderAnimation] = useState(new Animated.Value(0));

  const shouldSetPanResponder = (event, gestureState) => {
    return gestureState.dx >= 0;
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: shouldSetPanResponder,
    onStartShouldSetPanResponder: shouldSetPanResponder,
    onMoveShouldSetPanResponder: shouldSetPanResponder,
    onPanResponderRelease: (evt, gestureState) => {},
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dx > 0 && gestureState.dx < width - width / 4) {
        sliderAnimation.setValue(gestureState.dx);
        handleSliderMovement(gestureState.dx);
      }
    },
  });

  const translateX = sliderAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: [0, width - width / 4],
    extrapolate: 'clamp',
  });

  return (
    <Container>
      <AnimatedLabel
      // style={{
      //   transform: [
      //     {
      //       translateX,
      //     },
      //   ],
      // }}
      />

      <AnimatedSliderContainer
      // style={{
      //   transform: [
      //     {
      //       translateX,
      //     },
      //   ],
      // }}
      >
        <AnimatedSlider
          {...panResponder.panHandlers}
          style={{
            transform: [
              {
                translateX,
              },
            ],
          }}>
          <Icon source={icons.slider} />
        </AnimatedSlider>
      </AnimatedSliderContainer>
    </Container>
  );
};
