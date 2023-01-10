import {FlatList, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import {default as Button} from '../components/ui/Button';
import {Ionicons} from '@expo/vector-icons';
import HistoryItem from '../components/game/HistoryItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max + 1 - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({chosenNumber, onGameOver}) => {
  const [printedNumber, setPrintedNumber] = useState(
    generateRandomBetween(1, 99, chosenNumber),
  );
  const [historyList, setHistoryList] = useState([]);
  const min = useRef(1);
  const max = useRef(99);

  const plusButtonPressedHandler = () => {
    let historyItem = {};
    if (chosenNumber > printedNumber) {
      min.current = printedNumber + 1;
      if (min.current >= max.current) {
        onGameOver(historyList.length + 1);
        return;
      }
      setPrintedNumber(
        generateRandomBetween(min.current, max.current, chosenNumber),
      );
      historyItem = {
        id: historyList.length + 1,
        choice: 'Higher than ' + printedNumber,
        isTrueChoice: true,
      };
    } else {
      historyItem = {
        id: historyList.length + 1,
        choice: 'Higher than ' + printedNumber,
        isTrueChoice: false,
      };
    }
    setHistoryList([historyItem, ...historyList]);
  };
  const minusButtonPressedHandler = () => {
    let historyItem = {};
    if (chosenNumber < printedNumber) {
      max.current = printedNumber - 1;
      if (min.current >= max.current) {
        onGameOver(historyList.length + 1);
        return;
      }
      setPrintedNumber(
        generateRandomBetween(min.current, max.current, chosenNumber),
      );
      historyItem = {
        id: historyList.length + 1,
        choice: 'Lower than ' + printedNumber,
        isTrueChoice: true,
      };
    } else {
      historyItem = {
        id: historyList.length + 1,
        choice: 'Lower than ' + printedNumber,
        isTrueChoice: false,
      };
    }
    setHistoryList([historyItem, ...historyList]);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Title style={styles.chosenNumber}>{printedNumber}</Title>
      <Card
        instructionText="Lower or Higher?"
        leftButton={
          <Button onPress={minusButtonPressedHandler}>
            <Ionicons name="md-remove" size={20} color="white" />
          </Button>
        }
        rightButton={
          <Button onPress={plusButtonPressedHandler}>
            <Ionicons name="md-add" size={20} color="white" />
          </Button>
        }
      />
      <View style={styles.listContainer}>
        <FlatList
          data={historyList}
          renderItem={itemData => (
            <HistoryItem
              id={itemData.item.id}
              choiceDetail={itemData.item.choice}
              isTrueChoice={itemData.item.isTrueChoice}
            />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  chosenNumber: {
    color: Colors.accent500,
    borderColor: Colors.accent500,
    width: '75%',
    marginTop: 30,
    fontSize: 30,
  },
  listContainer: {
    marginTop: 10,
    flex: 1,
  },
});
