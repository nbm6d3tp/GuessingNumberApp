import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../ui/Text';
import Colors from '../../constants/colors';

const HistoryItem = ({id, choiceDetail, isTrueChoice}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isTrueChoice ? Colors.accent700 : Colors.primary500,
      }}>
      <Text style={styles.text}>#{id}</Text>
      <Text style={styles.text}>"{choiceDetail}"</Text>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    borderWidth: 1,
    alignSelf: 'center',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {color: 'white'},
});
