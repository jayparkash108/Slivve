import React from 'react';
import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const Follow = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <ScrollView style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white }}>
                <View style={{
                    backgroundColor: COLOURS.white, elevation: 1, flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', marginHorizontal: 20, paddingHorizontal: 12, borderRadius: 10,
                    marginTop: 30, color: COLOURS.black
                }}>
                    <TextInput keyboardType='text' placeholder='search' placeholderTextColor={'grey'} style={{ width: 250,fontFamily:'Inter-Medium' }} />
                    <FontAwesome5 name='search' style={{ color: COLOURS.grey, fontSize:15, }} />
                </View>

                <View style={{ marginBottom: 60, marginTop:10}}>

                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                             marginHorizontal: 15,
                            paddingVertical: 0, marginTop: 20, paddingHorizontal: 12, borderRadius: 10, 
                        }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <Image source={require('../images/profile-real-7.png')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                            <View style={{ right: 10 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Leoni Zen Phli</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Zain_fiyrre Z 564</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ borderColor: isDarkMode ? COLOURS.white : COLOURS.black, borderWidth: 1, paddingHorizontal: 10, padding: 2, height: 26, borderRadius: 5 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12, }}>Subscribe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Ionicons name='heart-outline' style={{ fontSize: 30, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                             marginHorizontal: 15,
                            paddingVertical: 0, marginTop: 20, paddingHorizontal: 12, borderRadius: 10, 
                        }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <Image source={require('../images/profile-real-4.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                            <View style={{ right: 10 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Leoni Zen Phli</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Zain_fiyrre Z 564</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ borderColor: isDarkMode ? COLOURS.white : COLOURS.black, borderWidth: 1, paddingHorizontal: 10, padding: 2, height: 26, borderRadius: 5 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12, }}>Subscribe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Ionicons name='heart-outline' style={{ fontSize: 30, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.9}
                        style={{
                             marginHorizontal: 15,
                            paddingVertical: 0, marginTop: 20, paddingHorizontal: 12, borderRadius: 10, 
                        }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <Image source={require('../images/profile-real-5.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                            <View style={{ right: 10 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Leoni Zen Phli</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Zain_fiyrre Z 564</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ borderColor: isDarkMode ? COLOURS.white : COLOURS.black, borderWidth: 1, paddingHorizontal: 10, padding: 2, height: 26, borderRadius: 5 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12, }}>Subscribe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Ionicons name='heart-outline' style={{ fontSize: 30, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>

    )
}

export default Follow

const styles = StyleSheet.create({})