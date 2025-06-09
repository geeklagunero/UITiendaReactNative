import { Alert, Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import TextField from '../components/TextField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface Campos {
    name: string,
    lastname: string;
    age: number;
    curp: string;
    password: string;
}

const Profile = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [campos, setCampos] = useState({})

    const curpRegex = /^[A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z\d]\d$/;

    const schema = yup.object({
        name: yup.string().required('Campo Obligatorio...'),
        lastname: yup.string().required('Campo obligatorio...'),
        age: yup.number().integer("Numero entero").required('Campo Obligatorio...').min(18, 'No puedes usar esta app'),
        curp: yup.string().required('Campo requerido...').length(18, 'Deben ser 18 caracteres').matches(curpRegex, 'CURP no valida'),
        password: yup.string().min(6, 'mini 6 carateres').required('Campo Obligatorio'),


    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: any) => {
        console.log(data);
        setCampos(data);
        setModalVisible(true);

    }


    return (

        <Container>
            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal cerrado');
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{campos.name}</Text>
                    <Text>{campos.lastname}</Text>
                    <Text>{campos.age}</Text>
                    <Text>{campos.curp}</Text>
                    <Button title='cerrar' onPress={() => setModalVisible(!modalVisible)} />
                </View>
            </Modal>
            <TextField
                name='name'
                placeholder='Ingresa tu nombre...'
                control={control} />

            <TextField
                name='lastname'
                placeholder='Ingresa te apellido...'
                control={control} />

            <TextField
                name='age'
                placeholder='Ingresa tu edad...'
                control={control} />

            <TextField
                name='curp'
                placeholder='Ingresa tu CURP...'
                control={control} />

            <TextField
                name='password'
                placeholder='Ingresa tu pasword...'
                control={control}
                secure
            />

            <Button title='Guardar' onPress={handleSubmit(onSubmit)} />
        </Container>
    )
}

export default Profile

const styles = StyleSheet.create({})