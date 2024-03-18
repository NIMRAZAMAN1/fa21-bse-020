import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (text) => {
    setUsername(text);
    checkButtonState(text, password);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkButtonState(username, text);
  };

  const checkButtonState = (uname, pwd) => {
    setIsButtonDisabled(!(uname.trim() && pwd.trim()));
  };

  const handleLogin = () => {
    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success', 'Login successful');
    } else {
      Alert.alert('Error', 'Wrong username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        value={password}
      />
      <Button
        title="Submit"
        onPress={handleLogin}
        disabled={isButtonDisabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
