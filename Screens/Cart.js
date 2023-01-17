import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { updateCart } from "../Redux/Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({ navigation }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productsReducer.cart);
  console.log(cart);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.heading}>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.thumbnail }} />
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>

        <View style={styles.qty}>
          <Text
            style={styles.cartText}
            onPress={() => dispatch(updateCart({ id: item.id, sign: -1 }))}
          >
            -
          </Text>
          <Text>Qty: {item.qty}</Text>
          <Text
            style={styles.cartText}
            onPress={() => dispatch(updateCart({ id: item.id, sign: 1 }))}
          >
            +
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={cart} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  qty: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  cartText: {
    borderRadius: 10,
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    padding: 5,
    width: 25,
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
