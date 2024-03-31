import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const GameLayout = () => {
  const [input, setInput] = React.useState('');

  const handleNumberPress = (number) => {
    setInput(input + number.toString());
  };

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>
        Game Title
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          fontSize: 18,
          marginVertical: 10,
          textAlign: 'center',
        }}
        value={input}
        editable={false}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {Array.from({ length: 10 }, (_, i) => i).map((number) => (
          <Button
            key={number}
            title={number.toString()}
            onPress={() => handleNumberPress(number)}
          />
        ))}
      </View>
    </View>
  );
};

export default GameLayout;