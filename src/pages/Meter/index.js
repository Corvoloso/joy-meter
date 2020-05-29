import React, { useState, useEffect } from 'react';

import Slider from '../../components/Slider';

import {
  Container,
  // Status Container
  StatusContainer,
  LabelContainer,
  StatusImg,
  Label,
  Status,
  SubLabel,
  // Label Containers
  LabelList,
  LabelListItem,
  // Slider Container
  SliderContainer,
  SliderBox,
  Button,
  ButtonLabel,
} from './styles';
import { Dimensions } from 'react-native';

export default function Meter({ navigation }) {
  const [status, setStatus] = useState('Slightly');
  const [statusActive, setStatusActive] = useState(0);

  function handleNavigation() {
    navigation.push('Emotions');
  }

  function handleSliderMovement(value) {
    const { width } = Dimensions.get('window');
  }

  return (
    <Container>
      <StatusContainer>
        <LabelContainer>
          <StatusImg
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Emoji_u1f44c.svg/1200px-Emoji_u1f44c.svg.png',
            }}
          />
          <Label>I'm feeling</Label>
          <Status>{status} Okay</Status>
        </LabelContainer>

        <SubLabel>Choose the intensity of your feeling</SubLabel>
      </StatusContainer>

      <SliderContainer>
        <SliderBox>
          <Slider handleSliderMovement={handleSliderMovement} />

          <LabelList>
            <LabelListItem active={statusActive === 0}>Slightly</LabelListItem>
            <LabelListItem active={statusActive === 1}>A little</LabelListItem>
            <LabelListItem active={statusActive === 2}>Fairly</LabelListItem>
            <LabelListItem active={statusActive === 3}>Very</LabelListItem>
            <LabelListItem active={statusActive === 4}>Extremely</LabelListItem>
          </LabelList>
        </SliderBox>

        <Button onPress={handleNavigation}>
          <ButtonLabel>NEXT</ButtonLabel>
        </Button>
      </SliderContainer>
    </Container>
  );
}
