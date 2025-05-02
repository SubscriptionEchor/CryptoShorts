import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import InfoTab from '../components/InfoTab';
import NewsContainer from '../components/NewsContainer';
import axios from 'axios';
import {ApiContext} from '../context/context';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('screen');
const HomeScreen = () => {
  const {news, setNews} = useContext(ApiContext);
  return (
    <View style={styles.body}>
      <View style={styles.Container}>
        <ScrollView
          style={{height: '90vh', width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.infoTab}>
            <InfoTab
              text={
                'For the best experence use Inshorts app on your smartphone'
              }
            />
          </View>

          {news?.map(element => {
            // console.log(element.author);
            return (
              <View style={styles.newsContainerBody}>
                <NewsContainer data={element} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  Container: {
    // borderWidth: 1,
    width: '65%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'center',
  },

  infoTab: {
    marginVertical: 20,
    // marginBottom: 20,
    height: deviceHeight * 0.08,
  },
  newsContainerBody: {
    // borderWidth: 1,
    marginVertical: 20,
    width: '90%',
    height: deviceHeight * 0.35,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 5,
  },
});
