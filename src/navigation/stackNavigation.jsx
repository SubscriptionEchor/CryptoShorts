import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from '../screens/InitialScreen';
import HomeScreen from '../screens/HomeScreen';
import icon from '../../assets/Images/logo_inshorts.png';
const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          component={InitialScreen}
          name="InitialScreen"
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{
            headerTitleStyle: {
              display: 'none',
            },

            headerRight: () => (
              <View
                style={{
                  // borderWidth: 1,
                  width: '100%',
                  height: '100%',

                  justifyContent: 'center',
                }}>
                {Platform.OS === 'web' ? (
                  <Image
                    source={{uri: icon}}
                    style={{
                      // borderWidth: 1,
                      height: 90,
                      width: 130,
                      alignSelf: 'center',
                      resizeMode: 'contain',
                    }}
                  />
                ) : (
                  <Image
                    source={require('../../assets/Images/logo_inshorts.png')}
                    style={{
                      height: '90%',
                      // width: '0%',
                      alignSelf: 'center',
                      resizeMode: 'contain',
                    }}
                  />
                )}
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
