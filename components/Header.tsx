import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.title}>Furniture</Text>
            <Image source={require('../assets/menu.png')} style={styles.menu} />
        </View>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // position: 'absolute',
        // top: 0,
        marginBottom: 20,

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 20
    },
    menu: {
        height: 25,
        width: 25,
        opacity: 0.5,
        marginRight: 20
    }
})

export default Header