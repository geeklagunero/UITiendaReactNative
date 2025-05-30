import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '@react-native-vector-icons/ionicons'

interface Props {
    imagen: any,
    title: string,
    precio: string,
    puntuacion: string
}
const Producto = ({ imagen, title, precio, puntuacion }: Props) => {



    return (
        <View style={styles.conteinerProducto}>

            <Image source={imagen}
                style={styles.img}
                resizeMode='contain' />
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.textSecundario}>{precio}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                    <Icon name='star' size={10} color='#fec810' />
                    <Text style={styles.textSecundario} >{puntuacion}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    conteinerProducto: {
        width: '50%',
        height: 200,
        padding: 20,
        marginBottom: 70,

    },
    img: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#808080',
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 16,
    },
    textSecundario: {
        color: '#808080',
        fontWeight: 'bold'
    }
})

export default Producto