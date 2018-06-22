import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { store, Profile, Log } from '../store';
import { ProfileQR } from '../models/profile';

class BScreen extends Component {
  constructor(props) {
    super(props);
    this.props.addLog('b:constructor');
    this.state = {
      userName: 'B',
    };
  }

  static getDerivedStateFromProps(props, state) {
    store.dispatch(Log.creators.addLog('b:getDerivedStateFromProps'));
    return null;
  }

  componentDidMount() {
    this.props.addLog('b:componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.props.addLog('b:shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    this.props.addLog('b:getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.addLog('b:componentDidUpdate');
  }

  componentWillUnmount() {
    this.props.addLog('b:componentWillUnmount');
  }

  render() {
    this.props.addLog('b:render');
    return (
      <View style={styles.container}>
        <Text>Screen B</Text>
        <Text>{this.props.userId}</Text>
        <Text>{this.state.userName}</Text>
        <Button
          onPress={() => {
            this.props.updateUid('JIRO');
          }}
          title="UPDATE name"
        />
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
    ...Log.creators,
  }
)(BScreen);
