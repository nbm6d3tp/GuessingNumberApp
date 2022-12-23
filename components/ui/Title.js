import {StyleSheet} from 'react-native';
import React from 'react';
import {default as Text} from './Text';

const Title = ({children, style}) => {
  return <Text style={{...styles.title, ...style}}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    padding: 10,
    paddingVertical: 15,
    marginTop: 60,
    marginHorizontal: 10,
    textAlign: 'center',
    width: '90%',
  },
});
