import { View, Text, StyleSheet } from 'react-native'
import React, { ReactElement } from 'react'

interface Props {
    children: ReactElement[];
}

const Container = ({ children }: Props) => {

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            gap: 20

        }
    });


    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Container