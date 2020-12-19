import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"app"} />
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
paddingTop:50
});
