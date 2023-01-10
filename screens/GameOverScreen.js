import {StyleSheet, View, Image} from 'react-native';
import {default as Text} from '../components/ui/Text';
import Title from '../components/ui/Title';
import React from 'react';
import Colors from '../constants/colors';
import {default as Button} from '../components/ui/Button';

const GameOverScreen = ({nbRounds, chosenNumber, onStartNewGame}) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <Image
        style={styles.image}
        source={require('../assets/images/success.png')}
      />
      <Text style={styles.text}>
        You needed <Text style={styles.number}>{nbRounds}</Text> rounds to guess
        the number <Text style={styles.number}>{chosenNumber}</Text>.
      </Text>
      <View style={{flexDirection: 'row', width: 180}}>
        <Button onPress={onStartNewGame}>Start New Game</Button>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderRadius: 250,
    width: 250,
    height: 250,
    elevation: 4,
    shadowColor: Colors.primary700,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: Colors.primary700,
    marginVertical: 65,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    marginBottom: 10,
  },
  number: {
    color: Colors.primary600,
    fontWeight: 'bold',
  },
});
