import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        padding: 34,
        paddingHorizontal: 47,
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },  

    image: {
        width: 300,
        height: 250,      
    }, 
    ContainerImage: {
        alignItems: 'center',
    },
    ContainerGeral: {
        display: 'flex',
        justifyContent: "space-around",
        paddingHorizontal: 0
    },
    texto_registrar:{
        color:'#B7B7B7',
        marginTop: 80,

    },
    containerCadastro: {
        flexDirection: 'row'
    }
});