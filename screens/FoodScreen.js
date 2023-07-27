import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const FoodScreen = () => {
  const data = [
    {
      id: "0",
      name: "Crispy Veg Double Patty + Crispy Veg Double Patty",
      image:
        "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314053635821439_262x360jpg",
      description: "Crispy Veg Double Patty + Crispy Veg Double Patty",
      price: 180,
      veg: true,
    },
    {
      id: "1",
      name: "Lit Whopper Jr Veg + Lit Whopper Jr Veg",
      image:
        "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062022014950_262x360jpg",
      description: "Lit Whopper Jr Veg + Lit Whopper Jr Veg",
      price: 238,
      veg: true,
    },
    {
      id: "2",
      name: "Crsipy Chicken Double Patty + Crsipy Chicken Double Patty",
      image:
        "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220613110553977083_262x360jpg",
      description: "Crsipy Chicken Double Patty + Crsipy Chicken Double Patty",
      price: 258,
      veg: false,
    },
    {
      id: "3",
      name: "Chicken Whopper + Chicken Whopper",
      image:
        "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062201549185_262x360jpg",
      description: "Chicken Whopper + Chicken Whopper",
      price: 398,
      veg: false,
    },
    {
      id: "4",
      name: "2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Strips",
      image:
        "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510124442700555_262x360jpg",
      description: "2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Strips",
      price: 348,
      veg: true,
    },
    {
      id: "5",
      name: "2 Lite Whopper Jr Veg + 1 King Fries",
      image:
        "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510124749940592_262x360jpg",
      description: "2 Lite Whopper Jr Veg + 1 King Fries",
      price: 225,
      veg: true,
    },
  ];
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params)
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  const seatNumbers = route.params.selectedSeats.map((seat) => seat.row + seat.seat);

  const result = seatNumbers.join(" ");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerLeft: () => <Text style={{ fontSize: 16 }}>ORDER SNACKS</Text>,
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate("Confirmation", {
              mall: route.params.mall,
              showtime: route.params.showtime,
              name: route.params.name,
              selectedDate: route.params.selectedDate,
              seats: result,
              rows: route.params.rows,
              selectedSeats: selectedSeats,
              docId: route.params.docId,
            });
          }}
          style={{
            borderRadius: 5,
            backgroundColor: "#F4A460",
            paddingHorizontal: 15,
            paddingVertical: 6,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Continue</Text>
        </Pressable>
      ),
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <ProductCard item={item} key={index} />
        )}
      />
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#FEBE10",
            padding: 10,
            position: "absolute",
            bottom: 10,
            left: 30,
            width:"90%",
            borderRadius:4
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text>
                {cart.length} items | {total}
              </Text>
              <Text style={{marginTop:4,color:"white",fontSize:15,fontWeight:"500"}}>Extra charges will apply</Text>
            </View>
            <Pressable onPress={() => {
               navigation.navigate("Confirmation", {
                mall: route.params.mall,
                showtime: route.params.showtime,
                name: route.params.name,
                selectedDate: route.params.selectedDate,
                seats: result,
                rows: route.params.rows,
                selectedSeats: route.params.selectedSeats,
                docId: route.params.docId,
              });
            }}>
              <Text style={{fontSize:15,fontWeight:"500"}}>Proceed</Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({});
