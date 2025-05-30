import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '@react-native-vector-icons/ionicons'


interface Props {
    background?: boolean,
    icono: string,
    colorIcon?: boolean,
}


const Option = ({ background, icono, colorIcon }: Props) => {
    return (
        <View style={{ ...styles.icon, backgroundColor: background ? 'black' : '#FFF' }}>
            <Icon name={icono} size={30} color={colorIcon ? '#FFF' : 'blakc'} />
        </View>




    )
}
const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'blue',
        borderRadius: 50,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default Option