import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  const handleOption1 = () => {
    setMessage('Thank you sir!');
  };

  const handleOption2 = () => {
    setMessage('Sad na ako');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an Option</Text>
      <Button title="Yes" onPress={handleOption1} />
      <Button title="No" onPress={handleOption2} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});

export default App;