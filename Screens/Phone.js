import React from 'react'
import { COLOURS } from './Database';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import CountryCode from './CountryCode';

const Phone = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (

        <View style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }}>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 17, marginTop: 40, marginBottom: 10, marginHorizontal: 20, fontFamily: 'Inter-Medium' }}>
                Your Number
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 10, }}>
                {/* <TextInput placeholder='+92' placeholderTextColor={'grey'} keyboardType={'numeric'}
                    style={{ elevation: 10, width: 80, backgroundColor: COLOURS.white,color: COLOURS.black, borderRadius: 5 }}
                /> */}
                <View style={{width:100, top:-15}}>
                    <CountryCode />
                </View>
                <TextInput placeholder='Phone Number' placeholderTextColor={'grey'} keyboardType={'numeric'}
                    style={{
                        width: 230, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                        fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                    }}
                />
            </View>

            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('UsernameEmail')} style={{
                backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black,
                paddingHorizontal: 10,
                paddingVertical: 16, borderRadius: 50, marginHorizontal: 20,
                marginTop: 40,
            }}>
                <Text style={{
                    fontFamily: 'Inter-Medium', letterSpacing: 0.2,
                    color: isDarkMode ? COLOURS.black : COLOURS.white,
                    textAlign: 'center', letterSpacing: 1
                }}>Next</Text>
            </TouchableOpacity>

        </View>

    )
}

export default Phone;