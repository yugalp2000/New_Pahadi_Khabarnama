import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Linking, Text, Appearance } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme() || 'light');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  const isLightMode = colorScheme === 'light';

  return (
    <View style={[styles.container, { backgroundColor: isLightMode ? '#fff' : '#333' }]}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icon.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            Linking.openURL(
              "fb://facewebmodal/f?href=https://www.facebook.com/pahadikhabarnamanews?mibextid=ZbWKwL"
            );
          }}
        >
          <View style={styles.iconBox}>
            <Icon name="facebook" size={30} color={"blue"} />
            <Text style={[styles.iconText, { color: isLightMode ? '#000' : '#fff' }]}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            Linking.openURL("https://www.youtube.com/@pahadikhabarnama2568");
          }}
        >
          <View style={styles.iconBox}>
            <Icon name="youtube" size={30} color={"red"} />
            <Text style={[styles.iconText, { color: isLightMode ? '#000' : '#fff' }]}>Youtube</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            Linking.openURL("https://pahadikhabarnama.in/");
          }}
        >
          <View style={styles.iconBox}>
            <Icon name="globe" size={30} color={"black"} />
            <Text style={[styles.iconText, { color: isLightMode ? '#000' : '#fff' }]}>Website</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            Linking.openURL(
              "https://whatsapp.com/channel/0029Va4Jqs0BlHpdmxWEc40M"
            );
          }}
        >
          <View style={styles.iconBox}>
            <Icon name="whatsapp" size={30} color={"green"} />
            <Text style={[styles.iconText, { color: isLightMode ? '#000' : '#fff' }]}>WhatsApp</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <View style={styles.iconBox}>
            <Icon name="phone" size={30} color={"black"} />
            <Text style={[styles.iconText, { color: isLightMode ? '#000' : '#fff' }]}>Contact Us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("Setting")}
        >
          <View style={styles.iconBox}>
            <Icon name="cog" size={30} color={"black"} />
            <Text style={[styles.iconText, { color: isLightMode ? '#000' : '#fff' }]}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(1),
  },
  logoContainer: {
    alignItems: "center",
    marginTop: hp(5),
    marginBottom: hp(2),
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  iconContainer: {
    width: '100%',
    flexDirection: "column",
    alignItems: "center",
  },
  iconButton: {
    marginVertical: hp(1),
    width: '100%',
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CustomDrawerContent;
