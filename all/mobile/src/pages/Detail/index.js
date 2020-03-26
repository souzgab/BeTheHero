import React from 'react';
import {Feather} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity} from 'react-native';
import * as mailCompose from 'expo-mail-composer'
import {Linking} from 'react-native'

import logoImg from '../../assets/logo.png';
import styles from './styles';


export default function Details(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const message = `Olá, estou entrando em contato, desejo ajudar!.
    
    Me conte mais sobre o caso "${incident.title}", que se encontra na ONG ${incident.name}

    no valor de R$${incident.value}, na cidade de ${incident.city}/${incident.uf}`;

    function navigateBack(){
        navigation.navigate('Incidents');
    }

    function sendEmail(){
        mailCompose.composeAsync({
            subject: `Heroi do caso: ${incident.name}`,
            recipients: [incident.email],
            body: message,
        });    
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041"></Feather>
                </TouchableOpacity>    
            </View>

            <View style={styles.detailsIncident}>
                <Text style={styles.detailsProperty}>ONG:</Text>
                <Text style={styles.detailsValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                
                <Text style={styles.detailsProperty}>Caso:</Text>
                <Text style={styles.detailsValue}>{incident.title}</Text>

                <Text style={styles.detailsProperty}>Valor:</Text>
                <Text style={styles.detailsValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>
            
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói deste caso!</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                    <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.action} onPress={sendEmail}>
                <Text style={styles.actionText}>Email</Text>
                </TouchableOpacity> 
                </View>
            </View>
        </View>
    )
}