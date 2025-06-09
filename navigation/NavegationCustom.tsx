import Home from '../views/Home'
import Search from '../views/Search'
import Settings from '../views/Settings'
import Shop from '../views/Shop'
import Profile from '../views/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarCustom from './TabBarCustom';
import { Platform, StyleSheet } from 'react-native'

const NavegationCustom = () => {
    const Tab = createBottomTabNavigator()


    return (

        <Tab.Navigator
            tabBar={(props) => <TabBarCustom {...props} />}
        >
            <Tab.Screen name='home' component={Home} options={{
                headerShown: false,
            }} />
            <Tab.Screen name='search' component={Search} />
            <Tab.Screen name='setting' component={Settings} />
            <Tab.Screen name='shop' component={Shop} />
            <Tab.Screen name='profile' component={Profile} />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#fff',

    }
})

export default NavegationCustom