import { View, Text, StyleSheet, Pressable, PressableStateCallbackType } from 'react-native';
import React from 'react'
import Icon from '@react-native-vector-icons/ionicons'
import Home from '../views/Home';


interface Props {
    background?: boolean,
    icono: string,
    colorIcon?: boolean,
    label?: string,
    onPress: () => void,

}


const Option = ({ background = false, icono, colorIcon = false, label, onPress }: Props) => {
    return (

        label === 'setting' ?
            <Pressable
                onPress={onPress}
                style={({ pressed }: PressableStateCallbackType) => [{
                    ...styles.icon,
                    backgroundColor: 'black',
                    opacity: pressed ? 0.5 : 1,
                    shadowColor: pressed && 'blue',
                    shadowRadius: pressed ? 80 : 0

                }]}
            >
                <Icon name={icono} size={30} color={'#fff'} />

            </Pressable>

            :
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [{
                    ...styles.icon,
                    backgroundColor: '#FFF',
                    opacity: pressed ? 0.5 : 1,
                    shadowColor: pressed && 'blue',
                    shadowRadius: pressed ? 80 : 0

                }]}
            >
                <Icon name={icono} size={30} color={colorIcon ? '#FFF' : 'blakc'} />
                {/* <Text>{label}</Text> */}
            </Pressable>





    )
}
const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'black',
        borderRadius: 50,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'

    }

})

export default Option

// Home
// search
// shop
// setting
// profile