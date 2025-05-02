import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NewsContainer = ({data}) => {
  return (
    <View style={styles.body}>
      <View style={styles.imageBody}>
        <Image
          source={{uri: data.urlToImage}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.infoText}>
        <Text style={styles.infoHeadingText}>{data.title}</Text>
        <Text style={styles.authorName}>
          {`Shorts By : ${data.author} published at : ${data.publishedAt}`}
        </Text>
        <Text>{data.description}</Text>
      </View>
    </View>
  );
};

export default NewsContainer;

const styles = StyleSheet.create({
  body: {
    // borderWidth: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  imageBody: {
    // borderWidth: 1,
    width: '35%',
    height: '100%',
    padding: 10,
  },
  infoText: {
    // borderWidth: 1,
    width: '65%',
  },
  infoHeadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 350,
  },
  authorName: {
    // borderWidth: 1,
    // width: '65%',
    // marginRight: '60%',
    textAlign: 'center',
    fontWeight: 300,
  },
});
