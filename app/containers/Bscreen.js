import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Profile } from '../store';
import { ProfileQR } from '../models/profile';

class BScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen B</Text>
        <Text>{this.props.userId}</Text>
        <Button
          onPress={() => {
            Actions.cscreen();
          }}
          title="NEXT C"
        />
        <Button
          onPress={() => {
            Actions.pop();
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

export default connect(
  ({ profile }) => ({ profile, userId: ProfileQR.getUid(profile) }),
  {
    ...Profile.creators,
  }
)(BScreen);
