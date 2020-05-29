import React, { useState, useEffect } from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';

import api from '../../services/api';
import config from '../../config/defaults';

import {
  Container,
  /**
   * Bubbles
   */
  BubbleContainer,
  Bubble,
  BubbleEmoji,
  BubbleLabel,
} from './styles';

const {
  keys: { open_emoji },
} = config;

export default function Emotions({ navigation }) {
  const [emotions, setEmotions] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadEmotions() {
    setLoading(true);

    try {
      const { data } = await api.get(
        `categories/smileys-emotion?access_key=${open_emoji}`,
      );

      setEmotions(data);
      setLoading(false);
    } catch (error) {
      console.log(`ERROR - ${error}`);
    }
  }

  function handleNavigation() {
    navigation.replace('Meter');
  }

  useEffect(() => {
    loadEmotions();
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <BubbleContainer>
          {emotions.map(emotion => {
            const randomNumber =
              Math.floor(Math.random() * 50) +
              Dimensions.get('window').width / 6;

            return (
              <Bubble
                style={{
                  height: randomNumber,
                  width: randomNumber,
                  borderRadius: randomNumber / 2,
                }}
                key={emotion.codePoint}
                onPress={handleNavigation}>
                <BubbleEmoji>{emotion.character}</BubbleEmoji>
                <BubbleLabel>{emotion.unicodeName}</BubbleLabel>
              </Bubble>
            );
          })}
        </BubbleContainer>
      )}
    </Container>
  );
}
