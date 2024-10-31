// npx   react-native   run-android
// AcessoAPIs
// https://medium.com/reactbrasil/10-apis-gr%C3%A1tis-e-legais-para-voc%C3%AA-consumir-69141988ea0b
// https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
// npm install axios
import React, {  useState } from 'react';
 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
 
 export default AcessoAPIDigitarCEP = () => {
     const [isLoading, setLoading] = useState(true);
     const [data, setData] = useState();

     const [meuCep, setMeuCep] = useState('')
     const onChangeText = userMeuCep => setMeuCep(userMeuCep)

    const consultarCEP = async () => {
        console.log("\n****\nExecutando a função de Consulta CEP: ", meuCep);

        axios.get("http://cep.republicavirtual.com.br/web_cep.php?cep=" + meuCep + "&formato=json")
            .then(function (response) {
                // handle success
                console.log(response.data);
                //console.log(response.data.bairro);
                setData(response.data); 
            })
            .catch(function (error) {
                // handle error
                console.log("\n ***** Registrando o erro: " , error);
                //console.log(JSON.stringify(error))
                alert("Problema identificado:\n "+ error);
            })
            .then(function () {
                // always executed
                setLoading(false);
        });
    }
     return (
         <View style={{ flex: 1, padding: 24 }}>
            <Text>Digite seu CEP:</Text>
            <TextInput
                style={styles.input}
                value={meuCep}
                placeholder="Digitar somente números."
                onChangeText={onChangeText}
            
            />
            <TouchableOpacity onPress={consultarCEP} style={styles.button}>
                <Text style={styles.buttonText}>Consultar CEP</Text>
            </TouchableOpacity>
 
            {isLoading ? <Text>Loading...</Text> : 
            ( <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={{ fontSize: 24, color: 'green', textAlign: 'left', paddingBottom: 10}}>
                    Bairro: {data && data.bairro}</Text>
                <Text style={{ fontSize: 24, color: 'green', textAlign: 'left', paddingBottom: 10}}>
                    Cidade: {data && data.cidade}</Text>
                <Text style={{ fontSize: 24, color: 'green', textAlign: 'left', paddingBottom: 10}}>
                    Logradouro: {data && data.logradouro}</Text>
                <Text style={{ fontSize: 24, color: 'green', textAlign: 'left', paddingBottom: 10}}>
                    Tipo Logradouro: {data && data.tipo_logradouro}</Text>
                <Text style={{ fontSize: 24, color: 'green', textAlign: 'left', paddingBottom: 10}}>
                    UF: {data && data.uf}</Text>
                <Text style={{ fontSize: 24, color: 'green', textAlign: 'left', paddingBottom: 10}}>
                    Resultado_txt: {data && data.resultado_txt}</Text>
                <Text style={{ fontSize: 24, color: 'green', textAlign: 'left', paddingBottom: 10}}>
                    Resultado: {data && data.resultado}</Text> 
            </View>
            )}
        </View>
     );
 };

 const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: '100%',
        backgroundColor: '#dcdcdc',
        padding: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    },

    title: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold'
    },

    panel: {
        paddingTop: 40,
        alignItems: 'center'
    },

    text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },

    input: {
        padding: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        margin: 10
    },

    button: {
        alignItems: "center",
        margin: 20,
        borderradius:15,
        backgroundColor: "#FFDDBB",
        borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      overflow: 'hidden',
        padding: 10
      },

    buttonText: {
        fontSize: 18,
        color: '#444'
    }

})