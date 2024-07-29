import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Icons, IIcon} from './components/Icon';
import {MaterialIcon} from './components/Icon';
import {IconButton} from './components/IconButton.tsx';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>This font-weight is 'regular' </Text>
          <Text style={styles.boldFont}>This font-weight is 'bold' </Text>
          <Text>The following shows </Text>
          <Text>2 MaterialIcon and FontAwesomeIcon button icon</Text>
          {/* Add icons here */}
          <MaterialIcon size="large" color="purple" name="home" />
          <MaterialIcon size="extraLarge" color="black" name="github" />
          {/* Add icon button here */}
          <IconButton
            onPress={() => {}}
            color="white"
            size="extraLarge"
            name="facebook"
            text="Login in with Facebook"
          />
          <Text style={styles.titleText}>Example of Entypo Icon</Text>
          <Icons.Entypo name="camera" size={24} color="black" />
          <Text style={styles.titleText}>Example of SimpleLineIcon</Text>
          <Icons.SimpleLineIcons name="plane" size={24} color="black" />
          <Text style={styles.titleText}>Example of Ionicon Icon</Text>
          <IIcon
            name="information-circle-outline"
            size="extraLarge"
            color="blue"
          />
          <IIcon name="bicycle" size="extraLarge" color="red" />
        </View>
      </SafeAreaView>
    </>
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
