import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalenderScreen from './calender';
//import PrayerScreen from './prayer';
import StreakScreen from './StreakScreen';
import RecordScreen from './RecordScreen';
import Prayers from './Prayers';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={CalenderScreen} />
        <Stack.Screen name="Streak" component={StreakScreen} />
        <Stack.Screen name="Record" component={RecordScreen} />
        <Stack.Screen name="Prayers" component={Prayers}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
