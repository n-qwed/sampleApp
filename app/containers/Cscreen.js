import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen C</Text>
        <Button
          onPress={() => {
            Actions.pop();
          }}
          title="BACK B"
        />
        <Button
          onPress={() => {
            Actions.popTo('ascreen');
          }}
          title="BACK A"
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
  },
});

export default CScreen;
