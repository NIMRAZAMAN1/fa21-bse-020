import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecordScreen = () => {
  // Dummy data for weekly prayers
  const weeklyPrayers = {
    Monday: 1,
    Tuesday: 5,
    Wednesday: 3,
    Thursday: 2,
    Friday: 4,
    Saturday: 3,
    Sunday: 1,
  };

  // Convert weeklyPrayers object to an array of prayer counts
  const data = Object.values(weeklyPrayers);

  // Set different colors for each day
  const colors = ['#2979FF', '#FFA726', '#4CAF50', '#FFEB3B', '#EC407A', '#9C27B0', '#78909C'];

  // Find the maximum prayer count to calculate relative heights of bars
  const maxPrayers = Math.max(...data);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Offered Prayers This Week</Text>
      <View style={styles.chartContainer}>
      <View style={styles.yAxis}>
          {[...Array(maxPrayers).keys()].reverse().map((number) => (
            <Text key={number} style={styles.yAxisText}>{number + 1}</Text>
          ))}
        </View>
        <View style={styles.chart}>
          {data.map((count, index) => (
            <View key={index} style={[styles.bar, { height: (count / maxPrayers) * 200, backgroundColor: colors[index] }]} />
          ))}
        </View>
      </View>
      <View style={styles.xAxis}>
        {Object.keys(weeklyPrayers).map((day, index) => (
          <Text key={index} style={styles.xAxisText}>{day}</Text>
        ))}
      </View>
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
  chartContainer: {
    flexDirection: 'row',
    height: 250,
    paddingHorizontal: 16,
  },
  yAxis: {
    justifyContent: 'space-between',
    marginRight: 8,
  },
  yAxisText: {
    fontSize: 14,
    color: '#555',
  },
  chart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bar: {
    width: 40,
    borderRadius: 5,
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  xAxisText: {
    fontSize: 14,
    color: '#555',
    width: 40,
    textAlign: 'center',
  },
});

export default RecordScreen;
