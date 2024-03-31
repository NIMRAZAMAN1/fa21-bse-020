import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Chessboard from './labtask/task1';

export default function Chessboard() {
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
