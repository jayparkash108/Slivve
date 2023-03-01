import React from 'react';
import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import Follow from './Follow';
import Following from './Following';

const Followers = () => {

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
      }}      >
        <Tab.Screen name="Follow" component={Follow} options={{ tabBarLabel: '1,234 Followers', }} />
        <Tab.Screen name="Following" component={Following} options={{ tabBarLabel: '2,534 Following ', }} />
      </Tab.Navigator>
      {/* </NavigationContainer> */}

    </>
  )
}

export default Followers

const styles = StyleSheet.create({})