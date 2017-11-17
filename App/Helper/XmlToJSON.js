
let parseString = require('react-native-xml2js').parseString;
export default {

  // Functions return fixtures
  getXmlToJson: (data) => {
    parseString(data, function (err, result) {
      console.tron.log('Helper File')
      console.tron.log(result.body.route)
      let finalJsonData = JSON.stringify(result.body.route)
      console.tron.log('JOSN.stringify')
      console.tron.log(finalJsonData)
      // console.tron.log('JSON.stringify(result.body.route)')
      // console.tron.log(JSON.stringify(result.body.route))
      return finalJsonData
    })
  }
}




// import React, { Component } from 'react'
// import { Text, Image, View, ListView } from 'react-native'
// import {connect} from 'react-redux'
// import RouteListActions from '../Redux/RouteListRedux'
// // import Helper from '../Helper/XmlToJSON'
//
// import { Images } from '../Themes'
//
// // Styles
// import styles from './Styles/RouteDetailsScreenStyles'
// let parseString = require('react-native-xml2js').parseString;
//
// class RouteDetailsScreen extends Component {
//   constructor (props) {
//     super(props)
//     this.props.routeInfo(this.props.navigation.state.params.text)
//
//     const dataObjects = []
//     const rowHasChanged = (r1, r2) => r1 !== r2
//     // DataSource configured
//     const ds = new ListView.DataSource({rowHasChanged})
//     // Datasource is always in state
//     this.state = {
//       dataSource: ds.cloneWithRows(dataObjects)
//     }
//   }
//   componentWillReceiveProps (newProps) {
//     // console.tron.log('newProps')
//     // console.tron.log(newProps.routeData)
//     if (this.props.routeData !== newProps.routeData) {
//       let newPropsData = newProps.routeData
//       parseString(newPropsData, function (err, result) {
//         // console.tron.log('newProps resultlll')
//         // console.tron.log(result)
//         newPropsData = result.body.route
//       })
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(newPropsData[0].stop)
//       })
//     }
//   }
//
//   _renderRow (rowData) {
//     console.tron.log('rowData')
//     console.tron.log(rowData)
//     return (
//       <View style={styles.row}>
//         <Text style={styles.boldLabel}>{rowData.$.tag}</Text>
//         <Text style={styles.label}>{rowData.$.title}</Text>
//       </View>
//     )
//   }
//
//   render () {
//     return (
//       <View style={styles.mainContainer}>
//         <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
//         <ListView
//           contentContainerStyle={styles.listContent}
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => this._renderRow(rowData)}
//           enableEmptySections
//           pageSize={15} />
//       </View>
//     )
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     routeInfo: (aValue) => dispatch(RouteListActions.routeRequest(aValue))
//   }
// }
//
// const mapStateToProps = (state) => {
//   // console.tron.log('Stateeeee')
//   // console.tron.log(state)
//   return {
//     routeData: state.routeList.routeList
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(RouteDetailsScreen)
