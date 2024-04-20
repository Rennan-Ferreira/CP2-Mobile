import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../context/darkModeContext';

const ConfiguracoesScreen = () => {
    const {darkMode, toggleDarkMode} = useContext(AppContext);
    const containerStyle = darkMode === 'dark' ? styles.dark : styles.container;

    return (
        <View style={containerStyle}>
            <Text style={styles.title}>Configurações</Text>
            <TouchableOpacity
                style={styles.toggleButton}
                onPress={toggleDarkMode}
            >
            <Text> Modo Escuro</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { opacity: 0.5 }]}
                disabled={true}
            >
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
    },
    dark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d2c2c',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    toggleButton: {
        backgroundColor: '#cceb87',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: 200,
    },
    button: {
        backgroundColor: '#cceb87',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: 200,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ConfiguracoesScreen;
