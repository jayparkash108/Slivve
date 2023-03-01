import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOURS } from './Database';

const Currency = () => {

    const isDarkMode = useColorScheme() === 'dark';
    const [value, setValue] = useState(null);

    const data = [
        { label: '35 USD', value: '1' },
        { label: '$20 Dollar', value: '2' },
        { label: 'Rupees', value: '3' },
    ];

    return (
        <>
            <Dropdown
                style={{
                    width:150,
                    margin: 16,
                    height: 50,
                    color: '#000',
                    borderRadius: 10,
                    borderWidth: 0.5,
                    borderColor: 'gray',
                    paddingHorizontal: 10,
                    backgroundColor: isDarkMode ? COLOURS.black : COLOURS.backgroundLight,
                }}
                placeholderStyle={{ color: isDarkMode ? COLOURS.white : COLOURS.black, fontFamily: 'Poppins-Medium', fontSize:12, paddingLeft:10, }}
                selectedTextStyle={{  color: isDarkMode ? COLOURS.white : COLOURS.grey,fontSize: 13, fontFamily: 'Poppins-Medium' }}
                inputSearchStyle={{ color: isDarkMode ? COLOURS.white : COLOURS.black, }}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="35 USD"
                searchPlaceholder="Search..."
                itemTextStyle={{ color: '#a1a1a1' }}
                selectedStyle={{ color: '#a1a1a1' }}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
            />
        </>
    )
}

export default Currency

const styles = StyleSheet.create({
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})