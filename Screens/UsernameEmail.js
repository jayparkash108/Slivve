import React from 'react'
import { COLOURS } from './Database';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const UsernameEmail = ({navigation}) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={{backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white,  height: '100%' }}>

            <View style={{ marginTop: 30, marginHorizontal: 20, }}>
                
                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 16 }}>Email Or Username</Text>
                <TextInput placeholder='Enter Your Email or username' placeholderTextColor={'grey'}
                    style={{
                        width: '100%', marginTop: 15, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                        fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                    }}
                />
            </View>
            <View style={{ marginTop: 30, marginHorizontal: 20, }}>
                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 16 }}>Password</Text>
                <TextInput placeholder='Enter Your Password' placeholderTextColor={'grey'} keyboardType={'password'} secureTextEntry
                    style={{
                        width: '100%', marginTop: 15, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                        fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                    }}
                />
            </View>
            <View style={{ marginHorizontal: 20, alignItems: 'flex-end', }}>
                <TouchableOpacity style={{ paddingTop: 10, width: 140, }} onPress={()=> navigation.navigate('NewPassword')}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>Forget Password ?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('VerifyCode')} style={{
                backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black,
                paddingHorizontal: 10,
                paddingVertical: 16, borderRadius: 50, marginHorizontal: 20,
                marginTop: 40,
            }}>
                <Text style={{
                    fontFamily: 'Inter-Medium', letterSpacing: 0.2,
                    color: isDarkMode ? COLOURS.black : COLOURS.white,
                    textAlign: 'center', letterSpacing: 1
                }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UsernameEmail;
