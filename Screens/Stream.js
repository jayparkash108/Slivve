import React from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, StatusBar, useColorScheme, TextInput, ScrollView } from 'react-native';
import { COLOURS } from './Database';
export default function Stream() {

    const isDarkMode = useColorScheme() === 'dark';

    return (

        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <View style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10, }}>
                    <Image source={require('../images/original-slivve.png')}
                        style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, elevation: 41 }} resizeMode='contain'
                        tintColor={isDarkMode ? COLOURS.white : null} />
                </View>
                <ScrollView style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>
                    <TouchableOpacity activeOpacity={0.6}>
                        <View style={{ paddingHorizontal: 20, paddingBottom: 7, borderBottomColor: isDarkMode ? COLOURS.white : COLOURS.black, borderBottomWidth: 2, width: 200 }}>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 17, fontFamily: 'Inter-Medium', letterSpacing: .1 }}>Stream</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 30, marginHorizontal: 20, }}>

                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 16 }}>Name</Text>
                        <TextInput placeholder='Stream Name here' placeholderTextColor={'grey'} keyboardType={'numeric'}
                            style={{
                                width: '100%', marginTop: 15, height: 48, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                                fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5,height:45,
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 20, marginHorizontal: 20, marginBottom: 10, }}>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 16 }}>Description</Text>
                        <TextInput placeholder='Description Here' placeholderTextColor={'grey'} keyboardType={'text'} /* multiline={true} numberOfLines={5} */
                            style={{
                                width: '100%', marginTop: 15, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                                fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5, textAlignVertical: 'top', height:45,
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 110, }}>
                        <Text style={{
                            color: isDarkMode ? COLOURS.white : COLOURS.blackish, letterSpacing: .1, top: 8,
                            fontFamily: 'Inter-Medium', marginTop: 20, textAlign: 'center', fontSize: 13, paddingHorizontal: 30, letterSpacing: .1
                        }}>
                            All streams include 30 seconds.
                        </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.blackish, fontFamily: 'Inter-Medium', fontSize: 13, }}>Do you want to stream for free ?</Text>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Bold', textDecorationLine: 'underline' }}> Click Here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity activeOpacity={0.6} style={{
                        backgroundColor: isDarkMode ? COLOURS.orange : COLOURS.orange,
                        paddingHorizontal: 10,
                        paddingVertical: 18, borderRadius: 50, marginHorizontal: 20,
                        marginTop: 10,
                    }}>
                        <Text style={{
                            fontFamily: 'Inter-Medium', letterSpacing: 0.2,
                            color: isDarkMode ? COLOURS.white : COLOURS.white,
                            textAlign: 'center', letterSpacing: 1
                        }}>Start</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </>
    )
}