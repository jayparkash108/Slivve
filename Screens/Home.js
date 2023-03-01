import { COLOURS } from './Database';
import StreamLanguage from './StreamLanguage';
import StreamCategory from './StreamCategory';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, StatusBar, useColorScheme, TextInput, ScrollView } from 'react-native';
const Home = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10, }}>
            <Image source={require('../images/original-slivve.png')}
              style={{ justifyContent: 'center', alignItems: 'center', width: 140, height: 120, elevation: 41 }} resizeMode='contain'
              tintColor={isDarkMode ? COLOURS.white : null} />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: COLOURS.white, elevation: 1, width: 300, borderRadius: 25, paddingHorizontal: 10 }}>
              <TextInput placeholder='Search' placeholderTextColor={'grey'} style={{
                color: COLOURS.lightblack, fontFamily: 'Inter-Medium', fontSize: 13, width: 250,
              }} />
              <TouchableOpacity activeOpacity={0.6}>
                <FontAwesome5 name='search' style={{ color: isDarkMode ? COLOURS.grey : COLOURS.blackish, fontSize: 15, }} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('NotificationSection')}>
              <MaterialCommunityIcons name='bell' style={{ color: isDarkMode ? COLOURS.white : COLOURS.blackish, fontSize: 28, }} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 20 }}>
            <Text style={{ color: isDarkMode ? COLOURS.backgroundLight : COLOURS.black, fontFamily: 'Inter-Bold', fontSize: 15 }}>Categories</Text>
            <Text style={{ color: isDarkMode ? COLOURS.backgroundMedium : COLOURS.black, fontFamily: 'Inter-Medium', fontSize: 13 }}>See All</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 30,}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 40, width: 100, backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5 }}>
                <Text style={{ color: isDarkMode ? COLOURS.black : COLOURS.white, fontFamily: 'Inter-Medium', letterSpacing: .8, }}>Sports</Text>
                <Image source={require('../images/trophy.png')} style={{ top: -1, height: 20, width: 20 }} tintColor={isDarkMode ? COLOURS.black : COLOURS.white} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 40, width: 100, backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5 }}>
                <Text style={{ color: isDarkMode ? COLOURS.black : COLOURS.white, fontFamily: 'Inter-Medium', letterSpacing: .8, }}>Events</Text>
                <Image source={require('../images/calendar.png')} style={{ top: -1, height: 20, width: 20 }} tintColor={isDarkMode ? COLOURS.black : COLOURS.white} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 40, width: 100, backgroundColor: isDarkMode ? COLOURS.white : COLOURS.black, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5 }}>
                <Text style={{ color: isDarkMode ? COLOURS.black : COLOURS.white, fontFamily: 'Inter-Medium', letterSpacing: .8, }}>Games</Text>
                <Image source={require('../images/joystick.png')} style={{ top: -1, height: 20, width: 20 }} tintColor={isDarkMode ? COLOURS.black : COLOURS.white} />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{ marginHorizontal: 20, marginTop: 30 }}>
            <Text style={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'OpenSans-Bold', fontSize: 20 }}>Streaming Now</Text>
          </View>

          <View style={{ marginTop: 20,marginBottom:20, marginLeft: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{width:260, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10,}}>
                t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
            </ScrollView>
          </View>

          <View style={{marginVertical:10}}>
            <Text style={{ fontFamily: 'Inter-Bold',marginHorizontal:20, color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 20,}}>Favorites</Text>
          </View>

          <View style={{ marginTop: 20,marginBottom:80, marginLeft: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, f4ntSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 450, width: 270, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 14, padding: 3, paddingLeft: 5,paddingHorizontal:10, marginTop:10, }}>Music live Streaming With Atif vehicu...</Text>
                <Text style={{ width: 270, fontFamily: 'Inter-Medium', color:  isDarkMode ? COLOURS.white: COLOURS.black, fontSize: 13, paddingLeft: 5, lineHeight: 15, marginTop:10, }}>
                  t non facilisis congue vehicula a proin lacinia sed...
                </Text>
              </View>
            </ScrollView>
          </View>

        </View>
      </ScrollView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})