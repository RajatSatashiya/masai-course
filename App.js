import { NavigationContainer } from "@react-navigation/native";
import MyTab from "./Navigator/MyTab";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
    </Provider>
  );
}
