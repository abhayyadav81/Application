import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{padding: 20, marginTop: 70}}>
                <Text style={styles.logintext}>Here To Get</Text>
                <Text style={styles.suggestion}>Welcomed !</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} multiline={true} />
            </View>
            <View style={{ padding: 20 }}>
                <Text style={styles.text}>password</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={{ padding: 20, flexDirection: 'row' }}>
                <Text style={styles.signintext}>Sign in</Text>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('DashboardScreen')}>
                    <Ionicons name="arrow-forward-circle" size={60} color="#0041C2" />
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity style={styles.button2} >
                    <Text style={{ color: '#0041C2', borderBottomWidth: 1 }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white',
    },
    color: {
        color: 'black'
    },
    logintext: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0041C2',
    },
    suggestion: {
        fontSize: 30,
        // marginTop: 10,
        color: "#0041C2",
        fontWeight: 'bold'
    },
    inputView: {
        padding: 20,
        marginTop: 10
    },
    text: {
        fontSize: 18,
        color: 'black'
    },
    input: {
        backgroundColor: 'white',
        fontSize: 15,
        padding: 1,
        borderBottomWidth: 1
    },
    button1: {
        justifyContent: 'center', alignItems: 'flex-end', flexGrow: 1, marginTop: -10
    },
    button2: {
        justifyContent: 'center', alignItems: 'flex-end', flexGrow: 1, padding: 20, marginTop: 20
    },
    signintext: {
        fontSize: 22,
        color: '#0041C2',
        fontWeight: 'bold'
    }
})