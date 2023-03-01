import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOURS } from './Database';

const StreamCategory = () => {

    const isDarkMode = useColorScheme() === 'dark';
    const [value, setValue] = useState(null);

    const data = [
        { label: 'Fitness', value: '1' },
        { label: 'At work', value: '2' },
        { label: 'Entertainment', value: '3' }
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
                placeholderStyle={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, fontFamily: 'Poppins-Medium',fontSize: 13, paddingLeft:10, }}
                selectedTextStyle={{  color: isDarkMode ? COLOURS.white : COLOURS.grey,fontSize: 13, fontFamily: 'Poppins-Medium' }}
                inputSearchStyle={{ color: isDarkMode ? COLOURS.white : COLOURS.grey, }}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Fitness "
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

export default StreamCategory

const styles = StyleSheet.create({
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})