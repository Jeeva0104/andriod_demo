import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Button
} from 'react-native'





export default class Listpage extends React.Component {
  async componentDidMount() {
    try {
    } catch (err) {
    }
  }
  handelLogout = async () => {
    await AsyncStorage.setItem("AUTH_KEY", "")
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome To Glueup</Text>
        <Text style={styles.welcome}>{this.props.navigation.state.params.userid}</Text>
        <Button onPress={this.handelLogout}   title="Logout"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
