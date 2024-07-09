import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PageHeader from '../components/Header/PageHeader';

const SettingScreen = () => {
  const navigation = useNavigation();
  const clearSavedArticles = async () => {
    try {
      await AsyncStorage.removeItem("savedArticles");
      console.log("Clear all saved articles");
    } catch (error) {
      console.log("Error clearing saved articles", error);
    }
  };

  const showClearBookmarksAlert = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to clear all bookmarks?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: clearSavedArticles,
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <>
      <View>
        <PageHeader />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={showClearBookmarksAlert}
        >
          <Text style={styles.buttonText}>Clear Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TermConditions")}
        >
          <Text style={styles.buttonText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default SettingScreen;
