import {FlatList, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import {default as Button} from '../components/ui/Button';
import {Ionicons} from '@expo/vector-icons';
import HistoryItem from '../components/game/HistoryItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({choosedNumber, setIsGameOver}) => {
  const [printedNumber, setPrintedNumber] = useState(
    generateRandomBetween(1, 100, choosedNumber),
  );
  const [historyList, setHistoryList] = useState([]);
  const min = useRef(1);
  const max = useRef(100);

  const plusButtonPressedHandler = () => {
    if (min.current === choosedNumber || max.current === choosedNumber) {
      setIsGameOver(true);
      return;
    }
    if (choosedNumber > printedNumber) {
      min.current = printedNumber + 1;
      setPrintedNumber(
        generateRandomBetween(min.current, max.current, choosedNumber),
      );
      setHistoryList([
        {
          id: historyList.length + 1,
          choice: 'Higher than ' + printedNumber,
          isTrueChoice: true,
        },
        ...historyList,
      ]);
    } else {
      setHistoryList([
        {
          id: historyList.length + 1,
          choice: 'Higher than ' + printedNumber,
          isTrueChoice: false,
        },
        ...historyList,
      ]);
    }
  };
  const minusButtonPressedHandler = () => {
    if (min.current === choosedNumber || max.current === choosedNumber) {
      setIsGameOver(true);
      return;
    }
    if (choosedNumber < printedNumber) {
      max.current = printedNumber - 1;
      setPrintedNumber(
        generateRandomBetween(min.current, max.current, choosedNumber),
      );
      setHistoryList([
        {
          id: historyList.length + 1,
          choice: 'Lower than ' + printedNumber,
          isTrueChoice: true,
        },
        ...historyList,
      ]);
    } else {
      setHistoryList([
        {
          id: historyList.length + 1,
          choice: 'Lower than ' + printedNumber,
          isTrueChoice: false,
        },
        ...historyList,
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Title style={styles.choosedNumber}>{printedNumber}</Title>
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
  choosedNumber: {
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
