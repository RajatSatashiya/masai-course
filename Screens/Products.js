import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts, addToCart } from "../Redux/Slices/ProductSlice.js";

export default function Products({ navigation }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const add = (item) => {
    dispatch(addToCart(item));
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("SingleProduct", { productID: item.id })
        }
      >
        <Text style={styles.heading}>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.thumbnail }} />
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.cartText} onPress={() => add(item)}>
            Add to Cart
          </Text>
        </Pressable>
      </TouchableOpacity>
    );
  };

  if (products.renderState === "loading") {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <FlatList data={products.products} renderItem={renderItem} />
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
