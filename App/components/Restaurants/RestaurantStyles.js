import { StyleSheet } from 'react-native'

const horizontalMargin = 15
const slideWidth = 290
const itemWidth = slideWidth + horizontalMargin * 2

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-around',
    fontFamily: 'Gill Sans',
    marginTop: 50
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    width: 320,
    margin: 5
  },
  loadingText: {
    alignSelf: 'center',
    fontSize: 24
  },
  flex: {
    display: 'flex'
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row'
  },
  defaultPadding: {
    padding: 8
  },
  timeMetric: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10
  },
  foodsy: {
    color: '#000000',
    fontSize: 26,
    fontWeight: 'bold'
  },
  timeSpace: {
    paddingLeft: 10
  },
  leftSpace: {
    paddingLeft: 5
  },
  slide: {
    width: itemWidth,
    height: 550,
    flexGrow: 0,
    borderRadius: 10
  },
  leftSpacing: {
    paddingLeft: 5
  },
  header: {
    backgroundColor: '#2f8bff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  topPadding: {
    paddingBottom: 12,
    paddingTop: 12
  },
  resMetrics: {
    backgroundColor: '#ffffff'
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10
  },
  footerText: {
    color: '#2f8bff',
    fontSize: 14
  },
  whiteText: {
    color: '#fff',
    fontSize: 14
  },
  pin: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#fff',
    width: 25,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaceText: {
    marginLeft: 5
  },
  resInfoText: {
    fontSize: 14
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16
  },
  bottomMargin: {
    marginBottom: 5
  },
  padding15: {
    padding: 15
  },
  background: {
    backgroundColor: '#ccc',
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    justifyContent: 'space-between'
  },
  cuiseneType: {
    marginTop: 10,
    fontSize: 14,
    color: '#6f6db9',
    alignSelf: 'center'
  }
})
