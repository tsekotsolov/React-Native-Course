import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('md-share-alt', 30),
    Icon.getImageSource('md-menu', 30)
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
      drawer: {
        left: {
          screen: 'awesome-places.SideDrawer'
        }
      }
    })
  })
}

export default startTabs
