import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, Image } from "react-native";

export default function Perfil(){


    return(
        <View style={styles.container}>
        <Text style={styles.text}>Perfil dos Desenvolvedores</Text>
        <View style={styles.developerContainer}>
            <Image
                source={require('../../assets/rennan-img.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Nome: Rennan Ferreira</Text>
            <Text style={styles.text}>E-mail: Rennancruz115@gmail.com</Text>
            <Text style={styles.text}>Especialidade: Front-end</Text>
        </View>
        <View style={styles.developerContainer}>
            <Image
                source={require('../../assets/jaisy-img.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Nome: Jaisy Cibele</Text>
            <Text style={styles.text}>E-mail: JaisyCibele2024@gmail.com</Text>
            <Text style={styles.text}>Especialidade: Back-end</Text>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    developerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
});