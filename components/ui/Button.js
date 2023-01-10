import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';
import {default as Text} from './Text';

const CustomButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{color: 'white'}}
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
    borderRadius: 50,
    backgroundColor: Colors.primary500,
    overflow: 'hidden',
    flex: 1,
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
