import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Buttons from '../components/Buttons';
const BACKGROUND_COLOR_BLUE = '#4683F9';
const BACKGROUND_COLOR_WHITE = '#FFFF';

const InitialScreen = ({navigation}) => {
  const [languageSelected, setLanguageSeleted] = useState(true);
  const languageChanged = () => {
    setLanguageSeleted(!languageSelected);
  };

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={BACKGROUND_COLOR_WHITE} />
      <View style={styles.TopIcons}>
        <Text
          style={
            languageSelected
              ? styles.iconText
              : {...styles.iconText, opacity: 0.5}
          }>
          A
        </Text>
        <Text
          style={
            languageSelected
              ? {...styles.iconText, opacity: 0.5}
              : styles.iconText
          }>
          अ
        </Text>
      </View>
      <View style={styles.languageTextContainer}>
        <Text style={styles.languageText}>Choose your Language</Text>
        <Text style={styles.languageText}>अपनी भाषा चुनें</Text>
      </View>
      <View style={styles.LanguageButtonsContainer}>
        <Buttons
          backGroundColor={
            languageSelected ? BACKGROUND_COLOR_BLUE : BACKGROUND_COLOR_WHITE
          }
          textColor={
            languageSelected ? BACKGROUND_COLOR_WHITE : BACKGROUND_COLOR_BLUE
          }
          placeholder={'English'}
          onPress={languageChanged}
        />
        <Buttons
          backGroundColor={
            languageSelected ? BACKGROUND_COLOR_WHITE : BACKGROUND_COLOR_BLUE
          }
          textColor={
            languageSelected ? BACKGROUND_COLOR_BLUE : BACKGROUND_COLOR_WHITE
          }
          placeholder={'हिंदी'}
          onPress={languageChanged}
        />
      </View>
      <TouchableOpacity
        style={styles.swipeUp}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.swipeUpArrow}>^</Text>
        <Text style={styles.swipeUpText}>Swipe Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopIcons: {
    ...Platform.select({
      web: {
        height: '20%',
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      default: {
        height: '20%',
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
    }),
  },

  iconText: {
    color: '#4683F9',
    fontSize: 140,
    fontWeight: '700',
  },
  languageTextContainer: {
    ...Platform.select({
      web: {
        position: 'relative',
        // bottom: '20%',
        // borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        height: '30%',
        flex: 1,
      },
      default: {
        position: 'relative',
        // bottom: '20%',
        // borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        height: '30%',
        flex: 1,
      },
    }),
  },
  languageText: {
    ...Platform.select({
      web: {
        fontSize: 50,
        color: 'black',
        marginVertical: 20,
        textAlign: 'center',
      },
      default: {
        fontSize: 50,
        color: 'black',
        marginVertical: 10,
        textAlign: 'center',
      },
    }),
  },

  LanguageButtonsContainer: {
    ...Platform.select({
      web: {
        // borderWidth: 1,
        position: 'relative',
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '7%',
        width: '30%',
      },
      default: {
        // borderWidth: 1,
        position: 'relative',
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '7%',
        width: '100%',
      },
    }),
  },
  swipeUp: {
    ...Platform.select({
      web: {
        // borderWidth: 1,
        width: '10%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'bottom',
        flex: 1,
      },
      default: {
        // borderWidth: 1,
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'bottom',
        flex: 0.6,
      },
    }),
  },
  swipeUpArrow: {
    ...Platform.select({
      web: {
        fontSize: 60,
        color: '#4683F9',
        fontWeight: '900',
        // position: 'absolute',
        textAlign: 'center',
      },
      default: {
        fontSize: 60,
        color: '#4683F9',
        fontWeight: '900',
        // position: 'absolute',
        textAlign: 'center',
      },
    }),
  },
  swipeUpText: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
    bottom: '10%',
  },
});
