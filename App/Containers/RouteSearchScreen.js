import React, { Component } from 'react'
import { Image, View, TextInput } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import {connect} from 'react-redux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/RouteSearchScreenStyles'

class RouteSearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }
  getRouteInfo () {
    this.props.navigation.navigate('RouteDetailsScreen', {text: this.state.text})
  }

  render () {
    return (
      <View style={styles.mainContainer}>

        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <View style={styles.container}>

          <View style={styles.centered}>
            <Image source={Images.ttcLogo} style={styles.logo} />
          </View>
          <View style={styles.centered}>
            <TextInput
              style={styles.routeTextInput}
              placeholder='Enter Route number!'
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <RoundedButton
            onPress={() => this.getRouteInfo()}
            text='Search for Route'
          />

        </View>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RouteSearchScreen)
