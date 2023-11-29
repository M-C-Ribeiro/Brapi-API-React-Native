import React from 'react';
import { View, Text } from 'react-native';
import FigEmpresa from './components/MaiorLucro'; 
import FigInflacao from './components/Inflacao';

function App() {
  return (
    <View>
      <Text>Seu App React Native</Text>
      <FigInflacao />
      <FigEmpresa />
      
    </View>
  );
}

export default App;
