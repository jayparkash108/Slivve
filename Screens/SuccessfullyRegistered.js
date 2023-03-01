import React from 'react';
import { COLOURS } from './Database';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';


const SuccessfullyRegistered = ({navigation}) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10, }}>
                    <Image source={require('../images/original-slivve.png')}
                        style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, elevation: 41 }} resizeMode='contain'
                        tintColor={isDarkMode ? COLOURS.white : null} />
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../images/check.png')} style={{height:210, width:200}}
                    />
                    {/* <Image source={require('../images/gifcheck.gif')}
                    style={{height:200, width:200}}
                    /> */}
                </View>

                <View style={{ marginBottom: 50 }}>
                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, letterSpacing: .1, fontFamily: 'Inter-Bold', textAlign: 'center', fontSize: 20 }}>Congratulations</Text>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, letterSpacing: .1, fontFamily: 'Inter-Medium', marginTop: 15, textAlign: 'center', fontSize: 17 }}>
                            Successfully Registered
                        </Text>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.blue, letterSpacing: .1, fontFamily: 'Inter-Medium', marginTop: 15, textAlign: 'center', fontSize: 13.8 }}>
                            Congratulations You Have Successfully change your password
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('BottomNavigation')} activeOpacity={0.6} style={{
                    backgroundColor: isDarkMode ? COLOURS.backgroundLight : COLOURS.black,
                    paddingHorizontal: 10,
                    paddingVertical: 16, borderRadius: 50, marginHorizontal: 20,
                    marginTop: 100,
                }}>
                    <Text style={{
                        fontFamily: 'Inter-Bold', letterSpacing: 0.2,
                        color: isDarkMode ? COLOURS.black : COLOURS.white,
                        textAlign: 'center', letterSpacing: 1,fontSize:15,
                    }}>Thank You</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default SuccessfullyRegistered

const styles = StyleSheet.create({})