import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function ButtonAdd({ ...rest }: RectButtonProps) {
    const navigation = useNavigation()

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (
        <RectButton
            style={styles.container}
            onPress={handleAppointmentCreate}
        >
            <MaterialCommunityIcons
                name='plus'
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    )
}