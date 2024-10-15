import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning && seconds < 60) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    // Pausa o temporizador automaticamente após 60 segundos
    if (seconds === 60) {
      setIsRunning(false);
    }

    // Limpa o intervalo quando o componente desmonta ou o temporizador é pausado
    return () => clearInterval(timer);
  }, [seconds, isRunning]);

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(true);  // Reinicia o temporizador
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{seconds} seconds</Text>
      <Button title="Reiniciar" onPress={resetTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default Timer;
