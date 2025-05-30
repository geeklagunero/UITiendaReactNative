import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Producto from './Producto'

const Productos = () => {
    return (
        <ScrollView style={{ width: '100%' }} >
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Producto title='Tortor Chair' imagen={require('../assets/silla1.jpg')} precio='$ 245.00' puntuacion='4.8' />
                <Producto title='Morbi Chair' imagen={require('../assets/silla2.jpg')} precio='$ 245.00' puntuacion='4.9' />
                <Producto title='Ejecutiva Chair' imagen={require('../assets/silla3.jpg')} precio='$ 245.00' puntuacion='4.8' />
                <Producto title='Morder Chair' imagen={require('../assets/silla4.jpg')} precio='$ 245.00' puntuacion='4.9' />
                <Producto title='Tortor Chair' imagen={require('../assets/silla5.jpg')} precio='$ 245.00' puntuacion='4.8' />
                <Producto title='Gamer Pro Chair' imagen={require('../assets/silla7.jpg')} precio='$ 245.00' puntuacion='4.9' />
                <Producto title='Gamer Chair' imagen={require('../assets/silla1.jpg')} precio='$ 245.00' puntuacion='4.8' />
                <Producto title='Morbi Chair' imagen={require('../assets/silla2.jpg')} precio='$ 245.00' puntuacion='4.9' />
                <Producto title='Tortor Chair' imagen={require('../assets/silla1.jpg')} precio='$ 245.00' puntuacion='4.8' />
                <Producto title='Morbi Chair' imagen={require('../assets/silla2.jpg')} precio='$ 245.00' puntuacion='4.9' />

            </View>
        </ScrollView>
    )
}



export default Productos