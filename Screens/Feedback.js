import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Database';

const Feedback = () => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Poppins-Medium' }}>your Feedback</Text>
            </View>
        </>
    )
}

export default Feedback

const styles = StyleSheet.create({})