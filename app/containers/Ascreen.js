import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen A</Text>
        <Button
          onPress={() => {
            Actions.bscreen();
          }}
          title="NEXT"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
