import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StreakScreen = ({ route, navigation }) => {
  const { selectedPrayers } = route.params;
  const [streak, setStreak] = useState(0);

  // Calculate streak
  useEffect(() => {
    let count = 0;
    for (const prayer in selectedPrayers) {
      if (selectedPrayers[prayer]) count++;
    }
    const streak = count >= 5 ? 1 : 0; // If 5 or more prayers are selected, streak = 1, else streak = 0
    setStreak(streak);
  }, [selectedPrayers]);

  const handleNext = () => {
    navigation.navigate('Record');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Streak of Offered Prayers</Text>
      <View style={styles.streakCircle}>
        <Text style={styles.streakText}>{streak}</Text>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  streakCircle: {
    width: 200,
    height: 200,
    borderRadius: 100, // Half of width and height to make it a circle
    backgroundColor: '#00adf5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#00adf5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default StreakScreen;
