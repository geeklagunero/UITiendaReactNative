import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BotonSection from './BotonSection'

const Sections = () => {
    return (
        <View style={{ height: 50 }}>
            <ScrollView horizontal>
                <BotonSection title='Armchair' icon='easel-outline' colortext='#FFF' background='black' colorIcon='#FFF' />
                <BotonSection title='Bed' icon='bed-outline' colortext='#808080' background='white' colorIcon='#808080' opacity />
                <BotonSection title='Computer' icon='laptop-outline' colortext='#808080' background='white' colorIcon='#808080' opacity />
                <BotonSection title='Bed' icon='bed-outline' colortext='#808080' background='white' colorIcon='#808080' opacity />

            </ScrollView>
        </View>
    )
}

export default Sections