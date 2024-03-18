import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Application</Text>
      <View style={styles.buttonContainer} flexDirection='row'>
        <Button
          title='Decrease'
          color='red'
          onPress={() => {setCount(count - 1)}}
          disabled={count === 0}
        />
        <Text style={styles.countText}>{count}</Text>
        <Button
          title='Increase'
          color='green'
          onPress={() => {setCount(count + 1)}}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 10,
    justifyContent: 'space-evenly',
  },
  countText: {
    fontSize: 18,
  },
});
