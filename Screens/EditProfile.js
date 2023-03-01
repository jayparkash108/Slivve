import React from 'react';
import Currency from './Currency';
import { COLOURS } from './Database';
import StreamLanguage from './StreamLanguage';
import StreamCategory from './StreamCategory';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, StatusBar, useColorScheme, TextInput, ScrollView } from 'react-native';


export default function EditProfile({ navigation }) {

    const isDarkMode = useColorScheme() === 'dark';

    return (

        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <View style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, marginTop: 10, marginHorizontal: 10, }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 40, }} />
                    </TouchableOpacity>
                    <Image source={require('../images/original-slivve.png')}
                        style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, justifyContent: 'center', }} resizeMode='contain'
                        tintColor={isDarkMode ? COLOURS.white : null} />
                    <View style={{ width: 20 }}>
                        <Text></Text>
                    </View>
                </View>
                <ScrollView style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>
                    <TouchableOpacity activeOpacity={0.6}>
                        <View style={{ paddingHorizontal: 20, paddingBottom: 7, borderBottomColor: isDarkMode ? COLOURS.white : COLOURS.black, borderBottomWidth: 2, width: 200 }}>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 17, fontFamily: 'Inter-Medium', letterSpacing: .1 }}>My Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: 30, marginHorizontal: 20, }}>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>Your Name</Text>
                        <TextInput defaultValue='Israr Hussain'
                            style={{
                                width: '100%', marginTop: 10, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                                fontFamily: 'Inter-Medium', color: COLOURS.blackish, borderRadius: 5
                            }}
                        />

                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginTop: 20, fontFamily: 'Inter-Medium' }}>Card Number</Text>
                        <TextInput defaultValue='23093'
                            style={{
                                width: '100%', marginTop: 10, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                                fontFamily: 'Inter-Medium', color: COLOURS.blackish, borderRadius: 5
                            }}
                        />
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginTop: 20, fontFamily: 'Inter-Medium' }}>Profile Description</Text>
                        <TextInput defaultValue='About You, Estimated Schedule, Media Links, Etcetera...' keyboardType={'text'} multiline={true} numberOfLines={5}
                            style={{
                                width: '100%', marginTop: 15, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                                fontFamily: 'Inter-Medium', color: COLOURS.blackish, borderRadius: 5, textAlignVertical: 'top'
                            }}
                        />
                    </View>

                    {/*  */}
                    <View style={{ marginTop: 30, flexDirection: 'row', }}>

                        <View style={{ flexDirection: 'column', }}>
                            <View><Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', marginHorizontal: 20, }}>Stream Category</Text></View>
                            <StreamCategory />
                        </View>

                        <View style={{ flexDirection: 'column', }}>
                            <View><Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', marginHorizontal: 20, }}>Stream Category</Text></View>
                            <StreamLanguage />
                        </View>
                    </View>
                    {/*  */}

                    {/*  */}
                    <View style={{ marginTop: 30,  flexDirection: 'row', }}>

                        <View style={{marginHorizontal: 15}}>
                            <View><Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, paddingTop: 12, fontFamily: 'Inter-Medium', }}>MemberShip Cost</Text></View>
                            <View><Text style={{
                                color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', paddingTop: 10,
                                textAlign:'center', fontSize:11, marginHorizontal: 0,
                            }}>(Apply For New Subscriber)</Text></View>
                        </View>

                        <View style={{marginRight:30}}>
                            <Currency />
                        </View>

                    </View>
                    {/*  */}

                    <TouchableOpacity activeOpacity={0.6} style={{
                        backgroundColor: isDarkMode ? COLOURS.backgroundLight : COLOURS.black,
                        paddingHorizontal: 10,
                        paddingVertical: 16, borderRadius: 50, marginHorizontal: 20,
                        marginVertical: 30,marginBottom:70,
                    }}>
                        <Text style={{
                            fontFamily: 'Inter-Medium', letterSpacing: 0.2,
                            color: isDarkMode ? COLOURS.black : COLOURS.white,
                            textAlign: 'center', letterSpacing: 1
                        }}>Update Profile</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </>
    )
}