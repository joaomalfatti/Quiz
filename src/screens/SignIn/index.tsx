import React from "react";
import { 
    View,
    Text,
    Image,
    StatusBar,
    Button,
}from 'react-native';

import {Text_Input} from "../../components/Text_Input";
import { Button_Entrar } from "../../components/Button_Entrar";
import {Button_Registrar} from "../../components/Button_Registrar";
import IllustrationImg from '../../assets/logo_branca.png';
import {styles} from "./styles"
import { LinearGradient } from "expo-linear-gradient";

export function SignIn(){
    return (
        <View style={styles.container}>
            
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
                
            />

            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={styles.ContainerImage}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />
            </View>

            <View>
                <Text_Input />
            </View>

            <View style={styles.containerCadastro}>
                <Text style={styles.texto_registrar}>Não possui conta?</Text><Button_Registrar />
            </View>
            <View>
                <Button_Entrar />
            </View>
         </View> 
    );
};