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

export default function Cart({ navigation }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productsReducer.cart);

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
          <Text style={styles.cartText}>+</Text>
        </Pressable>

        <Pressable style={styles.btn}>
          <Text style={styles.cartText}>-</Text>
        </Pressable>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList data={cart} renderItem={renderItem} />
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
