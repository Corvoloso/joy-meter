import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

const { height } = Dimensions.get('window');

export const Container = styled(Animated.View)`
  position: absolute;
  align-items: center;
  top: -60px;
`;

/**
 * Sliders
 */

export const SliderContainer = styled.View`
  background: #9f6bf1;
  border-color: #9f6bf1;
  border-width: ${height / 32}px;
  border-top-left-radius: ${height / 2}px;
  border-top-right-radius: ${height / 2}px;
`;

export const Slider = styled.View`
  background: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  tint-color: #ccc;
  height: 70%;
  width: 70%;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-family: 'Roboto';
  color: #9f6bf1;
`;
