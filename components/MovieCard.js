import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable
        style={{
          flex: 1,
          borderRadius: 5,
          marginHorizontal: 17,
          marginVertical: 10,
          justifyContent: "center",
          height: Dimensions.get("window").height / 2.5,
          width: (Dimensions.get("window").width - 80) / 2,
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
          style={{
            width: "100%",
            height: "70%",
            resizeMode: "contain",
            borderRadius: 7,
          }}
        />

        <View>
          <Text style={{ marginTop: 6, fontSize: 15, fontWeight: "400" }}>
            {item.title.substr(0, 20)}
          </Text>

          <Text
            style={{
              marginTop: 4,
              fontSize: 15,
              fontWeight: "400",
              color: "gray",
            }}
          >
            U/A • {item.original_language}
          </Text>
        </View>
        <Pressable
        onPress={() => navigation.navigate("Movie",{
          title:item.title,
          movieId:item._id
        })}
          style={{
            backgroundColor: "#ffc40c",
            padding: 10,
            borderRadius: 6,
            marginRight: 10,
            width: 100,
            marginTop:10
          }}
        >
          <Text style={{textAlign:"center",fontSize:15,fontWeight:"500"}}>BOOK</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
