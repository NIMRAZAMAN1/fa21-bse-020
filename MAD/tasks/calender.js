import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (date) => {
    setSelectedDate(date.dateString);
    navigation.navigate('Prayers', { [selectedDate]: date.dateString });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Date</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{ [selectedDate]: { selected: true, selectedColor: 'blue' }}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CalendarScreen;
