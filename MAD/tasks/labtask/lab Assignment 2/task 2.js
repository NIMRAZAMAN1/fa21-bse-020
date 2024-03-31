import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const StudentRecords = () => {
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    setStudents([...students, { name, gpa }]);
  };

  const searchStudent = (searchName) => {
    // Implement search logic here
  };

  const deleteStudent = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter Name"
      />
      <TextInput
        value={gpa}
        onChangeText={(text) => setGPA(text)}
        placeholder="Enter GPA"
      />
      <Button title="Add" onPress={addStudent} />
      <TextInput
        // Add search functionality here
      />
      <Text>Records:</Text>
      {students.map((student, index) => (
        <View key={index}>
          <Text>
            {index + 1}. {student.name} {student.gpa}
          </Text>
          <Button title="Delete" onPress={() => deleteStudent(index)} />
        </View>
      ))}
      <Button title="Clear All" onPress={() => setStudents([])} />
    </View>
  );
};

export default StudentRecords;