import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, useColorScheme } from 'react-native';
import { COLOURS } from './Database';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 2000);
  });

  const handleGetToken = async () => {

    // const dataToken = await AsyncStorage.getItem('AccessToken');

    if ('') {
      navigation.replace('Login1');
    } else {
      navigation.replace('Login1');
    }
  };

  return (

    <>
      <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white,
      }}>
        <Image source={require('../images/original-slivve.png')} style={{ justifyContent: 'center', alignItems: 'center', width: 250, height: 200 }} resizeMode='contain'
          tintColor={isDarkMode ? COLOURS.white : ''}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
});