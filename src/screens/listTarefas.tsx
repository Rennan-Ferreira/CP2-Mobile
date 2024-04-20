import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, TextInput, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation})=>{

    function AdicionarTarefa(){
        navigation.navigate('AddTarefas');
    }

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const tasks = await AsyncStorage.getItem('tasks');
            if (tasks !== null) {
                setTaskList(JSON.parse(tasks));
            }
        } catch (error) {
            console.error('Erro ao salvar tarefa no AsyncStorage', error);
        }
    };

    const addTask = async () => {
        if (task.trim() !== '') {
            const newTaskList = [...taskList, task];
            setTaskList(newTaskList);
            setTask('');
            try {
                await AsyncStorage.setItem('tasks', JSON.stringify(newTaskList));
            } catch (error) {
                console.error('Erro ao salvar tarefa no AsyncStorage', error);
            }
        }
    };

    const removeTask = async (index) => {
        const newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTaskList));
        } catch (error) {
            console.error('Erro ao salvar tarefa no AsyncStorage', error);
        }
    };    

    return( 
        <View style={styles.container}>
        <StatusBar/>
        <SafeAreaView/>
        <View>
            <Text style={styles.title}>Lista de Tarefas</Text>

        </View>
        
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Qual sua próxima tarefa ?"
                value={task}
                onChangeText={setTask}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={addTask}
            >
                <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={taskList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
        <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeTask(index)}
            >
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    )}
/>

    </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 16,
            paddingTop: StatusBar.currentHeight || 0,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 16,
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
        },
        input: {
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 8,
            marginRight: 8,
            height: 30
        },
        addButton: {
            backgroundColor: '#cceb87',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            alignItems: 'center',
            marginBottom: 16,
            marginTop: 14
        },
        addButtonText: {
            color: '#fff',
            fontWeight: 'bold',
        },
        taskItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 8,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 8,
        },
        taskText: {
            flex: 1,
            fontSize: 16,
        },
        deleteButton: {
            backgroundColor: '#ff9999',
            padding: 6,
            borderRadius: 4,
            width: 35,
            alignItems: 'center'
        },
        deleteButtonText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
        },        
    });
