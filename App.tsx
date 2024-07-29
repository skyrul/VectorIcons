import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import {Icons, IIcon} from './components/Icon';
import {MaterialIcon} from './components/Icon';

const App = () => {
  return (
    <><StatusBar barStyle="dark-content" /><SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>This font-weight is 'regular' </Text>
        <Text style={styles.boldFont}>This font-weight is 'bold' </Text>
        {/* Add icons here */}
        <MaterialIcon size="large" color="purple" name="home" />
        <MaterialIcon size="extraLarge" color="black" name="github" />
        <Text style={styles.titleText}>
          Example of Ionicon Icon
        </Text>
        <IIcon
          name="information-circle-outline"
          size="extraLarge"
          color="blue" />
        <IIcon name="bicycle" size="extraLarge" color="red" />
      </View>
    </SafeAreaView></>
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
  boldFont: {
    fontFamily: 'Nunito-Bold',
  },
});
