import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

const salahData = [
  // Your data here, for example:
  { day: 1, isDouble: false },
  { day: 2, isDouble: false },
  { day: 3, isDouble: false },
  { day: 4, isDouble: false },
  { day: 5, isDouble: false },
  { day: 6, isDouble: false },
  { day: 7, isDouble: false },
  { day: 8, isDouble: false },
  { day: 9, isDouble: false },
  { day: 10, isDouble: false },
  { day: 11, isDouble: false },
  { day: 12, isDouble: false },
  { day: 13, isDouble: false },
  { day: 14, isDouble: false },
  { day: 15, isDouble: false },
  { day: 16, isDouble: false },

  // ..  { day: 2, isDouble: false },
  { day: 17, isDouble: false },
  { day: 18, isDouble: false },
  { day: 19, isDouble: false },
  { day: 20, isDouble: false },
  { day: 21, isDouble: false },
  { day: 22, isDouble: false },
  { day: 23, isDouble: false },
  { day: 24, isDouble: false },
  { day: 25, isDouble: false },
  { day: 26, isDouble: false },
  { day: 27, isDouble: false },
  { day: 28, isDouble: false },
  { day: 29, isDouble: true },
  { day: 30, isDouble: false },
  { day: 31, isDouble: false },

  // ..
];

const DayComponent = ({ day, isDouble }) => (
  <Text style={{ fontWeight: isDouble ? 'bold' : 'normal' }}>
    {day}
  </Text>
);

const Salah = ({ navigation }) => {
  const renderDay = ({ item }) => (
    <DayComponent day={item.day} isDouble={item.isDouble} />
  );

  return (
    <>
      <FlatList
        data={salahData}
        renderItem={renderDay}
        keyExtractor={item => item.day.toString()}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Streak')}>
          <Text>Go to Streak Screen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Salah;
