import React from 'react'
import {  Button, Modal, Pressable, Text, View } from 'react-native';

export const TelaModal = ({navigation}) => {
    const [modalVisible, setModalVisible] = React.useState('');
    return (
        <View>
            <Pressable onPress={() => setModalVisible(true)}  >
                <Text>Abrir Modal</Text>
            </Pressable>
            <Modal
            animationType='slide'
            transparent={false}
            visible={modalVisible}
                        onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
            <View>
                <View>
                <Text>Texto dentro da modal</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)} >
                    <Text>FecharModal</Text>
                </Pressable>
                </View>
            </View>
            </Modal>

        </View>
        );
}
