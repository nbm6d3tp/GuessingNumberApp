import {StyleSheet, TextInput, View, Alert} from 'react-native';
import React, {useState} from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import {default as Button} from '../components/ui/Button';
import Colors from '../constants/colors';

const StartGameScreen = ({setChosenNumber}) => {
  const [enteredText, setEnteredText] = useState('');
  const onChangeTextHandler = changedText => {
    setEnteredText(changedText);
  };
  const resetHandler = () => {
    setEnteredText('');
  };
  const confirmHandler = () => {
    const enteredNumber = parseInt(enteredText, 10);

    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: setEnteredText('')}],
      );
    } else {
      setChosenNumber(enteredNumber);
    }
  };
  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <Card
        instructionText="Enter a Number"
        leftButton={<Button onPress={resetHandler}>Reset</Button>}
        rightButton={<Button onPress={confirmHandler}>Confirm</Button>}>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          value={enteredText}
          onChangeText={onChangeTextHandler}
        />
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    color: Colors.accent500,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    textAlign: 'center',
    width: 50,
    height: 50,
    marginVertical: 15,
  },
});
