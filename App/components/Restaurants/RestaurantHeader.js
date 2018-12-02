import React from 'react'
import {
  View,
  Text
} from 'react-native'

import { styles } from './RestaurantStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'

export default class RestaurantHeader extends React.Component {
  render () {
    let { item } = this.props
    return (
      <View>
        <View style={[styles.spaceBetween, styles.defaultPadding, styles.topPadding, styles.header]}>
          <Text style={[styles.whiteText]}>{item.title}</Text>
          <View style={styles.pin}>
            <Octicons name='pin' size={15} color='#2f8bff' />
          </View>
        </View>
        <View style={[styles.defaultPadding, styles.topPadding, styles.resMetrics, styles.spaceBetween]}>
          <View style={[styles.resInfo]}>
            <MaterialIcons name='directions-walk' size={20} color='#2f8bff' />
            <Text style={[styles.spaceText, styles.resInfoText]}>6min</Text>
          </View>
          <View style={[styles.resInfo]}>
            <Icon name='dollar' size={20} color='#2f8bff' />
            <Text style={[styles.spaceText, styles.resInfoText]}>10-15</Text>
          </View>
          <View style={[styles.resInfo]}>
            <MaterialIcons name='star' size={20} color='#2f8bff' />
            <Text style={[styles.spaceText, styles.resInfoText]}>{item.rating}<Text style={{ fontSize: 10 }}>/5</Text></Text>
          </View>
          <View style={[styles.resInfo]}>
            <Icon name='heart' size={20} color='#2f8bff' />
            <Text style={[styles.spaceText, styles.resInfoText]}>23</Text>
          </View>
        </View>
      </View>
    )
  }
}
