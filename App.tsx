import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import HomeScreen from './screens/HomeScreen';

function App(): React.JSX.Element {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
  },
  box: {
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'violet',
  },
});

export default App;
