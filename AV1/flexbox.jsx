import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.boxText}>Box 1 (50%)</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.boxText}>Box 2 (30%)</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.boxText}>Box 3 (20%)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centraliza verticalmente
    alignItems: 'center',       // Centraliza horizontalmente
  },
  box1: {
    width: '80%',  // Largura de cada caixa
    height: '50%',
    backgroundColor: 'tomato',
    justifyContent: 'center',   
    alignItems: 'center',       
    marginBottom: 10,           
  },
  box2: {
    width: '80%',
    height: '30%',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  box3: {
    width: '80%',
    height: '20%',
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Flexbox;
