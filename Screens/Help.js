import { useState } from 'react';
import { COLOURS } from './Database';
import call from 'react-native-phone-call';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const Help = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

    const [inputValue, setinputValue] = useState('000000')

    const triggerCall = () => {
        const args = {
            number: inputValue,
            prompt: true,
        }
        call(args).catch(console.error);
    }

    return (
        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <View style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }}>


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
                <TouchableOpacity activeOpacity={0.6}>
                    <View style={{ paddingHorizontal: 20, paddingBottom: 7, borderBottomColor: isDarkMode ? COLOURS.white : COLOURS.black, borderBottomWidth: 2, width: 200 }}>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 17, fontFamily: 'Inter-Medium', letterSpacing: .1 }}>Help</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 40, marginHorizontal: 30, }}>
                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', }} onPress={triggerCall}>
                        <FontAwesome5 name='phone-alt' style={{ fontSize: 22, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                        <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, paddingLeft: 20, fontSize: 16 }}>Call </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
                        <MaterialCommunityIcons name='email' style={{ fontSize: 22, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                        <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, paddingLeft: 20, fontSize: 16 }}>Email </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Feedback')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
                        <MaterialCommunityIcons name='message-alert' style={{ fontSize: 22, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                        <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, paddingLeft: 20, fontSize: 16 }}>Send Feedback </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('TermsandCondition')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
                        <MaterialCommunityIcons name='book-edit' style={{ fontSize: 22, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                        <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, paddingLeft: 20, fontSize: 16 }}>Terms of Feedback </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Privacy')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
                        <MaterialCommunityIcons name='shield-alert' style={{ fontSize: 22, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                        <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, paddingLeft: 20, fontSize: 16 }}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
                        <MaterialCommunityIcons name='account-cancel' style={{ fontSize: 24, color: isDarkMode ? COLOURS.white : COLOURS.black }} />
                        <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, paddingLeft: 20, fontSize: 16 }}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Help

const styles = StyleSheet.create({})