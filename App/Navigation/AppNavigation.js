import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import RouteSearchScreen from '../Containers/RouteSearchScreen'
import RouteDetailsScreen from '../Containers/RouteDetailsScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen
  },
  RouteSearchScreen: {
    screen: RouteSearchScreen
  },
  RouteDetailsScreen: {
    screen: RouteDetailsScreen,
    navigationOptions: {title: 'Route Details'}
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'RouteSearchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
