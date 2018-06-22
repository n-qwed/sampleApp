import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Profile } from '../store';
import { ProfileQR } from '../models/profile';

class AScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen A</Text>
        <Text>{this.props.userId}</Text>
        <Button
          onPress={() => {
            this.props.updateUid('Taro');
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

export default connect(
  ({ profile }) => ({ profile, userId: ProfileQR.getUid(profile) }),
  {
    ...Profile.creators,
  }
)(AScreen);
