import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  greeting: {
    // flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    top: 100,
  },
});

const Greeting = (props) => {
  return (
    <View style={styles.greeting}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const Props = () => {
  return (
    <View style={styles.container}>
      <Greeting name='Nicholas' />
      <Greeting name='Hieronymus' />
      <Greeting name='Jessica' />
    </View>
  );
}
export default Props;