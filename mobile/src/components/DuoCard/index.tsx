import { View, TouchableOpacity, Text } from 'react-native'

import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from "./styles";

export interface DuoCardProps {
    id: string,
    name: string,
    weekDays: string,
    useVoiceChannel: boolean,
    yearsPlaying: number,
    hourStart: string,
    hourEnd: string,
}

interface Props {
    data: DuoCardProps
    onConnect: () => void
}

export function DuoCard({data, onConnect}: Props) {
    return (
        <View style={styles.container}>
            <DuoInfo 
                label="Nome"
                value={data.name}
            />
            <DuoInfo 
                label="Tempo de Jogo"
                value={`${data.yearsPlaying} anos`}
            />
            <DuoInfo 
                label="Disponibilidade"
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />
            <DuoInfo 
                label="Chamada de Áudio"
                value={data.useVoiceChannel ? "Sim" : "Não"}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />
            <TouchableOpacity 
            style={styles.button}
            onPress={onConnect}>
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>
        </View>
    )
}
