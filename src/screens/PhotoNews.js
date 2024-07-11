import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import MiniHeader from "../components/Header/MiniHeader";
import Header from "../components/Header/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import { fetchAllPhotos } from "../api/api";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";

export default function PhotoNews() {
  const [photos, setPhotos] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const { isLoading: isPhotosLoading } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchAllPhotos,
    onSuccess: (photos) => {
      console.log("Web SStoried data >> ", photos.data);
      setPhotos(photos.data);
    },
    onError: (error) => {
      console.log("Error fetching breaking news", error);
    },
  });

  useEffect(() => {
    console.log("Images:", selectedImages);
    if (selectedImages.length > 0) {
      setModalVisible(true);
    }
  }, [selectedImages]); // Log selectedImages whenever it changes

  const handleOpenImage = (groupIndex) => {
    setSelectedImages(photos[groupIndex].map((photo) => photo.photoUrl));
    setSelectedImageIndex(0);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + selectedImages.length - 1) % selectedImages.length);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View>
          <MiniHeader label="फ़ोटो" />
          {isPhotosLoading ? (
            <Loading />
          ) : (
            <ScrollView contentContainerStyle={styles.scrollView}>
              {/* Render the list of images */}
              {Object.keys(photos).map((groupIndex, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleOpenImage(groupIndex)}
                >
                  <View style={styles.imageContainer}>
                    {/* Thumbnail */}
                    <Image
                      source={{
                        uri:
                          photos[groupIndex][0].photoUrl ||
                          "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                      }}
                      style={styles.thumbnail}
                    />
                    {/* Total number of photos and published date */}
                    <View style={styles.infoContainer}>
                      <Text style={styles.infoText}>
                        Total Photos: {photos[groupIndex].length}
                      </Text>
                      <Text style={styles.infoText}>
                        Published Date: {photos[groupIndex][0].publishedAt}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      </View>

      {/* Fullscreen Image Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContent}>
          <Image
            source={{ uri: selectedImages[selectedImageIndex] }}
            style={styles.fullScreenImage}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handlePreviousImage}>
              <Icon name="chevron-left" size={hp(3)} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseModal}>
              <Icon name="times" size={hp(3)} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextImage}>
              <Icon name="chevron-right" size={hp(3)} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    zIndex: 999,
  },
  scrollView: {
    paddingBottom: hp(20),
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: hp(25),
    marginBottom: 10,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  infoContainer: {
    position: "absolute",
    height: hp(25),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  infoText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  buttonsContainer: {
    position: "absolute",
    top: hp(5),
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
