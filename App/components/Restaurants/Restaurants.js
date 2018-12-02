import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import { Query } from 'react-apollo'
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries'
import CarouselPager from 'react-native-carousel-pager'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from 'react-native-elements'

import RestaurantCard from './RestaurantCard'
import { styles } from './RestaurantStyles'

export default class Restaurants extends React.Component {
  state = {
    address: '1260 6th Ave, New York, NY 10020',
    addressBarVisible: false,
    isDateTimePickerVisible: false
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
  _handleDatePicked = (date) => {
    this._hideDateTimePicker()
  }

  _toggleAddressBar = () => this.setState({ addressBarVisible: !this.addressBarVisible })
  _clearSearch = () => {
    this.setState({
      address: '',
      addressBarVisible: false
    })
  }
  render () {
    let { address, isDateTimePickerVisible, addressBarVisible } = this.state
    return (
      <View style={styles.container}>
        <View>
          <View style={[styles.flexrow, styles.defaultPadding, { justifyContent: 'space-between' }]}>
            <Text style={styles.foodsy}>Foodsy</Text>
            {
              addressBarVisible &&
              <SearchBar
                noIcon
                lightTheme
                containerStyle={{ flexGrow: 1, backgroundColor: 'white', marginHorizontal: 10 }}
                inputContainerStyle={{ flexGrow: 1, backgroundColor: 'white', color: '#2f8bff' }}
                inputStyle={{ backgroundColor: 'white', color: '#2f8bff', height: 18, fontSize: 12 }}
                onChangeText={(text) => this.setState({ address: text })}
                onClear={this._clearSearch}
                cancelButtonTitle='Cancel'
                placeholder='Type Address...' />
            }
            <Icon name='search' size={24} color='#150f64' onPress={this._toggleAddressBar} />
          </View>
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
          <View style={[styles.flexrow, styles.timeMetric, { justifyContent: 'space-between' }]}>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              <View style={[styles.flexrow, styles.alignCenter]}>
                <Icon name='calendar' size={24} color='#150f64' />
                <Text style={[styles.defaultTextColor, styles.leftSpace]}>Tomorrow</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.flexrow]}>
              <View style={[styles.flexrow, styles.alignCenter]}>
                <Icon name='users' size={24} color='#150f64' />
                <Text style={[styles.defaultTextColor, styles.leftSpace]}>5</Text>
              </View>
              <View style={[styles.flexrow, styles.leftSpace, styles.alignCenter]}>
                <Icon name='clock-o' size={24} color='#150f64' />
                <Text style={[styles.defaultTextColor, styles.leftSpace]}>7pm</Text>
              </View>
            </View>
          </View>
        </View>

        <Query
          query={RESTAURANT_SEARCH_QUERY}
          variables={{
            address
          }}
        >
          {({ loading, error, data = {} }) => {
            if (loading) {
              return (
                <View style={{ width: '100%', paddingVertical: 10 }}>
                  <Text
                    style={styles.loadingText}
                  >
                    Loading
                  </Text>
                  <ActivityIndicator size='large' style={{ padding: 30 }} />
                </View>
              )
            }

            // Make sure we have data
            if (data.search_restaurants && data.search_restaurants.results && data.search_restaurants.results.length > 0) {
              return (
                <View style={{ flex: 1 }}>
                  {
                    <CarouselPager ref={ref => { this.horizontalCarousel = ref }}>
                      {
                        data.search_restaurants.results.map((item, index) => {
                          return (
                            <ScrollView key={index} style={styles.cardContainer}>
                              <RestaurantCard item={item} />
                            </ScrollView>
                          )
                        })
                      }
                    </CarouselPager>
                  }
                </View>
              )
            }

            // No Data Return
            return (
              <View style={{ width: '100%', paddingVertical: 10, alignItems: 'center' }}>
                <Text>No Results</Text>
              </View>
            )
          }}
        </Query>
      </View>
    )
  }
}
