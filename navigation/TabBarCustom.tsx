import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Option from '../components/Option'

const TabBarCustom = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.footer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel ?? options.title ?? route.name;
                const isFocused = state.index === index;

                // Definir ícono según el nombre de la ruta
                let iconName;
                switch (route.name) {
                    case 'home':
                        iconName = 'home';
                        break;
                    case 'search':
                        iconName = 'search-outline';
                        break;
                    case 'setting':
                        iconName = 'grid-outline';
                        break;
                    case 'shop':
                        iconName = 'bag-handle-outline';
                        break;
                    case 'profile':
                        iconName = 'person-outline';
                        break;
                }

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    //   <TouchableOpacity
                    //     key={index}
                    //     accessibilityRole="button"
                    //     accessibilityState={isFocused ? { selected: true } : {}}
                    //     onPress={onPress}
                    //     style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}
                    //   >
                    //     <Icon name={iconName} size={24} color={isFocused ? '#673ab7' : '#222'} />
                    //     <Text style={{ color: isFocused ? '#673ab7' : '#222', fontSize: 12 }}>{label}</Text>
                    //   </TouchableOpacity>


                    <Option icono={iconName} key={index} label={label} onPress={onPress} />


                );
            })}

            {/* <Option icono='home' />
            <Option icono='search-outline' />
            <Option icono='grid-outline' background colorIcon />
            <Option icono='bag-handle-outline' />
            <Option icono='person-outline' /> */}
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
export default TabBarCustom