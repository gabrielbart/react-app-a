import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo!!</Text>
      <Text>Baixar o app expo hoje a noite</Text>
      <Text>jsx=comandos jss=estilo</Text>
      <Text>Eu sou lindo?</Text>
      <input type="button" onclick="javascript: location.href='pagina.js';" value="Sim" />
      <input type="button" onclick="javascript: location.href='pagina.js';" value="Com certeza" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
