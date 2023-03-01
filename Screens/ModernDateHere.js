import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

const ModernDateHere = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <DatePicker
      onSelectedChange={date => setSelectedDate(date)}
    />
  );
};

export default ModernDateHere;