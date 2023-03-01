import React, { useState } from 'react';
import { COLOURS } from './Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, TouchableOpacity, Modal, Animated, Image, StatusBar, useColorScheme, ScrollView, StyleSheet } from 'react-native';


export default function Profile({ navigation }) {

    const [visible, setVisible] = useState('');
    const [galleryphoto, setGalleryPhoto] = useState(null);

    let options = {
        saveTophotos: true,
        mediatype: ' photo',
    };

    const opengallery = async () => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    }

    const isDarkMode = useColorScheme() === 'dark';

    const ModalPoup = ({ visible, children }) => {
        const [showModal, setShowModal] = React.useState(visible);
        const scaleValue = React.useRef(new Animated.Value(0)).current;
        React.useEffect(() => {
            toggleModal();
        }, [visible]);
        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 200);
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };
        return (
            <Modal transparent visible={showModal}>
                <View style={styles.modalBackGround}>
                    <Animated.View
                        style={[styles.modalContainer, { transform: [{ scale: scaleValue, }], backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white }]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>

        );
    };

    return (

        <>
            <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>

                <View style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10, }}>
                        <Image source={require('../images/original-slivve.png')}
                            style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, elevation: 41 }} resizeMode='contain'
                            tintColor={isDarkMode ? COLOURS.white : null} />
                    </View>
                    <TouchableOpacity activeOpacity={0.6}>
                        <View style={{ paddingHorizontal: 20, paddingBottom: 7, borderBottomColor: isDarkMode ? COLOURS.white : COLOURS.black, borderBottomWidth: 2, width: 200 }}>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 17, fontFamily: 'Inter-Medium', letterSpacing: .1 }}>My Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 20 }}>

                            <View style={{ flexDirection: 'column' }}>

                                <Image source={require('../images/star.png')} style={{ height: 25, width: 25, color: COLOURS.orange, position: 'absolute', top: 2, right: 3, zIndex: 2 }} />
                                { galleryphoto == null ? 
                                    <Image source={require('../images/dummy-profile.jpg')}
                                        style={{ justifyContent: 'center', alignItems: 'center', width: 105, height: 105, elevation: 41, borderRadius: 100 }} resizeMode='contain' />
                                    :
                                    < Image source={{ uri: galleryphoto }} 
                                        style={{ justifyContent: 'center', alignItems: 'center', width: 105, height: 105, elevation: 41, borderRadius: 100 }} resizeMode='contain'
                                    />
                                }

                                <TouchableOpacity activeOpacity={0.6} onPress={opengallery}>
                                    <FontAwesome5 name='plus' style={{
                                        color: isDarkMode ? COLOURS.black : COLOURS.white, fontSize: 12,
                                        backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, height: 25, width: 25, borderRadius: 100, textAlign: 'center', textAlignVertical: 'center',
                                        position: 'absolute', right: 5, bottom: 2, zIndex: 2
                                    }} />
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <FontAwesome5 name='share-alt' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 27, }} />
                                <Text style={{ fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, letterSpacing: .5, marginTop: 20, }}>@iftikhar133</Text>
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: 30 }}>
                            <View style={{ paddingTop: 10, }}>
                                <Text style={{ paddingBottom: 15, color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>1,2342 Followers</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', }}>13 Subscribers</Text>
                            </View>
                            <Text style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, width: .9, paddingVertical: 15, }}></Text>
                            <View style={{ paddingTop: 10, }}>
                                <Text style={{ paddingBottom: 15, color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>2,2342 Following</Text>
                                <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium' }}>13 Subscriptions</Text>
                            </View>
                        </View>

                    </View>

                    {/* Screens Start */}

                    <View style={{ marginBottom: 65, }}>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('SubscriptionSection')} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <MaterialCommunityIcons name='youtube-subscription' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 22, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black }}>Subscriptions</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('PaymentSection')} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            {/* <FontAwesome5 name='dollar-sign' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 25, }} /> */}
                            <Image source={require('../images/dollarsymbol.png')} style={{ height: 22, width: 22 }} tintColor={isDarkMode ? COLOURS.white : COLOURS.black} />
                            <Text style={{ width: 175, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>My Balance</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('CardSection')} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <MaterialCommunityIcons name='card-bulleted-settings' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 22, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>My Card</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('EditProfile')} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <MaterialCommunityIcons name='comment-edit' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 22, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>Edit Profile</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('NewPassword')} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <MaterialCommunityIcons name='lock' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 22, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>Change Password</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <MaterialCommunityIcons name='shield-lock' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 22, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>Streaming Rules</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <FontAwesome5 name='info-circle' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 25, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>About</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Help')} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <MaterialCommunityIcons name='help-circle' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 22, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>Help</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('AccountVerify')} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <Ionicons name='ios-shield-checkmark' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 25, }} />
                            <Text style={{ width: 180, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, }}>Account verify</Text>
                            <MaterialIcons name='keyboard-arrow-right' style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 28, }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisible(true)} activeOpacity={0.7} style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15,
                            paddingHorizontal: 10, marginBottom: 10, marginTop: 10,
                        }}>
                            <Image source={require('../images/logout.png')} style={{ height: 22, width: 22, left: 2, }} tintColor={COLOURS.red} />
                            <Text style={{ width: 250, fontFamily: 'Inter-Medium', color: COLOURS.red }}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Screens End */}
                    {/* // Dummy Text // */}

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <ModalPoup visible={visible} style={{ borderColor: isDarkMode ? COLOURS.white : COLOURS.white, borderWidth: 4 }}>



                            <Text style={{
                                marginBottom: 10, paddingLeft: 9, fontSize: 14, fontFamily: 'Poppins-Bold', textAlign: 'center', color: isDarkMode ? COLOURS.white : COLOURS.black,
                            }} >
                                Log Out
                            </Text>
                            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Inter-Medium', textAlign: 'center', paddingBottom: 10 }}>IsrarHussain2344</Text>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between',
                                borderTopColor: isDarkMode ? COLOURS.grey : COLOURS.grey, borderTopWidth: .4
                            }}>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => setVisible(false)}><Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, textAlign: 'center', paddingTop: 20, fontFamily: 'Inter-Medium', paddingLeft: 40 }}>Cancel</Text></TouchableOpacity>
                                <Text style={{ borderLeftColor: isDarkMode ? COLOURS.grey : COLOURS.grey, borderLeftWidth: .4, paddingVertical: 2 }}></Text>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('NotificationSection')}><Text style={{ color: isDarkMode ? COLOURS.red : COLOURS.red, textAlign: 'center', paddingTop: 20, fontFamily: 'Inter-Medium', paddingRight: 40 }}>Log out</Text></TouchableOpacity>
                            </View>

                        </ModalPoup>
                    </View>

                    {/* // Dummy Text // */}
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: COLOURS.white,
        borderColor: COLOURS.white,
        borderWidth: .4,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})