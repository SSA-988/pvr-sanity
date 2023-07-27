import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../PlaceContext";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { Foundation } from "@expo/vector-icons";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import "url-search-params-polyfill";
import {URL} from "react-native-url-polyfill"
import { client } from "../pvr-movies/sanity";

const HomeScreen = () => {
  global.URL = URL;
  const params = new URLSearchParams();
  params.set("foo", "bar");
  const navigation = useNavigation();
  const data = [
    {
      adult: false,
      backdrop_path: "/2EL6QrQmUt2ntBXjuHO4KsEfaoU.jpg",
      genre_ids: [27, 9648, 53],
      id: 758323,
      original_language: "English",
      original_title: "The Pope's Exorcist",
      overview:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      popularity: 4935.809,
      poster_path: "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
      release_date: "2023-04-07",
      title: "The Pope's Exorcist",
      video: false,
      vote_average: 7.4,
      vote_count: 400,
    },
    {
      adult: false,
      backdrop_path: "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
      genre_ids: [16, 12, 10751, 14, 35],
      id: 502356,
      original_language: "English",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 4137.922,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-07",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.5,
      vote_count: 1760,
    },
    {
      adult: false,
      backdrop_path: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
      genre_ids: [27],
      id: 713704,
      original_language: "English",
      original_title: "Evil Dead Rise",
      overview:
        "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      popularity: 1136.358,
      poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
      release_date: "2023-04-21",
      title: "Evil Dead Rise",
      video: false,
      vote_average: 7.1,
      vote_count: 356,
    },
    {
      adult: false,
      backdrop_path: "/kZ7unRnWe8UwpJsc1n5venXr9u2.jpg",
      genre_ids: [18, 28],
      id: 619329,
      original_language: "Tamil",
      original_title: "முந்திரிக்காடு",
      overview:
        "In a Village Where they used to Honor Kill Love couples of the opposite cast and in that village A girl and boy from the opposite cast who used to be friends are getting pressure from village people that they love each other . What happens at the End?\r Whether they succeed or not is the story.",
      popularity: 138.808,
      poster_path: "/k7iEwxmphkr1bwb66CHA4dhyyBF.jpg",
      release_date: "2023-04-07",
      title: "Munthiri Kaadu",
      video: false,
      vote_average: 2,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: "/dWwcwqAOkS6e4GCRJ5fC9iSVx9O.jpg",
      genre_ids: [28, 12, 18, 36],
      id: 858082,
      original_language: "Tamil",
      original_title: "பொன்னியின் செல்வன்: பாகம் 2",
      overview:
        "Arulmozhi Varman continues on his journey to become Rajaraja I, the greatest ruler of the historic Chola empire of South India.",
      popularity: 47.466,
      poster_path: "/1fMM5yjLYJNfO3CSQBpfC1kqeIK.jpg",
      release_date: "2023-04-28",
      title: "Ponniyin Selvan: Part II",
      video: false,
      vote_average: 7.3,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: "/sv7JscTpQv8K7XnRwnbKQsCP3N9.jpg",
      genre_ids: [18],
      id: 939423,
      original_language: "Hindi",
      original_title: "अफ़वाह",
      overview:
        "Rahab - a top advertising professional and Nivi - a political heiress, find no place to hide as they get entangled in a vicious rumour created by the social media machinery.",
      popularity: 30.002,
      poster_path: "/ctz7lT3HX78AACZM9LeW0gmjxLJ.jpg",
      release_date: "2023-05-05",
      title: "Afwaah",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35, 18],
      id: 946297,
      original_language: "Malayalam",
      original_title: "ചാൾസ് എന്റർപ്രൈസസ്",
      overview: "",
      popularity: 25.969,
      poster_path: "/bnVRLe76H5Fpg135i0HEV7gvn2K.jpg",
      release_date: "2023-05-05",
      title: "Charles Enterprises",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 1085258,
      original_language: "Bengali",
      original_title: "কীর্তন",
      overview: "Under wraps.",
      popularity: 24.603,
      poster_path: null,
      release_date: "2023-05-05",
      title: "Kirtan",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/tqQNfBHzAqWXbjD2pKFdZTMrQHs.jpg",
      genre_ids: [28, 35],
      id: 1074641,
      original_language: "Telugu",
      original_title: "రామబాణం",
      overview:
        "Years after running away from his pacifist brother Rajaram, Vicky lives as a gangster in Kolkata. When Vicky returns home, Rajaram's organic food business empire is in the doldrums because his rival GK is conspiring against it. Can Vicky save his brother's business in time and teach GK a lesson?",
      popularity: 32.32,
      poster_path: "/gYpJc2TdwJugZF3cG7o7HWwixQy.jpg",
      release_date: "2023-05-05",
      title: "Ramabanam",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [10751, 18],
      id: 958483,
      original_language: "Malayalam",
      original_title: "അനുരാഗം",
      overview:
        "Anuragam is a film set in Kochi, India that explores the complexities of modern-day relationships through the lives of three couples. The story follows Mercy, a single mother and banker who is loved by her manager, Jose, but still grieving the loss of her husband. Meanwhile, popular music composer Shankar is preparing to enter a new relationship after his separation from his wife, Devika, a successful baker. Their daughter, Janani, and Mercy's son, Aswin, are classmates and friends, with their friendship potentially blossoming into romance. Music plays an important role in the film, which ultimately reminds viewers that love can happen at any age and make life worth living.",
      popularity: 24.599,
      poster_path: null,
      release_date: "2023-05-05",
      title: "Anuragam",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/eDVKLzqpNlLx1gzzMaGuqeAxGbQ.jpg",
      genre_ids: [28, 53],
      id: 1069937,
      original_language: "Telugu",
      original_title: "ఉగ్రం",
      overview:
        "CI Shivakumar,a brash police officer, handles a lot of missing cases which has caused great strain on his marriage life. After a serious accident,Shiva admits his wife Aparna and daughter Lucky in hospital, only to find them missing next day. Will Shiva solve the mystery despite suffering from a serious medical condition?",
      popularity: 28.13,
      poster_path: "/cnsJnyCUefcHDQT1OnFgUOSR2nR.jpg",
      release_date: "2023-05-05",
      title: "Ugram",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/ajrV6MRDZ535UsUsqziZqghRKVM.jpg",
      genre_ids: [28, 18, 10749],
      id: 1112505,
      original_language: "Tamil",
      original_title: "குலசாமி",
      overview:
        "Soora Sangu, an auto-rickshaw driver, struggling to cope with post a personal loss, decides to fight against the social evils that exploit women sexually.",
      popularity: 25.972,
      poster_path: "/oNHofVvUfdzVEkTCWodt87x5VlD.jpg",
      release_date: "2023-05-05",
      title: "Kulasami",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [36],
      id: 994290,
      original_language: "Bengali",
      original_title: "শিবপুর",
      overview: "Left Front vs Indian National Congress Party.",
      popularity: 23.705,
      poster_path: "/sCT8M6ellnQysIERqqIbEbymMGc.jpg",
      release_date: "2023-05-05",
      title: "Shibpur",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35],
      id: 1071249,
      original_language: "Malayalam",
      original_title: "വാലാട്ടി",
      overview: "",
      popularity: 26.216,
      poster_path: "/cMwow5tasnOIj27ozjRk15mmozz.jpg",
      release_date: "2023-05-05",
      title: "Valatty",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [12],
      id: 1015580,
      original_language: "Malayalam",
      original_title: "ഖജുരാഹോ Dreams",
      overview: "",
      popularity: 24.305,
      poster_path: "/odDCnXpBVT7Sg3T6JQ9sCYOS5dX.jpg",
      release_date: "2023-05-05",
      title: "Khajuraho Dreams",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [12, 9648],
      id: 1118467,
      original_language: "Bengali",
      original_title: "মাস্টার অংশুমান",
      overview: "Danger in Darjeeling.",
      popularity: 23.386,
      poster_path: "/8PRusWgc65oWhW5j62t2ZuzdwOd.jpg",
      release_date: "2023-05-05",
      title: "Master Anshuman",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/kBdsmOM3QU8bLrATyH0LQ9GWNpV.jpg",
      genre_ids: [10749, 28, 35],
      id: 966719,
      original_language: "Hindi",
      original_title: "किसी का भाई... किसी की जान",
      overview:
        "Bhaijaan, a self-defense trainer lives happily as a bachelor with his three brothers Moh, Ishq and Luv and uses violence to settle disputes. When his brothers, who’ve already found partners, come together to fix a match for him, Bhagya Lakshmi, Bhaijaan decides to mend his ways for his lover's sake. All hell breaks loose when he learns about Bhagya's family facing threats from their haunting past.",
      popularity: 15.87,
      poster_path: "/yJ2JqgfWniQLnXPM5WkM7f1rqaY.jpg",
      release_date: "2023-04-21",
      title: "Kisi Ka Bhai... Kisi Ki Jaan",
      video: false,
      vote_average: 6.2,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 1046732,
      original_language: "Bengali",
      original_title: "যত কাণ্ড কলকাতায়",
      overview: "",
      popularity: 25.866,
      poster_path: null,
      release_date: "2023-05-06",
      title: "Joto Kando Kolkatay",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/15z4HnocYG7qmgN9R5x4TzA8xlw.jpg",
      genre_ids: [28],
      id: 1034187,
      original_language: "Telugu",
      original_title: "ధీర",
      overview: "",
      popularity: 20.664,
      poster_path: "/w6ApC28wZTTWFPFdQGW5elpGP70.jpg",
      release_date: "2023-05-05",
      title: "Dheera",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/hcqY0Er8AhU3UiSAxB5tT6sBiZv.jpg",
      genre_ids: [28, 53],
      id: 885184,
      original_language: "Telugu",
      original_title: "దసరా",
      overview:
        "In 1990s, Set in small village Veerlapally, Dharani, Vennela, and Suri are childhood friends. Dharani loves Vennela, but she has Suri in her mind. Knowing Suri’s interest in Vennela, Dharani sacrifices his love and helps get them married. But Local politics between Rajanna, Shivanna and the latter's son Chinna Nambi threaten to disrupt their lives.",
      popularity: 11.3,
      poster_path: "/xgIbeYWlfzSGHJ8VtawQ4rf52a7.jpg",
      release_date: "2023-03-30",
      title: "Dasara",
      video: false,
      vote_average: 9,
      vote_count: 1,
    },
  ];
  const { selectedCity, setSelectedCity } = useContext(Place);
  console.log(selectedCity)
  const moveAnimation = new Animated.Value(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState();
  const [moviesData,setMoviesData]  = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`
      *[_type == "movie"]
      `)
      setMoviesData(result);
      setSortedData(result);
    }
    fetchData();
  },[])

  console.log(moviesData)
  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: -30,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [selectedCity]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Hello Sujan Anand</Text>,
      headerStyle: {
        backgroundColor: "#F5F5F5",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
      headerRight: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons
            onPress={() => navigation.navigate("Places")}
            name="ios-location-outline"
            size={24}
            color="black"
          />

          <Pressable onPress={() => navigation.navigate("Places")}>
            <Animated.Text
              style={[
                styles.text,
                { transform: [{ translateX: moveAnimation }] },
              ]}
            >
              <Text>{selectedCity}</Text>
            </Animated.Text>
          </Pressable>
        </Pressable>
      ),
    });
  }, [selectedCity]);
  const languages = [
    {
      id: "0",
      language: "English",
    },
    {
      id: "10",
      language: "Kannada",
    },
    {
      id: "1",
      language: "Telugu",
    },
    {
      id: "2",
      language: "Hindi",
    },
    {
      id: "3",
      language: "Tamil",
    },
    {
      id: "5",
      language: "Malayalam",
    },
  ];
  const genres = [
    {
      id: "0",
      language: "Horror",
    },
    {
      id: "1",
      language: "Comedy",
    },
    {
      id: "2",
      language: "Action",
    },
    {
      id: "3",
      language: "Romance",
    },
    {
      id: "5",
      language: "Thriller",
    },
    {
      id: "6",
      language: "Drama",
    },
  ];
  const applyFilter = (filter) => {
    setModalVisible(false);
    switch (filter) {
      case "English":
        setSortedData(
          sortedData.filter((item) => item.original_language === selectedFilter)
        );
        break;
      case "Kannada":
        setSortedData(
          sortedData.filter((item) => item.original_language === selectedFilter)
        );
        break;
      case "Telugu":
        setSortedData(
          sortedData.filter((item) => item.original_language === selectedFilter)
        );
        break;
      case "Hindi":
        setSortedData(
          sortedData.filter((item) => item.original_language === selectedFilter)
        );
        break;
      case "Tamil":
        setSortedData(
          sortedData.filter((item) => item.original_language === selectedFilter)
        );
        break;
      case "Malayalam":
        setSortedData(
          sortedData.filter((item) => item.original_language === selectedFilter)
        );
        break;
    }
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListHeaderComponent={Header}
        data={sortedData}
        renderItem={({ item, index }) => <MovieCard item={item} key={index} />}
      />
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          position: "absolute",
          bottom: 10,
          backgroundColor: "#ffc40c",
          width: 60,
          height: 60,
          borderRadius: 30,
          right: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Foundation name="filter" size={24} color="black" />
      </Pressable>
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom: 30,
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Filters" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        visible={modalVisible}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <Text
            style={{
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Languages
          </Text>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {languages.map((item, index) =>
              selectedFilter === item.language ? (
                <Pressable
                  onPress={() => setSelectedFilter()}
                  style={{
                    margin: 10,
                    backgroundColor: "orange",
                    paddingVertical: 5,
                    borderRadius: 25,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "500" }}>
                    {item.language}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => setSelectedFilter(item.language)}
                  style={{
                    margin: 10,
                    borderColor: "#C8C8C8",
                    borderWidth: 1,
                    paddingVertical: 5,
                    borderRadius: 25,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text>{item.language}</Text>
                </Pressable>
              )
            )}
          </Pressable>

          <Text
            style={{
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Genres
          </Text>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {genres.map((item, index) => (
              <Pressable
                style={{
                  margin: 10,
                  borderColor: "#C8C8C8",
                  borderWidth: 1,
                  paddingVertical: 5,
                  borderRadius: 25,
                  paddingHorizontal: 11,
                }}
              >
                <Text>{item.language}</Text>
              </Pressable>
            ))}
          </Pressable>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
