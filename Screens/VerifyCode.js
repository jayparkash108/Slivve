import React from 'react';
import { COLOURS } from './Database';
import { Image, StatusBar, StyleSheet, TouchableOpacity, Text, useColorScheme, View, TextInput } from 'react-native'

const VerifyCode = ({navigation}) => {
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

                <View style={{ marginHorizontal: 20, marginTop:20 }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, letterSpacing: .1, fontFamily: 'Inter-Bold', textAlign: 'center', fontSize: 22 }}>Verify Code</Text>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, letterSpacing: .1, fontFamily: 'Inter-Medium', marginTop: 20, textAlign: 'center' }}>
                        The confirmation code was send on your Phone number 
                    </Text>
                </View>

                <View style={{marginHorizontal:10, marginTop:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TextInput keyboardType='numeric' maxLength={1} style={{backgroundColor:COLOURS.white, color:COLOURS.black, elevation:1.5, width:48, height:45, borderRadius:10, fontSize:19,textAlign:'center'}}/>
                    <TextInput keyboardType='numeric' maxLength={1} style={{backgroundColor:COLOURS.white, color:COLOURS.black, elevation:1.5, width:48, height:45, borderRadius:10, fontSize:19,textAlign:'center'}}/>
                    <TextInput keyboardType='numeric' maxLength={1} style={{backgroundColor:COLOURS.white, color:COLOURS.black, elevation:1.5, width:48, height:45, borderRadius:10, fontSize:19,textAlign:'center'}}/>
                    <TextInput keyboardType='numeric' maxLength={1} style={{backgroundColor:COLOURS.white, color:COLOURS.black, elevation:1.5, width:48, height:45, borderRadius:10, fontSize:19,textAlign:'center'}}/>
                    <TextInput keyboardType='numeric' maxLength={1} style={{backgroundColor:COLOURS.white, color:COLOURS.black, elevation:1.5, width:48, height:45, borderRadius:10, fontSize:19,textAlign:'center'}}/>
                    <TextInput keyboardType='numeric' maxLength={1} style={{backgroundColor:COLOURS.white, color:COLOURS.black, elevation:1.5, width:48, height:45, borderRadius:10, fontSize:19,textAlign:'center'}}/>
                </View>

                <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('SuccessfullyRegistered')} style={{
                    backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black,
                    paddingHorizontal: 10,
                    paddingVertical: 16, borderRadius: 50, marginHorizontal: 20,
                    marginTop: 40,
                }}>
                    <Text style={{
                        fontFamily: 'Inter-Medium', letterSpacing: 0.2,
                        color: isDarkMode ? COLOURS.black : COLOURS.white,
                        textAlign: 'center', letterSpacing: 1
                    }}>Confirm</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ paddingTop: 10, width: '100%', marginTop: 10, }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, letterSpacing: 1, fontFamily: 'Inter-Bold', textAlign: 'center' }}>Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingTop: 10, width: '100%', marginTop: 10, }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, letterSpacing: .1, fontFamily: 'Inter-Medium', textAlign: 'center' }}>
                        Didn't get a code? <Text style={{ color: COLOURS.red }}>Request to call</Text>
                    </Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

export default VerifyCode

const styles = StyleSheet.create({})