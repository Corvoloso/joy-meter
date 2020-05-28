import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.ScrollView.attrs(({}) => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
}))`
  flex: 1;
  background: #9f6bf1;
`;

/**
 * Bubbles List Styles
 */

export const BubbleContainer = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const Bubble = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #af71fb;
  margin: 4px;
`;

export const BubbleEmoji = styled.Text`
  font-size: 16px;
`;

export const BubbleLabel = styled.Text.attrs(({}) => ({
  numberOfLines: 2,
}))`
  color: #fff;
  font-family: 'Poppins-Medium';
  font-size: 12px;
  text-transform: capitalize;
  text-align: center;
  padding-horizontal: 8px;
`;
