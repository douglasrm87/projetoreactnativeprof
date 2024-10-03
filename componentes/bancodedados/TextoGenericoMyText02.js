// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Text

import React from 'react';
import { StyleSheet, Text } from 'react-native';
const TextoGenericoMyText02 = (props) => {
        return <Text style={styles.text}>{props.text}</Text>;
};
const styles = StyleSheet.create({
    text: {
        color: '#111825',
        fontSize: 18,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
    },
});
export default TextoGenericoMyText02;
