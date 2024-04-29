import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const StreakScreen = ({navigation}) => {
  const [streakCount, setStreakCount] = React.useState(0);

  const handlePress = () => {
    setStreakCount(streakCount + 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: 'blue', width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={handlePress}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>{streakCount}</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 20 }}>Streak</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SalahScreen')}>
        <Text>Go to Salah Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PrayerRecordsScreen')}>
        <Text>Go to PrayerRecordsScreen Screen</Text>
        </TouchableOpacity>
    </View>

  );
};

export default StreakScreen;