import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Resultado = ({ resultado }) => {
  return (
    <Text style={[styles.resultado, resultado.includes('Aprovado') ? 
    styles.aprovado : 
    styles.reprovado]}>
      {resultado}
    </Text>
  );
};

const styles = StyleSheet.create({
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  aprovado: {
    color: '#F2055C',  
  },
  reprovado: {
    color: '#ffff', 
  },
});

export default Resultado;