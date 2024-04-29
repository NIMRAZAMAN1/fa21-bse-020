import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

const PrayerScreen = ({ route, navigation }) => {
  const { selectedDate } = route.params;

  // State to store the selected prayers
  const [prayers, setPrayers] = useState({
    Fajr: false,
    Dhuhr: false,
    Asr: false,
    Maghrib: false,
    Isha: false,
  });

  // State to store the streak count
  const [streak, setStreak] = useState();

  useEffect(() => {
    // Check if all prayers are selected and update streak
    const allPrayersSelected = Object.values(prayers).every((prayer) => prayer === true);
    if (allPrayersSelected) {
      Streak + 1;
      } else {
      Streak=0;
    }
  }, [prayers]);

  const handlePrayerChange = (prayer) => {
    setPrayers((prevPrayers) => ({
      ...prevPrayers,
      [prayer]: !prevPrayers[prayer],
    }));
  };

  const handleNext = () => {
    // Navigate to the next screen and pass selected prayers, date, and streak
    navigation.navigate('Streak', { selectedPrayers: prayers, selectedDate, streak });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Record Prayers for {selectedDate}</Text>
      <View style={styles.prayerContainer}>
        {Object.entries(prayers).map(([prayer, checked]) => (
          <TouchableOpacity
            key={prayer}
            style={styles.prayerItem}
            onPress={() => handlePrayerChange(prayer)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              
              <Text style={styles.prayerName}>{prayer}</Text>
              <CheckBox value={checked} onChange={() => handlePrayerChange(prayer)} />
            </View>
            <Text style={styles.prayerNameUrdu}>{getUrduPrayerName(prayer)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>StreakScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

// Function to get Urdu prayer name
const getUrduPrayerName = (prayer) => {
  switch (prayer) {
    case 'Fajr':
      return 'فجر';
    case 'Dhuhr':
      return 'ظهر';
    case 'Asr':
      return 'عصر';
    case 'Maghrib':
      return 'مغرب';
    case 'Isha':
      return 'عشاء';
    default:
      return '';
  }
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
  prayerContainer: {
    marginTop: 10,
  },
  prayerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  prayerName: {
    fontSize: 18,
    color: '#333',
  },
  prayerNameUrdu: {
    fontSize: 22,
    color: '#333',
    fontFamily: 'UrduFont', // Replace 'UrduFont' with the actual Urdu font
  },
  nextButton: {
    backgroundColor: '#00adf5',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PrayerScreen;
