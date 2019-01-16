import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'


const startTabs = () =>{

    Promise.all([
        Icon.getImageSource('md-map',30),
        Icon.getImageSource('md-share-alt',30),
        ]).then((source)=>{
            Navigation.startTabBasedApp({
                tabs : [
                    {
                    screen:'awesome-palces.FindPlaceScreen',
                    label:'Find Place',
                    title: 'Find Place',
                    icon: source[0]
                    },
            
                    {
                    screen:'awesome-palces.SharePlaceScreen',
                    label:'Share Place',
                    title: 'Share Place',
                    icon: source[1]
                    },
                ]
            })

        })

    
}

export default startTabs

