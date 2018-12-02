import React, { Component } from 'react'
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import defaultImage from '../../images/noImage.png'
import { styles } from './RestaurantStyles'

import RestaurantHeader from './RestaurantHeader'
import RestaurantFooter from './RestaurantFooter'

export default class RestaurantCard extends Component {
  render () {
    let { item } = this.props
    return (
      <View>
        <View style={[styles.slide]}>
          <RestaurantHeader item={item} />
          <ImageBackground
            source={item.images !== null ? { uri: item.images[0] } : defaultImage}
            style={styles.background}
          >
            <View style={styles.padding15}>
              <TouchableOpacity style={[styles.location]}>
                <MaterialIcons name='location-on' size={20} color='#fff' />
                <Text style={[styles.whiteText, { fontSize: 16 }]}>{item.address}</Text>
              </TouchableOpacity>
              <Text style={[styles.whiteText, styles.leftSpacing]}>Closes at 10:00pm</Text>
            </View>

            <View style={styles.padding15}>
              <View style={[styles.location, styles.bottomMargin]}>
                <Icon name='circle' size={12} color='#fff' />
                <Text style={[styles.whiteText, styles.leftSpacing]}>Not Busy</Text>
              </View>
              <View style={[styles.location]}>
                <Icon name='star' size={12} color='#fff' />
                <Text style={[styles.whiteText, styles.leftSpacing]}>{item.description}</Text>
              </View>
            </View>
          </ImageBackground>
          <RestaurantFooter item={item} />
        </View>
        <View>
          <Text style={[styles.cuiseneType]}>Casual Dining American Cuisine</Text>
        </View>
      </View>
    )
  }
}
