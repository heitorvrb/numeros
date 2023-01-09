import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import { translations } from './translations/translations';
import { Text } from './components/ThemedText';
import { View } from './components/ThemedView';

const i18n = new I18n(translations);
const deviceLanguage = getLocales()[0].languageCode;
i18n.locale = deviceLanguage;

//TODO: should not show duplicate numbers
const numbers = [
  Math.floor(Math.random() * 60) + 1,
  Math.floor(Math.random() * 60) + 1,
  Math.floor(Math.random() * 60) + 1,
  Math.floor(Math.random() * 60) + 1,
  Math.floor(Math.random() * 60) + 1,
  Math.floor(Math.random() * 60) + 1,
];
numbers.sort(); //TODO: doesn't work

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('Your lucky numbers are:')}</Text>
      <Text>{numbers.join(' - ')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
