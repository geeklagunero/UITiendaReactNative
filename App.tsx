import { View, Text, StyleSheet, Image, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';



import NavegationCustom from './navigation/NavegationCustom'


const App = () => {




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