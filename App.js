import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screens/PlaceDetails/PlaceDetails'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'

const store = configureStore()

// Register Screens

Navigation.registerComponent(
  'awesome-palces.Authscreen', () => AuthScreen, store, Provider)
Navigation.registerComponent(
  'awesome-palces.SharePlaceScreen', () => SharePlaceScreen, store, Provider)
Navigation.registerComponent(
  'awesome-palces.FindPlaceScreen', () => FindPlaceScreen, store, Provider)
Navigation.registerComponent(
  'awesome-palces.PlaceDetailScreen', () => PlaceDetailScreen, store, Provider)
Navigation.registerComponent(
  'awesome-palces.SideDrawer', () => SideDrawer)

// Start App

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-palces.Authscreen',
    title: 'Login'
  }
})
