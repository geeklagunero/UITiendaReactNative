import { View, Text, StyleSheet, Image, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Sections from './components/Sections'
import Productos from './components/Productos'
import Footer from './components/Footer'


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Sections />
      <Productos />
      <Footer />
      {/* <Image style={{ width: 200, height: 300 }} source={require('./assets/silla1.jpg')} /> */}
    </SafeAreaView>
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