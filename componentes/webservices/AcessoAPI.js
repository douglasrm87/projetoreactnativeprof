//npx   react-native   run-android
// AcessoAPI
// npm install axios
import React, { useEffect, useState } from 'react';
 import { FlatList, Text, View } from 'react-native';
 import axios from 'axios';
 
 export default AcessoAPI = () => {
     const [isLoading, setLoading] = useState(true);
     const [data, setData] = useState();
 
     useEffect(() => {
 
     axios.get('http://cep.republicavirtual.com.br/web_cep.php?cep=80050350&formato=json')
         .then(function (response) {
            // handle success
            console.log(response.data);
            //console.log(response.data.bairro);
            setData(response.data); 
         })
         .catch(function (error) {
            // handle error

            console.log(error);
         })
         .then(function () {
            // always executed
            setLoading(false);
         });
 
     }, []); 
     return (
 
     <View style={{ flex: 1, padding: 24 }}>
         {isLoading ? <Text>Loading...</Text> : 
         ( <View style={{ flex: 1, flexDirection: 'column' }}>
          
             <Text style={{ fontSize: 24, color: 'green', textAlign: 'center', paddingBottom: 10}}>
                Bairro: {data.bairro}</Text>
            <Text style={{ fontSize: 24, color: 'green', textAlign: 'center', paddingBottom: 10}}>
                Cidade: {data.cidade}</Text>
            <Text style={{ fontSize: 24, color: 'green', textAlign: 'center', paddingBottom: 10}}>
                Logradouro: {data.logradouro}</Text>
            <Text style={{ fontSize: 24, color: 'green', textAlign: 'center', paddingBottom: 10}}>
                Tipo Logradouro: {data.tipo_logradouro}</Text>
            <Text style={{ fontSize: 24, color: 'green', textAlign: 'center', paddingBottom: 10}}>
                UF: {data.uf}</Text>
            <Text style={{ fontSize: 24, color: 'green', textAlign: 'center', paddingBottom: 10}}>
                Resultado_txt: {data.resultado_txt}</Text>
            <Text style={{ fontSize: 24, color: 'green', textAlign: 'center', paddingBottom: 10}}>
                Resultado: {data.resultado}</Text> 
              
         </View>
         )}
     </View>
     );
 };
 ;