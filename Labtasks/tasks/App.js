import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import App from './tasks/todolist';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
   <View>
    <App>

    </App>
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
