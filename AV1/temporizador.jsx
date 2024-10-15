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

    // Pausa
    if (seconds === 60) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [seconds, isRunning]);

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(true);  // Reinicia o temporizador
  };

  return (
    <View }>
      <Text>{seconds} seconds</Text>
      <Button title="Reiniciar" onPress={resetTimer} />
    </View>
  );
}; 


export default Timer;
