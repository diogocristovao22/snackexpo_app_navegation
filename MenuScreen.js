import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MenuScreen() {
  const burgers = [
    { name: 'DK Burguer', price: 'R$ 21,50', image: require('./assets/hamburgueres/hamburger01.jpeg') },
    { name: 'Almeida Burguer', price: 'R$ 23,50', image: require('./assets/hamburgueres/hamburger02.jpeg') },
    { name: 'Burger Vegetariano', price: 'R$ 25,00', image: require('./assets/hamburgueres/hambuguer03.jpeg')},
    { name: 'King Burguer', price: 'R$ 31,45', image: require('./assets/hamburgueres/hamburger04.jpeg') },
    { name: 'Buguer Duplo', price: 'R$ 28,50', image: require('./assets/hamburgueres/hamburger05.jpeg') },
  ];

  const pizzas = [
    { name: 'Calabresa', price: 'R$ 22,50', image: require('./assets/pizzas/pizzacalabresa01.jpeg') },
    { name: 'Frango Com Catupiry', price: 'R$ 24,50', image: require('./assets/pizzas/pizzafrango02.jpeg') },
    { name: 'Marguerita', price: 'R$ 28,00', image: require('./assets/pizzas/pizzamarguerita03.jpeg') },
    { name: 'Portuguesa', price: 'R$ 23,00', image: require('./assets/pizzas/pizzaportuguesa04.jpeg') },
    { name: 'Mussarela', price: 'R$ 21,60', image: require('./assets/pizzas/pizzamussarela05.jpeg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.address}>Rua 46 maranguape 1, Paulista</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Image source={require('./assets/order-food.png')} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
      
        <Text style={styles.category}>Hamburguer</Text>
        <ScrollView horizontal>
          {burgers.map((burger, index) => (
            <View key={index} style={styles.item}>
              <Image source={burger.image} style={styles.image} />
              <Text style={styles.name}>{burger.name}</Text>
              <Text style={styles.price}>{burger.price}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.category}>Pizza</Text>
        <ScrollView horizontal>
          {pizzas.map((pizza, index) => (
            <View key={index} style={styles.item}>
              <Image source={pizza.image} style={styles.image} />
              <Text style={styles.name}>{pizza.name}</Text>
              <Text style={styles.price}>{pizza.price}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/navegacao/home-icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/navegacao/cart-icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/navegacao/search-icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/navegacao/profile-icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF6600',
    padding: 25,
    alignContent:'center'
  },
  address: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center'
  },
  cartButton: {
    padding: 20,
  },
  cartIcon: {
    width: 30,
    height: 30,
    borderColor: '#fff',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  item: {
    margin: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    color: '#777',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 35,
    backgroundColor: '#FF6600',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
});
