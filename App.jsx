import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import InitialScreen from './src/screens/InitialScreen';
import StackNavigation from './src/navigation/stackNavigation';
import ContextProvider from './src/context/ContextProvider';
function App() {
  return (
    <SafeAreaView style={styles.body}>
      <ContextProvider>
        <StackNavigation />
      </ContextProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
