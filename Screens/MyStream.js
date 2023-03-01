import { COLOURS } from './Database';
import StreamLanguage from './StreamLanguage';
import StreamCategory from './StreamCategory';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, StatusBar, useColorScheme, TextInput, ScrollView } from 'react-native';

const MyStream = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar backgroundColor={isDarkMode ? COLOURS.lightblack : COLOURS.white}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%', backgroundColor: isDarkMode ? COLOURS.black : COLOURS.white, }}>
        <View>
          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 80 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: isDarkMode ? COLOURS.white : COLOURS.lightblack, marginRight: 20, height: 250, width: 150, borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'Inter-Bold', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 10, padding: 3, paddingLeft: 5, marginTop: 7, }}>Pubg Game Session</Text>
                <Text style={{ width: 150, fontFamily: 'Inter-Medium', color: isDarkMode ? COLOURS.white : COLOURS.black, fontSize: 7, paddingLeft: 5, lineHeight: 12, }}>
                  Lorem ipsum dolor sit amet, consecteture
                  elit. Sed platea duis mi mollis sed egesta...
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default MyStream

const styles = StyleSheet.create({})