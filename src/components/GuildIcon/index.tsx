import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export function GuildIcon() {
    const uri = 'https://usa.governmentjobswork.com/wp-content/uploads/sites/2/2020/11/Discord.png'

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode='cover'
        />
    )
}