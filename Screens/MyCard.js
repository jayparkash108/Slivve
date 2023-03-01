import { COLOURS } from './Database';
import DatePickerHere from './DatePickerHere';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const MyCard = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <ScrollView style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white }} showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, }}>

                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/Frame.png')} />
                    </View>

                </View>

                <View style={{ marginHorizontal: 20, marginTop: 40 }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>Your Name</Text>
                    <TextInput defaultValue='Israr Hussain'
                        style={{
                            width: '100%', marginTop: 10, height:49, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                            fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                        }}
                    />

                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginTop: 20, fontFamily: 'Inter-Medium' }}>Card Number</Text>
                    <TextInput placeholder='Type Your Card Number' defaultValue='3029202'
                        style={{
                            width: '100%', marginTop: 10,height:49, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                            fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                        }}
                    />
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginTop: 20, fontFamily: 'Inter-Medium' }}>Expiry Date</Text>
                    
                    {/*  */}
                        <DatePickerHere />
                        {/* <ModernDateHere /> */}
                    {/*  */}

                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginTop: 20, fontFamily: 'Inter-Medium' }}>CVV</Text>
                    <TextInput placeholder='Type Cvv'defaultValue='009092'
                        style={{
                            width: '100%',height:49, marginTop: 10, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                            fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                        }}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.6} style={{
                    backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black,
                    paddingHorizontal: 10,
                    paddingVertical: 17, borderRadius: 50, marginHorizontal: 20,
                    marginTop: 40,marginBottom:70,
                }}>
                    <Text style={{
                        fontFamily: 'Inter-Medium', letterSpacing: 0.2,
                        color: isDarkMode ? COLOURS.black : COLOURS.white,
                        textAlign: 'center', letterSpacing: 1
                    }}>Link Card</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default MyCard

const styles = StyleSheet.create({})