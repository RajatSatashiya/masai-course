import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { addToCart } from "../Redux/Slices/ProductSlice.js";

export default function SingleProduct({ route }) {
  const [item, setItem] = useState([]);

  const add = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${route?.params.productID}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{item.title}</Text>
      <Image style={styles.image} source={{ uri: item.thumbnail }} />
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>₹ {item.price}</Text>
      <Pressable style={styles.btn}>
        <Text style={styles.cartText} onPress={() => add(item)}>
          Add to Cart
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cartText: {
    borderRadius: 5,
    backgroundColor: "black",
    textAlign: "center",
    marginTop: 10,
    color: "white",
    padding: 5,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
  },
  price: {
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFD88F",
    margin: 10,
    padding: 10,
  },
});
