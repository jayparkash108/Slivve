import React from 'react';
import { COLOURS } from './Database';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'

const Home = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            {/* <ScrollView style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }} showsVerticalScrollIndicator={false}> */}

            <View style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10, }}>
                    <Image source={require('../images/original-slivve.png')}
                        style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, elevation: 41 }} resizeMode='contain'
                        tintColor={isDarkMode ? COLOURS.white : null} />
                </View>

                <View style={{ marginHorizontal: 30, }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginBottom: 20, fontFamily: 'Inter-Medium' }}>Email, Phone Number Or Username</Text>
                    <TextInput placeholder='Enter, Your Email Or User Name'
                        placeholderTextColor={'grey'} placeholderTextSize={10}
                        style={styles.input_1}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 30, }}>

                    <Text style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, width: 130, height: 1.5, }}></Text>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 12, }}>OR</Text>
                    <Text style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, width: 130, height: 1.5, }}></Text>
                </View>

                <View style={{ marginHorizontal: 20 }}>

                    <TouchableOpacity activeOpacity={0.6} style={{
                        flexDirection: 'row', alignItems: 'center', marginVertical: 10,
                        backgroundColor: isDarkMode ? COLOURS.lightblack : COLOURS.white, elevation: .4, height:61, paddingHorizontal: 20,
                        borderRadius: 35
                    }}>
                        <Image source={require('../images/google.png')}
                            style={{ height: 40, width: 40 }} />
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginLeft: 10, fontFamily: 'Inter-Medium' }}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={{
                        flexDirection: 'row', alignItems: 'center', marginVertical: 10,
                        backgroundColor: isDarkMode ? COLOURS.lightblack : COLOURS.white, elevation: .4, height:61, paddingHorizontal: 20,
                        borderRadius: 35
                    }}>
                        <Image source={require('../images/facebook.png')}
                            style={{ height: 40, width: 40 }} />
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginLeft: 10, fontFamily: 'Inter-Medium' }}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{
                        flexDirection: 'row', alignItems: 'center', marginVertical: 5,
                        backgroundColor: isDarkMode ? COLOURS.lightblack : COLOURS.white, elevation: .4, height:61, paddingHorizontal: 20,
                        borderRadius: 35
                    }}>
                        <Image source={require('../images/instagram.png')}
                            style={{ height: 40, width: 40 }} />
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginLeft: 10, fontFamily: 'Inter-Medium' }}>Continue with Instagram</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('Login2')} style={{
                    backgroundColor: isDarkMode ? COLOURS.backgroundLight : COLOURS.black,height:63, borderRadius: 50, marginHorizontal: 20,
                    marginTop: 20, padding:20
                }}>
                    <Text style={{ color: isDarkMode ? COLOURS.black : COLOURS.white, fontFamily: 'Inter-Medium', letterSpacing: 0.2, textAlign: 'center' }}>Skip Registration</Text>
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', alignItems: 'center', top: 70 }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('Login2' , 'UsernameEmail')}>
                        <Text style={{ color: isDarkMode ? COLOURS.backgroundDark : COLOURS.backgroundDark, fontSize: 13, fontFamily: 'Inter-Medium' }}>Already Have An Acount ?
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Bold', fontSize: 12 }}> Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </ScrollView> */}
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    input_1: {
        width: 300,
        height:54,
        elevation: .4,
        fontSize: 12,
        borderRadius: 12,
        color: COLOURS.black,
        paddingHorizontal: 10,
        fontFamily: 'Inter-Medium',
        backgroundColor: COLOURS.white
    },
})