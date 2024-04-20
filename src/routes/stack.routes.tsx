import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import Lista from '../screens/listTarefas';
import perfil from '../screens/perfil';
import config from '../screens/configuracao';
import BuscarCep from '../screens/buscarCep';

const { Screen, Navigator } = createDrawerNavigator();

export function StackRoutes() {
    return (
            <Navigator>
                <Screen
                    name='Lista'
                    component={Lista}
                />
                <Screen
                    name='Perfil'
                    component={perfil}
                />
                <Screen
                    name='Configurações'
                    component={config}
                />
                <Screen
                    name='Buscar Cep'
                    component={BuscarCep}
                />
            </Navigator>
    )
}
