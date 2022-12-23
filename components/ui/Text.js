import {Text} from 'react-native';
import React from 'react';

const CustomText = ({children, style}) => {
  const getStyleText = () => {
    if (style?.fontWeight === 'bold') {
      return {...style, fontFamily: 'openSansBold', fontWeight: ''};
    } else {
      return {...style, fontFamily: 'openSans'};
    }
  };
  return <Text style={getStyleText()}>{children}</Text>;
};

export default CustomText;
