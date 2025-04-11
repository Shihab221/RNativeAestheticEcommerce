import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';

function App(): React.JSX.Element {
  const[message, setMessage] = useState('Welcome');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Shiku has finally rdun the saapp</Text>
        <Text>{message}</Text>
      </View>
      <View>
        
        <Button
          title="Click Me"
          onPress={() => {
            console.log('Button clicked!');
            setMessage('Congratulations! You pressed');
          }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
