
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const BotaoGenericoMyButton01 = (props) => {

return (
        <TouchableOpacity
        style={styles.button}
        onPress={props.customClick}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#105511',
        color: '#ffffff',
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
    },
    text: {
        color: '#ffffff',
    },
});
export default BotaoGenericoMyButton01