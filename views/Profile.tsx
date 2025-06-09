import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import TextField from '../components/TextField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Profile = () => {

    const curpRegex = /^[A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z\d]\d$/;

    const schema = yup.object({
        name: yup.string().required('Campo Obligatorio...'),
        lastname: yup.string().required('Campo obligatorio...'),
        age: yup.number().required('Campo requerido').positive().min(18, 'No puedes usar esta app'),
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

    }


    return (
        <Container>
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
                control={control} />

            <Button title='Guardar' onPress={handleSubmit(onSubmit)} />
        </Container>
    )
}

export default Profile

const styles = StyleSheet.create({})