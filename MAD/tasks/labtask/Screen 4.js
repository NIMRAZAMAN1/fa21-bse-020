import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PrayerRecordsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Prayer Records</Text>
      </View>
      <ScrollView style={styles.recordsContainer} horizontal={true}>
        <View style={styles.record}>
          <Text style={styles.recordText}>Fajar</Text>
          <Text style={styles.recordText}>0.0</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordText}>Zuhr</Text>
          <Text style={styles.recordText}>0.4</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordText}>Asr</Text>
          <Text style={styles.recordText}>0.8</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordText}>Maghrib</Text>
          <Text style={styles.recordText}>1.2</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordText}>Isha</Text>
          <Text style={styles.recordText}>1.6</Text>
        </View>
      </ScrollView>
      <View style={styles.record}>
        <Text style={styles.recordText}>Previous Record</Text>
        <Text style={styles.recordText}>2.0</Text>
      </View>
      <View style={styles.record}>
        <Text style={styles.recordText}>LAST 7 DAYS</Text>
        <Text style={styles.recordText}>-</Text>
      </View>
      <View style={styles.record}>
        <Text style={styles.recordText}>MONTHLY</Text>
        <Text style={styles.recordText}>-</Text>
      </View>
      <View style={styles.record}>
        <Text style={styles.recordText}>DATE RANGE</Text>
        <Text style={styles.recordText}>-</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  recordsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  record: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  recordText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PrayerRecordsScreen;