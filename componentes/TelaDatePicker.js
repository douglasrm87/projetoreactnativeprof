import React, { useState } from 'react';
import { View, Button, Platform, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

//import DateTimePickerModal from 'react-native-modal-datetime-picker';
// Obsoleto - npm install react-native-datepicker --save - não usar
// npm install @react-native-community/datetimepicker
// npm install react-native-modal-datetime-picker --save
//@react-native-community/datetimepicker - recomendado
export const TelaDatePicker = ({navigation}) => {
  const [date, setDate] = useState(new Date()); // Estado para armazenar a data/hora selecionada
  const [mode, setMode] = useState('date'); // 'date' ou 'time'
  const [show, setShow] = useState(false); // Controla a visibilidade do picker

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // No iOS, o picker fica visível por padrão, então ocultamos manualmente. No Android, ele fecha automaticamente após a seleção.
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };           

    return (
       <View style={styles.container}>
      <Text style={styles.title}>Exemplo de DateTimePicker</Text>

      <Text style={styles.selectedDateTime}>
        Data e Hora Selecionadas: {date.toLocaleString()}
      </Text>

      <View style={styles.buttonContainer}>
        <Button onPress={showDatepicker} title="Mostrar Data Picker" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={showTimepicker} title="Mostrar Hora Picker" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode} // 'date', 'time' ou 'datetime'
          is24Hour={true} // Opcional: para usar formato de 24 horas (true) ou 12 horas (false)
          display="default" // No Android, 'default' ou 'spinner'. No iOS, 'default', 'compact', 'inline', 'spinner'.
          onChange={onChange}
        />
      )}
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedDateTime: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
