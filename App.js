import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default class App extends React.Component {

  state = {
    value: 0,
    total_taps: 0
  }

  // + 
  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("Value: " + (this.state.value + 1))
  }

  // -
  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
      // total_taps: this.state.total_taps - 1
      // total_taps: this.state.total_taps + 1
      total_taps: this.state.total_taps + 1
    })
    console.log("Value: " + (this.state.value - 1))
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Style */}
        <Text style={{ fontSize: 55, marginBottom: -20 }}>{this.state.value}</Text>
        <Text style={{ fontSize: 18, padding: 20, color: 'blue' }}>{"Total-taps: " + this.state.total_taps}</Text>
        <StatusBar style="auto" />

        {/* Button */}
        <View style={{ flexDirection: 'row' }}>
          < Button onPress={this.decrementValue} title="-" />
          <Text> </Text>
          <Button onPress={this.incrementValue} title='+' />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
