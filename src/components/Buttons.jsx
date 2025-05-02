import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Buttons = ({backGroundColor, textColor, placeholder, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.body, backgroundColor: backGroundColor}}
      onPress={() => onPress()}>
      <Text style={{...styles.textStyle, color: textColor}}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  body: {
    borderWidth: 1,
    borderColor: 'lightgray',
    // marginHorizontal: 2,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
});
