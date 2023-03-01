import React from 'react';
import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const Payment = ({navigation}) => {

    const isDarkMode = useColorScheme() === 'dark';
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }}>
                <View style={{
                    marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    marginHorizontal: 25, borderBottomWidth: .7, borderBottomColor: COLOURS.grey, paddingBottom: 10,
                }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, width: 100,fontFamily:'Inter-Medium' }}>Users</Text>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily:'Inter-Medium' }}>Date</Text>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily:'Inter-Medium' }}>Amount</Text>
                </View>

                <View>
                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                             marginHorizontal: 15,
                            paddingVertical: 3, marginTop: 20, paddingHorizontal: 5, borderRadius: 10,marginBottom:0,
                        }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <Image source={require('../images/profile-real.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                            <View style={{ right: 10 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Leoni Zen Phli</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Zain_fiyrre Z 564</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ paddingHorizontal: 10, padding: 2, height: 26, borderRadius: 5 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12,right:10,}}> 23/10/22</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={{paddingHorizontal:10, paddingVertical:10, borderRadius:10}}>
                                <Text style={{fontFamily:'Inter-Medium',  color: isDarkMode ? COLOURS.white : COLOURS.black,}}>$.99</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                             marginHorizontal: 15,
                            paddingVertical: 3, marginTop: 10, paddingHorizontal: 5, borderRadius: 10,marginBottom:0,
                        }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <Image source={require('../images/profile-real-2.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                            <View style={{ right: 10 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Leoni Zen Phli</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Zain_fiyrre Z 564</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ paddingHorizontal: 10, padding: 2, height: 26, borderRadius: 5 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12,right:10, }}> 13/10/22</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={{paddingHorizontal:10, paddingVertical:10, borderRadius:10}}>
                                <Text style={{fontFamily:'Inter-Medium',  color: isDarkMode ? COLOURS.white : COLOURS.black,}}>$5.5</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                             marginHorizontal: 15,
                            paddingVertical: 3, marginTop: 10, paddingHorizontal: 5, borderRadius: 10,marginBottom:0,
                        }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <Image source={require('../images/profile-real-4.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }}/>
                            <View style={{ right: 10 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Leoni Zen Phli</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Zain_fiyrre Z 564</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ paddingHorizontal: 10, padding: 2, height: 26, borderRadius: 5 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12,right:10, }}> 13/10/22</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={{paddingHorizontal:10, paddingVertical:10, borderRadius:10}}>
                                <Text style={{fontFamily:'Inter-Medium',  color: isDarkMode ? COLOURS.white : COLOURS.black,}}>$3.41</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                             marginHorizontal: 15,
                            paddingVertical: 3, marginTop: 10, paddingHorizontal: 5, borderRadius: 10,marginBottom:0,
                        }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <Image source={require('../images/profile-real-3.png')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                            <View style={{ right: 10 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Leoni Zen Phli</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontSize: 11, fontFamily: 'Inter-Medium' }}>Zain_fiyrre Z 564</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ paddingHorizontal: 10, padding: 2, height: 26, borderRadius: 5 }}>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12,right:10, }}> 18/5/22</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate('NotificationSection')} activeOpacity={0.6} style={{paddingHorizontal:10, paddingVertical:10, borderRadius:10}}>
                                <Text style={{fontFamily:'Inter-Medium',  color: isDarkMode ? COLOURS.white : COLOURS.black,}}>$7.39</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </>
    )
}

export default Payment

const styles = StyleSheet.create({})