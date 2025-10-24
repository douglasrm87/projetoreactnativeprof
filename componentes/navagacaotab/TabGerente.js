import React from 'react'
import { Button, Image, Text, View, StyleSheet, LinearGradient } from 'react-native';


export const TabGerente = ({navigation}) => {
   return (
           <View style={styles.container}>
               <View style={styles.warningContainer}>
                   <Text style={styles.warningText}>👨‍💼 Área Gerencial</Text>
                   <Text style={styles.warningMessage}>
                       Bem-vindo à área exclusiva de gerenciamento.
                       Aqui você tem acesso a relatórios estratégicos,
                       gestão de equipe e indicadores de performance.
                   </Text>
               </View>
               
               <View style={styles.contentContainer}>
                   <Text>Tela do Gerente</Text>
               </View>
           </View>
       );         
   }
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           padding: 20,
           backgroundColor: '#f5f5f5',
       },
       warningContainer: {
           padding: 15,
           borderRadius: 10,
           marginBottom: 20,
           shadowColor: "#000",
           shadowOffset: {
               width: 0,
               height: 4,
           },
           shadowOpacity: 0.32,
           shadowRadius: 5.46,
           elevation: 9,
           borderWidth: 2,
           borderColor: '#2E8B57',
           backgroundColor: '#4682B4',
           backgroundImage: 'linear-gradient(45deg, #4682B4, #2E8B57)',
       },
       warningText: {
           fontSize: 26,
           fontWeight: 'bold',
           color: '#E0FFFF',
           textAlign: 'center',
           marginBottom: 15,
           textShadowColor: 'rgba(0, 0, 0, 0.75)',
           textShadowOffset: {width: -1, height: 1},
           textShadowRadius: 10,
           letterSpacing: 1
       },
       warningMessage: {
           fontSize: 16,
           color: '#F0FFFF',
           textAlign: 'center',
           lineHeight: 24,
           textShadowColor: 'rgba(0, 0, 0, 0.5)',
           textShadowOffset: {width: 0, height: 1},
           textShadowRadius: 3,
       },
       contentContainer: {
           padding: 15,
           backgroundColor: '#ffffff',
           borderRadius: 8,
           borderColor: '#4682B4',
           borderWidth: 1,
           shadowColor: "#4682B4",
           shadowOffset: {
               width: 0,
               height: 2,
           },
           shadowOpacity: 0.25,
           shadowRadius: 3.84,
           elevation: 5
       }
   });    