import React from 'react';
import Home from './Home';
import Help from './Help';
import Stream from './Stream';
import Profile from './Profile';
import TimeLine from './TimeLine';
import Followers from './Followers';
import { COLOURS } from './Database';
import AccountVerify from './AccountVerify';
import TimeLineSection from './TimeLineSection';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, StatusBar, useColorScheme, TextInput, ScrollView } from 'react-native';


import Privacy from './Privacy';
import Feedback from './Feedback';
import EditProfile from './EditProfile';
import NewPassword from './NewPassword';
import CardSection from './CardSection';
import SplashScreen from './SplashScreen';
import PaymentSection from './PaymentSection';
import TermsandCondition from './TermsandCondition';
import SubscriptionSection from './SubscriptionSection';
import NotificationSection from './NotificationSection';



const Homestack = () => {
    const Stack = createNativeStackNavigator();
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="CardSection" component={CardSection} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="AccountVerify" component={AccountVerify} />
            <Stack.Screen name="PaymentSection" component={PaymentSection} />
            <Stack.Screen name="TermsandCondition" component={TermsandCondition} />
            <Stack.Screen name="SubscriptionSection" component={SubscriptionSection} />
        </Stack.Navigator>

    )
}

const NotificaStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NotificationSection" component={NotificationSection} />
        </Stack.Navigator>
    )
}

const BottomNavigation = () => {

    const isDarkMode = useColorScheme() === 'dark';
    const Tab = createBottomTabNavigator();


    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { display: 'none' },
                // tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: COLOURS.red,
                tabBarInactiveTintColor: COLOURS.blue,

                tabBarStyle: {
                    backgroundColor: isDarkMode ? COLOURS.backgroundDark : COLOURS.white,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    paddingBottom: 25,
                    paddingHorizontal: 7,
                    height: 60,
                    shadowColor: '#000',
                    showOpacity: 0.06,
                    position: 'absolute',
                    bottom: 0,
                    keyboardHidesTabBar: true,
                    tabBarPosition: 'bottom',
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                }
            }}>

                <Tab.Screen name="NotificaStack" component={NotificaStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../Filled/home.png')} style={{ height: 24, width: 30 }}
                                tintColor={focused ? COLOURS.black : COLOURS.blackish}
                            />
                        </View>
                    )
                }} />

                <Tab.Screen name="Followers" component={Followers} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../Filled/heart.png')} style={{ height: 24, width: 30 }}
                                tintColor={focused ? COLOURS.black : COLOURS.blackish}
                            />
                        </View>
                    )
                }} />

                <Tab.Screen name="Stream" component={Stream} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%', backgroundColor: COLOURS.red, paddingHorizontal: 8, paddingVertical: 8, borderRadius: 100 }}>
                            <Image source={require('../images/stream.png')} style={{ height: 26, width: 28 }}
                                tintColor={focused ? COLOURS.backgroundMedium : COLOURS.white}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name="TimeLineSection" component={TimeLineSection} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../images/play-button.png')} style={{ height: 20, width: 20 }}
                                tintColor={focused ? COLOURS.black : COLOURS.blackish}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name="Homestack" component={Homestack} options={{
                    // tabBarVisible: getIsTabBarShown(route),
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../Filled/user.png')} style={{ height: 24, width: 30 }}
                                tintColor={focused ? COLOURS.black : COLOURS.blackish}
                            />
                        </View>
                    )
                }} />
            </Tab.Navigator>
        </>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})