import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';
import {default as Text} from './Text';

const Card = ({children, instructionText, leftButton, rightButton}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}> {instructionText}</Text>
      {children}
      <View style={styles.buttonsContainer}>
        {leftButton}
        {rightButton}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 30,
    width: '95%',
  },
  instructionText: {
    fontSize: 25,
    color: Colors.accent500,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
