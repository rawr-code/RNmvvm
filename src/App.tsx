import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          pariatur exercitationem nemo molestiae quisquam optio explicabo
          accusantium corrupti? Voluptatibus facilis non quo temporibus ratione
          deserunt modi, nam dicta aperiam error!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 48,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;