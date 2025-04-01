import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Inputs = ({ pmNota1, setPmNota1, pmNota2, setPmNota2, pmNota3, setPmNota3, pmFaltas, setPmFaltas }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nota 1:"
        value={pmNota1}
        onChangeText={setPmNota1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nota 2:"
        value={pmNota2}
        onChangeText={setPmNota2}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nota 3:"
        value={pmNota3}
        onChangeText={setPmNota3}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número de Faltas:"
        value={pmFaltas}
        onChangeText={setPmFaltas}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    width: '50%',
    marginBottom: 14,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
});

export default Inputs;
