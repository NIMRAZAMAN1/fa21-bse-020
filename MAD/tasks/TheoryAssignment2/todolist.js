// Import necessary components from React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

// Define the main App component
const App1 = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the input text
  const [inputText, setInputText] = useState('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (inputText.trim() !== '') {
      setTasks([...tasks, inputText]);
      setInputText('');
    }
  };

  // Function to handle editing a task (not implemented in this basic example)
  const handleEditTask = (index) => {
    // Implement your edit logic here
    console.log(`Edit task at index ${index}`);
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Enter a task"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />

      {/* Display the list of tasks */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{item}</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => handleEditTask(index)}>
                <Text style={{ color: 'blue', marginRight: 10 }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default App1;
