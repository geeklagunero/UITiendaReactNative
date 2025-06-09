import { View, Text, StyleSheet, Image, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './views/Home'
import Search from './views/Search'
import Settings from './views/Settings'
import Shop from './views/Shop'
import Profile from './views/Profile'

import TabBarCustom from './navigation/TabBarCustom';
import NavegationCustom from './navigation/NavegationCustom'


const App = () => {

  const Tab = createBottomTabNavigator()


  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        tabBar={(props) => <TabBarCustom {...props} />}
      >
        <Tab.Screen name='home' component={Home} options={{
          headerShown: false,
        }} />
        <Tab.Screen name='search' component={Search} />
        <Tab.Screen name='setting' component={Settings} />
        <Tab.Screen name='shop' component={Shop} />
        <Tab.Screen name='profile' component={Profile} />
      </Tab.Navigator>*/}
      <NavegationCustom />


    </NavigationContainer >
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

export default App