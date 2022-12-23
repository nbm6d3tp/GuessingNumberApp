import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';
import {default as Text} from './Text';

const CustomButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 5,
    margin: 5,
    borderRadius: 50,
    backgroundColor: Colors.primary500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
