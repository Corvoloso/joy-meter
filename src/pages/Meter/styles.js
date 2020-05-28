import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

/**
 * Status Container
 */

export const StatusContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: #fff;
`;

export const LabelContainer = styled.View`
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const StatusImg = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Label = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 30px;
`;

export const Status = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 30px;
  color: #9f6bf1;
`;

export const SubLabel = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 14px;
  color: #ccc;
`;

/**
 * Slider Container
 */
export const SliderContainer = styled.View`
  flex: 1;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background: #9f6bf1;
`;

export const SliderBox = styled.View`
  width: 100%;
`;

export const LabelList = styled.View`
  width: 100%;
  margin-top: 12px;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-around;
`;

export const LabelListItem = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: ${props => (props.active ? '16px' : '12px')};
  margin-top: ${props => (props.active ? '38px' : '0px')};
  color: #fff;
`;

export const SliderView = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  flex-flow: row;
  justify-content: center;
  align-items: center;

  width: 95%;
  background: #fff;

  padding: 20px;
  border-radius: 36px;
  margin-bottom: 20px;
`;

export const ButtonLabel = styled.Text`
  color: #9f6bf1;
  font-family: 'Poppins-Medium';
  font-size: 20px;
  font-weight: 400;
`;
