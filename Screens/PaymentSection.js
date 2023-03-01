import React from 'react';
import MyMoney from './MyMoney';
import Payment from './Payment';
import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const PaymentSection = ({navigation}) => {

  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createMaterialTopTabNavigator();
  return (
    <>

      <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>


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
        <Tab.Screen name="Payment" component={Payment} options={{ tabBarLabel: 'Payments', }} />
        <Tab.Screen name="MyMoney" component={MyMoney} options={{ tabBarLabel: 'My Money ', }} />
      </Tab.Navigator>
      {/* </NavigationContainer> */}

    </>
  )
}

export default PaymentSection

const styles = StyleSheet.create({})