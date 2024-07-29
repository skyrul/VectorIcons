import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Icons, IIcon} from './components/Icon';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Example of Ionicon Icon
        </Text>
        <IIcon
          name="information-circle-outline"
          size="extraLarge"
          color="blue"
        />
        <IIcon name="bicycle" size="extraLarge" color="red" />
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
