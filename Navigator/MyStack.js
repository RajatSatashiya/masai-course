import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products, SingleProduct } from "../Screens";
import MyTab from "./MyTab";

const Stack = createNativeStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
    </Stack.Navigator>
  );
}
