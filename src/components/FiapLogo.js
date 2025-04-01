import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const FIAPLogo = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/logo-fiap.jpg')} style={styles.logo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200, 
    height: 58, 
    marginBottom: 40,
  },
});

export default FIAPLogo;
