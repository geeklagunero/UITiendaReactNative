import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Option from './Option'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Option icono='home' />
            <Option icono='search-outline' />
            <Option icono='grid-outline' background colorIcon />
            <Option icono='bag-handle-outline' />
            <Option icono='person-outline' />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,


    }
})

export default Footer