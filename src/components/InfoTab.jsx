import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoTab = ({text}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoTab;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f44336',
    height: '100%',
    width: '100%',
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 2, height: 4}, // Shadow offset (x, y)
    shadowOpacity: 0.2, // Shadow opacity (0 to 1)
    shadowRadius: 4, // Shadow radius (optional)
    // marginVertical: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: '3%',
  },
});
