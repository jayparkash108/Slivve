import React from 'react'
import Phone from './Phone';
import { COLOURS } from './Database';
import UsernameEmail from './UsernameEmail';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const Login2 = ({navigation}) => {

    const isDarkMode = useColorScheme() === 'dark';
    const Tab = createMaterialTopTabNavigator();

    return (
        <>

            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <View style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10, }}>
                    <Image source={require('../images/original-slivve.png')}
                        style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, elevation: 41 }} resizeMode='contain'
                        tintColor={isDarkMode ? COLOURS.white : null} />
                </View>

            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: isDarkMode ? COLOURS.white : COLOURS.black,
                    tabBarInactiveTintColor: isDarkMode ? COLOURS.white : COLOURS.black,
                    backgroundColor: '#fff',
                   
                    tabBarStyle: {
                        backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white,
                    },

                    tabBarIndicatorStyle: {
                        height:1.5,
                        borderColor: isDarkMode ? COLOURS.white : COLOURS.black,
                        backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black,
                        // width: 150,
                        // marginLeft: 28,

                    },
                    tabBarLabelStyle: {
                        fontSize: 11, fontFamily: 'Inter-Medium',
                        color: isDarkMode ? COLOURS.white : COLOURS.black,
                    },
                }}
            >
                <Tab.Screen name="Phone" component={Phone} options={{ tabBarLabel:'Phone Number'}} />
                <></>
                <Tab.Screen name="UsernameEmail" component={UsernameEmail} options={{ tabBarLabel: 'Email / Username', }} />
            </Tab.Navigator>
            {/* </NavigationContainer> */}

        </>
    )
}


export default Login2

const styles = StyleSheet.create({})