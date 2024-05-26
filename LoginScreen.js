import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://th.bing.com/th/id/OIG2.4u9.Hp04_NPfwkWbXhqQ?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn'}} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Usuário/ou Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
          <Text style={styles.registerText}>Cadastrar-se</Text>
        </TouchableOpacity>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
            <FontAwesome name="google" size={30} color="#FF0027" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
            <FontAwesome name="facebook" size={30} color="#455DFF" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.apple.com')}>
            <FontAwesome name="apple" size={30} color="#000000" style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F24F00', // Fundo laranja
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    position: 'absolute',
    top: 200,
    borderRadius: 50, // Para deixar as pontas arredondadas
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#DD4E0B', // Fundo laranja mais claro
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150, // Ajuste a posição para centralizar melhor abaixo do ícone
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});
