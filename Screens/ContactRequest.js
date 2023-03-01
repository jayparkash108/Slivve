import React from 'react';
import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';


const ContactRequest = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <ScrollView style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white }}>

                <View style={{ marginHorizontal: 20, marginTop: 30, }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.blackish, fontFamily: 'Inter-Medium' }}>Today</Text>
                </View>

                <View style={{ marginBottom: 60, }}>

                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                            marginHorizontal: 15,backgroundColor:isDarkMode ? COLOURS.black : COLOURS.white,
                            paddingVertical: 15, marginTop: 15, paddingHorizontal: 12, borderRadius: 10, elevation: .4,
                        }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Image source={require('../images/profile-real.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }} />

                            <View style={{ right: 0, width:220, paddingHorizontal:5,}}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 13, fontFamily: 'Inter-Medium' }}>Request to contact you</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.backgroundMedium : COLOURS.grey, fontSize: 10, fontFamily: 'Inter-Medium' }}>Today 10 : 10 PM</Text>
                            </View>

                            {/*  */}
                            <View>
                                <Text></Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='checkbox-blank-circle' style={{ fontSize: 18, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>

                    <View style={{ marginHorizontal: 20, marginTop: 30, }}>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.blackish, fontFamily: 'Inter-Medium' }}>Yesterday</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                            marginHorizontal: 15,backgroundColor:isDarkMode ? COLOURS.black : COLOURS.white,
                            paddingVertical: 15, marginTop: 15, paddingHorizontal: 12, borderRadius: 10, elevation: .4,
                        }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Image source={require('../images/profile-real-2.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }} />

                            <View style={{ right: 0, width:220, paddingHorizontal:5, }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 13, fontFamily: 'Inter-Medium' }}>Request to contact you</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.backgroundMedium : COLOURS.grey, fontSize: 10, fontFamily: 'Inter-Medium' }}>Today 11 : 09 PM</Text>
                            </View>

                            {/*  */}
                            <View>
                                <Text></Text>
                            </View>
                            {/*  */}

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='checkbox-blank-circle' style={{ fontSize: 18, color: isDarkMode ? COLOURS.white : COLOURS.blackish }} />
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default ContactRequest

const styles = StyleSheet.create({})