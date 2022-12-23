import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const numbers = [
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
  ];
  numbers.sort();

  return (
    <View style={styles.container}>
      <Text>Seus números da sorte são:</Text>
      <Text>{numbers.join(' - ')}</Text>
      <StatusBar style="auto" />
    </View>
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
