import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Platform } from 'react-native'

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then((source) => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: source[0],
          navigatorButtons: {
            leftButtons: [{
              icon: source[2],
              title: 'Menu',
              id: 'sideDrawerToggle'
            }]
          }
        },

        {
          screen: 'awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: source[1],
          navigatorButtons: {
            leftButtons: [{
              icon: source[2],
              title: 'Menu',
              id: 'sideDrawerToggle'
            }]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: 'orange'
      },
      appStyle: {
        tabBarSelectedButtonColor: 'orange'
      },
      drawer: {
        left: {
          screen: 'awesome-places.SideDrawer'
        }
      }
    })
  })
}

export default startTabs
