// Screen 2: SalahScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const salahData = [
  // Your data here...
  { day: 1, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 2, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 3, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 4, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 5, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 6, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 7, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 8, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 9, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 10, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 11, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 12, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 13, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 14, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 15, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 16, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 17, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 18, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 19, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 20, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 21, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 22, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 23, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 24, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 25, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 26, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 27, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 28, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 29, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 30, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
  { day: 31, fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },

];

const SalahTracker = ({navigation}) => {
  const [prayers, setPrayers] = useState([]);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('StreakScreen')}>
          <Text>Go to Streak Screen</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => navigation.navigate('PrayerRecordsScreen')}>
          <Text>Go to Prayer Records Screen</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const recordPrayer = (prayer) => {
    setPrayers([...prayers, prayer]);
  };

  const renderDay = ({ item }) => (
    <DayComponent {...item} recordPrayer={recordPrayer} />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Salah Tracker</Text>
      </View>
      <FlatList
        data={salahData}
        renderItem={renderDay}
        keyExtractor={item => item.day.toString()}
      />
    </View>
  );


const DayComponent = ({ day, fajr, dhuhr, asr, maghrib, isha, recordPrayer }) => (
  <View style={{ marginBottom: 10 }}>
    <Text style={{ fontWeight: 'bold' }}>Day {day}</Text>
    <TouchableOpacity style={{ backgroundColor: fajr ? 'green' : 'gray', padding: 5, marginVertical: 5 }} onPress={() => recordPrayer('Fajr')}>
      <Text style={{ color: 'white' }}>Fajr</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ backgroundColor: fajr ? 'green' : 'gray', padding: 5, marginVertical: 5 }} onPress={() => recordPrayer('Fajr')}>
      <Text style={{ color: 'white' }}>dhuhr</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ backgroundColor: fajr ? 'green' : 'gray', padding: 5, marginVertical: 5 }} onPress={() => recordPrayer('Fajr')}>
      <Text style={{ color: 'white' }}>asr</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ backgroundColor: fajr ? 'green' : 'gray', padding: 5, marginVertical: 5 }} onPress={() => recordPrayer('Fajr')}>
      <Text style={{ color: 'white' }}>maghrib</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ backgroundColor: fajr ? 'green' : 'gray', padding: 5, marginVertical: 5 }} onPress={() => recordPrayer('Fajr')}>
      <Text style={{ color: 'white' }}>isha</Text>
    </TouchableOpacity>
    {/* Add similar TouchableOpacity elements for other prayers */}
  </View>
);

export default SalahTracker;
