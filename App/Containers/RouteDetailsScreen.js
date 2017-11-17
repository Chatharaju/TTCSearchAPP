import React, { Component } from 'react'
import { Text, Image, View, ListView } from 'react-native'
import {connect} from 'react-redux'
import RouteListActions from '../Redux/RouteListRedux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/RouteDetailsScreenStyles'
let parseString = require('react-native-xml2js').parseString;

class RouteDetailsScreen extends Component {
  constructor (props) {
    super(props)
    this.props.routeInfo(this.props.navigation.state.params.text)

    const dataObjects = []
    const rowHasChanged = (r1, r2) => r1 !== r2
    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})
    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }
  componentWillReceiveProps (newProps) {
    if (this.props.routeData !== newProps.routeData) {
      let newPropsData = newProps.routeData
      parseString(newPropsData, function (err, result) {
        newPropsData = result.body.route
      })
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newPropsData[0].stop)
      })
    }
  }

  _renderRow (rowData) {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.$.tag}</Text>
        <Text style={styles.label}>{rowData.$.title}</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.headerView}>
          <Text style={styles.label}>Stop Number</Text>
          <Text style={styles.label}>Stop Name</Text>
        </View>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          enableEmptySections
          pageSize={15} />
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    routeInfo: (aValue) => dispatch(RouteListActions.routeRequest(aValue))
  }
}

const mapStateToProps = (state) => {
  return {
    routeData: state.routeList.routeList
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RouteDetailsScreen)
