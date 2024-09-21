import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,Button} from 'react-native';
const SecondPage = ({route,navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
        Passar Valor com React Navigation
        </Text>
        <Text style={styles.textStyle}>
          Valor passado da Primeira Tela: {route.params.paramKey}
        </Text>

        <Button
          title="Voltar Tela 01"
          onPress={() =>
            navigation.navigate('FirstPage', {
              
            })
          }
        />

      </View>
    </SafeAreaView>
  );
};
export default SecondPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
});