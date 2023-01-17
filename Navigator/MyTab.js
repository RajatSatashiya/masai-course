import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products, Cart } from "../Screens";
import { Feather, Entypo } from "@expo/vector-icons";
import MyStack from "./MyStack";

const BottomTab = createBottomTabNavigator();
export default function MyTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="ProductsPage"
        component={MyStack}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="box" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartPage"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
