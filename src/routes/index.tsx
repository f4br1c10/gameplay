import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/auth'

import { Signin } from '../screens/Signin'
import { AppRoutes } from './api.routes'

export function Routes() {
    const { user } = useAuth()

    return (
        <NavigationContainer>
            {user.id ? <AppRoutes /> : <Signin />}
        </NavigationContainer>
    )
}