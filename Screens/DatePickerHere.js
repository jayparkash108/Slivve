import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { COLOURS } from './Database';

const DatePickerHere = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  
  this.state = {
    date :new Date()
}
  return (
    <>
      <DatePicker
         date={this.state.date}
         mode = {'date'}
         onDateChange={date => this.setState({date})}
        modal
        open={open}
        format={'YYYY-MM-DD '}
        onConfirm={value => {
          setOpen(false);
          setDate(value);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View style={{alignItems:'center'}}>
      <TouchableOpacity style={{marginVertical:20 ,
        width:200,paddingVertical:7,borderRadius:10,
        backgroundColor:isDarkMode ? COLOURS.white : COLOURS.black}} onPress={() => setOpen(true)}>
        <Text style={{ fontFamily:'Poppins-Medium',textAlign:'center', fontFamily:'Poppins-Medium', 
        color: isDarkMode ? COLOURS.black: COLOURS.white, letterSpacing:1.2}}>Open Expiry Date</Text>
      </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: isDarkMode ? COLOURS.white: COLOURS.black, fontFamily:'Poppins-Medium', textAlign:'center',elevation:10, letterSpacing:2}}>Date: {date?.toLocaleDateString()}</Text>
      </View>
    </>
  );
};

export default DatePickerHere;