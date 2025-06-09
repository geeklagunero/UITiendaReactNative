import { SafeAreaView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Sections from '../components/Sections'
import Productos from '../components/Productos'


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Sections />
            <Productos />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#fff',

    }
})