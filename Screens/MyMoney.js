import React from 'react';
import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const MyMoney = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }}>
        <View style={{ alignItems: 'center', marginTop: 35, }}>
          <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', paddingBottom: 6, fontSize: 27 }}>$ 230.00</Text>
          <Text style={{ color: isDarkMode ? COLOURS.backgroundMedium : COLOURS.backgroundDark, fontFamily: 'Inter-Medium', fontSize: 13 }}>Available</Text>
        </View>

        <View></View>

        <View>
          <TouchableOpacity onPress={()=> navigation.navigate('SubscriptionSection')} activeOpacity={0.6} style={{
            backgroundColor: isDarkMode ? COLOURS.backgroundLight : COLOURS.black,
            paddingHorizontal: 10,
            paddingVertical: 16, borderRadius: 50, marginHorizontal: 20,
            marginTop: 40,
          }}>
            <Text style={{
              fontFamily: 'Poppins-Bold', letterSpacing: 0.2,
              color: isDarkMode ? COLOURS.black : COLOURS.white,
              textAlign: 'center', letterSpacing: 1
            }}>Cash Out</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          marginHorizontal: 10, borderBottomWidth: .7, borderBottomColor: COLOURS.grey, paddingBottom: 10,paddingHorizontal:20,
        }}>
          <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily:'Inter-Medium' }}>Date</Text>
          <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily:'Inter-Medium' }}>Amount</Text>
          <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily:'Inter-Medium' }}>Status</Text>
        </View>

        <View style={{marginBottom:20}}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 30 }}>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 11, fontFamily: 'Inter-Medium' }}>14 / 11 / 2022</Text>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12, right:13, }}> $ 54.03</Text>
            <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.red : COLOURS.red, fontSize: 13,textAlign:'center',width:60,textAlign:'left',letterSpacing:1}}>Pending</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 30 }}>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 11, fontFamily: 'Inter-Medium' }}>19 / 09 / 2022</Text>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12, right:13, }}> $ 34.01</Text>
            <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.green : COLOURS.green, fontSize: 13,textAlign:'center',width:60,textAlign:'left',letterSpacing:1}}>Paid</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 30 }}>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 11, fontFamily: 'Inter-Medium' }}>01 / 12 / 2022</Text>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12, right:13, }}> $ 24.00</Text>
            <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.green : COLOURS.green, fontSize: 13,textAlign:'center',width:60,textAlign:'left',letterSpacing:1}}>Paid</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 30 }}>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 11, fontFamily: 'Inter-Medium' }}>09 / 03 / 2022</Text>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 12, right:13, }}> $ 44.03</Text>
            <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.green : COLOURS.green, fontSize: 13,textAlign:'center',width:60,textAlign:'left',letterSpacing:1}}>Paid</Text>
          </View>

        </View>
      </ScrollView>
    </>
  )
}

export default MyMoney

const styles = StyleSheet.create({})