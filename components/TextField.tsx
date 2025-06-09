import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { Control, Controller, FieldValue, useForm } from 'react-hook-form';

interface Props {
    // onChangeText: (text: string) => void;
    type?: KeyboardTypeOptions;
    placeholder: string;
    // value?: string | number,
    // onBlur?: () => void;
    control: Control<any>,
    rules?: object;
    name: string;
    secure?: boolean;

}

const TextField = ({ type, placeholder, control, rules, name, secure }: Props) => {




    const styles = StyleSheet.create({
        input: {
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#000',
            paddingHorizontal: 20,
            height: 60,
            fontSize: 20
        }
    })



    return (

        <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        placeholderTextColor={'gray'}
                        keyboardType={type ? type : 'default'}
                        onChangeText={onChange}
                        value={value?.toString()}
                        onBlur={onBlur}
                        secureTextEntry={secure}
                    />
                    {error && <Text>{error.message}</Text>}
                </>

            )}
            name={name}
        />



    )
}

export default TextField