import React, { useState } from 'react';
import { View,Image, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Contador from './Componente/Contador';

export default function App() {
  
  const [contar, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contar + 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };


  return (
      <View style={styles.container}>
      <View style={styles.logocont}>
        <Image style={styles.logo} source={require('./assets/logofreeCode.png')}></Image>
      </View>
      <View style={styles.contadorcont}>
        <Contador valor={contar}/>
        <View style={styles.cotbot1}>
        <Button title='Contar' style={[styles]} onPress={incrementarContador}/>
        </View>
        <View style={styles.cotbot2}>
        <Button title='Reset' style={[styles]} onPress={reiniciarContador}/>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  cotbot1:{
    justifyContent: 'center',
    flex:1
  },

  cotbot2:{
    flex:1
  },

  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain'
  },

  logocont:{
    flex:0.5,
    backgroundColor: '#3a86ff',
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  contadorcont:{
    flex:3,
  },

  contador: {
    fontSize: 48,
    color: '#FFFFFF',
    marginBottom: 20,
  },
});
