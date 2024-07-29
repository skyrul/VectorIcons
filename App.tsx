import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Icons} from './components/Icon';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Example of SimpleLineIcon
        </Text>
        <Icons.SimpleLineIcons name="plane" size={24} color="black"  />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
