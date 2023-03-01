import React from 'react';
import { COLOURS } from './Database';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';


const NewPassword = ({navigation}) => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>

      <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10, }}>
          <Image source={require('../images/original-slivve.png')}
            style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, elevation: 41 }} resizeMode='contain'
            tintColor={isDarkMode ? COLOURS.white : null} />
        </View>
        <View style={{ marginTop: 30, marginHorizontal: 20, }}>
          <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 16 }}>Create New Password</Text>
          <TextInput placeholder='Enter Your New Password' placeholderTextColor={'grey'}
            style={{
              width: '100%', marginTop: 15, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
              fontFamily: 'Inter-Medium',color: COLOURS.blackish, borderRadius: 5
            }}
          />
        </View>
        <View style={{ marginTop: 30, marginHorizontal: 20, }}>
          <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 16 }}>Confirm Password</Text>
          <TextInput placeholder='Enter Your Confirm Password' placeholderTextColor={'grey'} secureTextEntry
            style={{
              width: '100%', marginTop: 15, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
              fontFamily: 'Inter-Medium',color: COLOURS.blackish, borderRadius: 5
            }}
          />
        </View>
       
        <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('SuccessfullyRegistered')} style={{
          backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black,
          paddingHorizontal: 10,
          paddingVertical: 18,
           borderRadius: 50, marginHorizontal: 20,
          marginTop: 40,
        }}>
          <Text style={{
            fontFamily: 'Inter-Medium', letterSpacing: 0.2,
            color: isDarkMode ? COLOURS.black : COLOURS.white,
            textAlign: 'center', letterSpacing: 1
          }}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default NewPassword

const styles = StyleSheet.create({})