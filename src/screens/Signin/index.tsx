import React from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native'

import { useAuth } from '../../hooks/auth'

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

export function Signin() {
    const { loading, signIn } = useAuth()

    async function handleSignin() {
        try {
            await signIn()
        } catch (e) {
            Alert.alert(e)
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode='stretch'
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se{'\n'}
                        e organize suas{'\n'}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>
                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} /> :
                            <ButtonIcon
                                title='Entrar com Discord'
                                onPress={(handleSignin)}
                            />}
                </View>

            </View>
        </Background>
    )
}