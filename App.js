import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FIAPLogo from './src/components/FiapLogo';
import Inputs from './src/components/Inputs';
import Resultado from './src/components/Resultado';

export default function App() {
  const [eyNota1, setEyNota1] = useState('');
  const [eyNota2, setEyNota2] = useState('');
  const [eyNota3, setEyNota3] = useState('');
  const [eyFaltas, setEyFaltas] = useState('');
  const [resultado, setResultado] = useState('');

  const validarSituacao = () => {
    const nota1 = parseFloat(eyNota1) || 0;
    const nota2 = parseFloat(eyNota2) || 0;
    const nota3 = parseFloat(eyNota3) || 0;
    const faltas = parseInt(eyFaltas) || 0;

    const limiteFaltas = 20;
    const mediaMinima = 6;

    if (faltas > limiteFaltas) {
      setResultado('Reprovado por falta');
    } else {
      const notas = [nota1, nota2, nota3];
      notas.sort((a, b) => a - b);
      const media = (notas[1] + notas[2]) / 2;

      if (media < mediaMinima) {
        setResultado('Reprovado por nota');
      } else {
        setResultado(`Aprovado com média de ${media.toFixed(2)}`);
      }
    }
  };

  const resetarCampos = () => {
    setEyNota1('');
    setEyNota2('');
    setEyNota3('');
    setEyFaltas('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <FIAPLogo onPress={resetarCampos} />
      <Inputs 
        pmNota1={eyNota1} 
        setPmNota1={setEyNota1} 
        pmNota2={eyNota2} 
        setPmNota2={setEyNota2} 
        pmNota3={eyNota3} 
        setPmNota3={setEyNota3} 
        pmFaltas={eyFaltas} 
        setPmFaltas={setEyFaltas} 
      />
      <Button title="Validar" color={'#F2055C'} onPress={validarSituacao} />
      <Resultado resultado={resultado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#262626',
  },
});
