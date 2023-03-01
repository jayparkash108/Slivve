import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

const AccountVerify = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';
    return (
        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView style={{ backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, height: '100%' }}>
                <View>
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

                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <Image source={require('../images/star.png')} style={{ height: 27, width: 27, color: COLOURS.orange, position: 'absolute', top: 2, right: 115, zIndex: 2 }} />
                        <Image source={require('../images/profile-real.jpg')} style={{
                            justifyContent: 'center', alignItems: 'center',
                            width: 130, height: 130, elevation: 41, borderRadius: 100
                        }} resizeMode='contain' />
                    </View>

                    <View>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 16, textAlign: 'center', marginTop: 10, }}>@israrudin132</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: 30, marginHorizontal: 25 }}>
                        <View style={{ paddingTop: 10, }}>
                            <Text style={{ paddingBottom: 15, color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>1,2342 Followers</Text>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', }}>13 Subscribers</Text>
                        </View>
                        <Text style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, width: .9, paddingVertical: 20, marginTop: 10 }}></Text>
                        <View style={{ paddingTop: 10, }}>
                            <Text style={{ paddingBottom: 15, color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>2,2342 Following</Text>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>13 Subscriptions</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 5, marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MaterialCommunityIcons name='video-plus' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 35, }} />
                        <TouchableOpacity activeOpacity={0.6} style={{ borderColor: isDarkMode ? COLOURS.white : COLOURS.black, borderWidth: 1, paddingHorizontal: 15, padding: 4, height: 30, borderRadius: 5 }}>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 14, }}>Subscribe</Text>
                        </TouchableOpacity>
                        <FontAwesome5 name='heart' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 30 }} />
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                        <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Bold', fontSize: 17 }}>Streams</Text>
                    </View>

                    <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 80 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                                        Lorem ipsum dolor sit amet, consecteture
                                        elit. Sed platea duis mi mollis sed egesta...
                                    </Text>
                                    <MaterialCommunityIcons name='dots-vertical' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 18, top:2,right:5}} />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                                
                                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-around', }}>
                                    <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                                        Lorem ipsum dolor sit amet, consecteture
                                        elit. Sed platea duis mi mollis sed egesta...
                                    </Text>
                                    <MaterialCommunityIcons name='dots-vertical' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 18, top:2,right:5,}} />
                                </View>

                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-around', }}>
                                    <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                                        Lorem ipsum dolor sit amet, consecteture
                                        elit. Sed platea duis mi mollis sed egesta...
                                    </Text>
                                    <MaterialCommunityIcons name='dots-vertical' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 18, top:2,right:5 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-around', }}>
                                    <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                                        Lorem ipsum dolor sit amet, consecteture
                                        elit. Sed platea duis mi mollis sed egesta...
                                    </Text>
                                    <MaterialCommunityIcons name='dots-vertical' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 18, top:2,right:5 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-around', }}>
                                    <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                                        Lorem ipsum dolor sit amet, consecteture
                                        elit. Sed platea duis mi mollis sed egesta...
                                    </Text>
                                    <MaterialCommunityIcons name='dots-vertical' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 18, top:2,right:5 }} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default AccountVerify

const styles = StyleSheet.create({})