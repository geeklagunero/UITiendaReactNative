import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '@react-native-vector-icons/ionicons'
// import Icon from '@react-native-vector-icons/Ionicons'
interface Props {
    title?: string,
    icon: string,
    colortext?: string,
    background?: string,
    colorIcon?: string,
    opacity?: boolean
}
const BotonSection = ({ title, icon = 'easel-outline', colortext, background, colorIcon, opacity }: Props) => {

    return (
        <Pressable style={() => ({ ...styles.containerButon, backgroundColor: background, opacity: opacity ? 0.5 : 1 })}>
            <Icon name={icon} size={20} color={colorIcon} />
            <Text style={{ ...styles.title, color: colortext }}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    containerButon: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 15,
        opacity: 1,
        borderColor: 'Black',
        alignItems: 'center',
        width: 130,
        height: 45,
        paddingHorizontal: 10,
        marginLeft: 20,
        marginRight: 0,
        marginBottom: 40,

    },
    icono: {
        width: 40,
        height: 40,
        color: '#FFF',
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 16,
        flex: 2,
        fontWeight: 'bold',
        marginLeft: 12
    }
})

export default BotonSection