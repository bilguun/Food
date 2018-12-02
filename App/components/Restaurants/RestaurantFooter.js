import React from 'react'
import {
  View,
  Text
} from 'react-native'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call'

import { styles } from './RestaurantStyles'

export default class RestaurantHeader extends React.Component {
  render () {
    let { item } = this.props
    return (
      <View
        style={[
          styles.spaceBetween,
          styles.defaultPadding,
          styles.topPadding,
          styles.resMetrics,
          styles.footer
        ]}
      >
        <Text style={styles.footerText} onPress={() => {
          console.log('call')
          RNImmediatePhoneCall.immediatePhoneCall('12121')
        //   RNImmediatePhoneCall.immediatePhoneCall(item.phone)
        }}>Call</Text>
        <Text style={styles.footerText}>{item.distance.toFixed(2)} miles away</Text>
        <Text style={styles.footerText}>Reserve</Text>
      </View>
    )
  }
}
