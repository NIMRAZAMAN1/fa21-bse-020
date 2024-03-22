import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Chessboard from '../task1/tasks/task2';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
   <View>
    <Chessboard>

    </Chessboard>
   </View>
   <Statusbar Style="auto"></Statusbar>
   </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
