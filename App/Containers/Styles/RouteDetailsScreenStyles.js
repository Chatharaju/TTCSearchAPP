import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight
    // backgroundColor: Colors.background
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    width: 350,
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    marginLeft: 10,
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    marginRight: 15
  },
  headerView: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 25,
    justifyContent: 'space-between'
  }
})
