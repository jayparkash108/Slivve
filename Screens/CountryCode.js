import React from 'react';
import PhoneInput from 'react-native-phone-input';
import { StyleSheet, Text, View } from 'react-native';
import { COLOURS } from './Database';

const CountryCode = () => {
    return (
        <View style={{marginTop:30,}}>

            <PhoneInput style={{backgroundColor:COLOURS.white,color:COLOURS.black,width:80,borderRadius:5, height:49, paddingHorizontal:5, elevation:1,}}
                ref={(ref) => { this.phone = ref; }}
                onPressFlag={this.onPressFlag}
                textStyle={{color:COLOURS.black}}
                initialCountry={'Pakistan'}
                initialValue="+92"
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />

        </View>
    )
}

export default CountryCode

const styles = StyleSheet.create({})