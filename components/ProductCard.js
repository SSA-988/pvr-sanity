import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, incrementQty } from "../CartReducer";

const ProductCard = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [additems, setAdditems] = useState(1);
  const dispatch = useDispatch();
  const addItemtoCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <Pressable
      style={{
        flex: 1,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 7,
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 150,
          resizeMode: "cover",
          borderRadius: 5,
          marginBottom: 12,
        }}
        source={{ uri: item.image }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "400" }}>{item.name}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600" }}>{item.price}</Text>
          {cart.some((val) => val.id === item.id) ? (
            <Pressable
              style={{
                flexDirection: "row",
                paddingVertical: 5,
              }}
            >
              <Pressable
                onPress={() => {
                  if (additems == 1) {
                    setAdditems(1);
                    dispatch(decrementQty(item));
                  } else {
                    setAdditems((c) => c - 1);
                    dispatch(decrementQty(item));
                  }
                }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#FFA500",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    paddingHorizontal: 3,
                    fontWeight: "600",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    paddingHorizontal: 8,
                  }}
                >
                  {additems}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAdditems((c) => c + 1);
                  dispatch(incrementQty(item));
                }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#FFA500",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    paddingHorizontal: 5,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => addItemtoCart(item)}
              style={{
                backgroundColor: "#FFA500",
                borderRadius: 5,
                paddingHorizontal: 9,
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontWeight: "500",
                }}
              >
                ADD
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
