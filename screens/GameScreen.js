import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import {default as Button} from '../components/ui/Button';
import {Ionicons} from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({choosedNumber}) => {
  const [printedNumber, setPrintedNumber] = useState(
    generateRandomBetween(1, 100, choosedNumber),
  );
  let min = 1;
  let max = 100;

  const plusButtonPressedHandler = () => {
    min = printedNumber;
    setPrintedNumber(generateRandomBetween(min, max, choosedNumber));
  };
  const minusButtonPressedHandler = () => {
    max = printedNumber;
    setPrintedNumber(generateRandomBetween(min, max, choosedNumber));
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Title style={styles.choosedNumber}>{printedNumber}</Title>
      <Card
        instructionText="Enter a Number"
        leftButton={
          <Button onPress={plusButtonPressedHandler}>
            <Ionicons name="md-remove" size={20} color="white" />
          </Button>
        }
        rightButton={
          <Button onPress={minusButtonPressedHandler}>
            <Ionicons name="md-add" size={20} color="white" />
          </Button>
        }
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  choosedNumber: {
    color: Colors.accent500,
    borderColor: Colors.accent500,
    width: '75%',
    marginTop: 30,
    fontSize: 30,
  },
});
