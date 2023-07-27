import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ModalPortal from "react-native-modals/dist/ModalPortal";
import { Provider } from "react-redux";
import Navigation from "./navigation/StackNavigator";
import { PlaceContext } from "./PlaceContext";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PlaceContext>
          <Navigation />
          <ModalPortal />
        </PlaceContext>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
