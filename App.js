import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
 } from 'react-native';
 
class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text>Click me!</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times.
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;