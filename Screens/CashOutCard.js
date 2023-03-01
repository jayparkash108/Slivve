import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const CashOutCard = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <ScrollView style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white }} showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, }}>

                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../images/Frame.png')} />
                    </View>

                </View>

                <View style={{ marginHorizontal: 20, marginTop: 40 }}>
                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>Holder Name</Text>
                    <TextInput placeholder='Holder Name' placeholderTextColor={'grey'}
                        style={{
                            width: '100%', marginTop: 10, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                            fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                        }}
                    />

                    <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, marginTop: 20, fontFamily: 'Inter-Medium' }}>Card Number</Text>
                    <TextInput placeholder='Type Your Card Number' placeholderTextColor={'grey'}
                        style={{
                            width: '100%', marginTop: 10, backgroundColor: COLOURS.white, elevation: 1, paddingHorizontal: 10,
                            fontFamily: 'Inter-Medium', color: COLOURS.black, borderRadius: 5
                        }}
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Help')} activeOpacity={0.6} style={{
                    backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black,
                    paddingHorizontal: 10,
                    paddingVertical: 16, borderRadius: 50, marginHorizontal: 20,
                    marginTop: 40, marginBottom: 70,
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

export default CashOutCard

const styles = StyleSheet.create({})