import { useState } from 'react'
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard';

import { CheckCircle } from 'phosphor-react-native'

import { styles } from "./styles";
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest}: Props) {

    const [isCopping, setIsCopping] = useState(false)

async function handleCopyDiscordUserToClipBoard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert('Discord Copiado!', 'Usuário copiado para encontrá-lo no Discord')
    setIsCopping(false)
}
    return (
        <Modal 
        transparent
        statusBarTranslucent
        animationType="fade"
        {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                    style={styles.closeIcon}
                    onPress={onClose}
                    >
                        <MaterialIcons
                        name="close"
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>
                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        title="Let's play"
                        subtitle="Agora é só começar a jogar"
                        style={{alignItems: 'center', marginTop: 24}}
                    />

                    <Text style={styles.label}>
                        Adicione no discord
                    </Text>
                    <TouchableOpacity
                    style={styles.discordButton}
                    onPress={handleCopyDiscordUserToClipBoard}
                    disabled={isCopping}
                    >
                        <Text style={styles.title}>
                        {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord }
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}