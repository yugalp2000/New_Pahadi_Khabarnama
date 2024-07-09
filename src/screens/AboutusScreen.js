import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Linking,
} from "react-native";
import {
    ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import PageHeader from '../components/Header/PageHeader';
const AboutusScreen = () => {
    const navigation = useNavigation();

    return (
        <>
        <View>
            <PageHeader />
        </View>
        </>
      )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 16,
        backgroundColor: 'white',
    },
    backButtonContainer: {
        backgroundColor: '#f5f5f5',
        padding: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        backgroundColor: '#cf2e2e',
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 40,
    },
    contentContainer: {
        padding: 16,
    },
    description: {
        fontSize: 24,
        lineHeight: 24,
        marginBottom: 16,
        marginTop: 16,
        textAlign: "justify",
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
    contactInfo: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 4,
    },
    emailLink: {
        color: 'blue',
    },
    link: {
        color: 'blue',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 4,
        // textDecorationLine: 'underline',
    },
});

export default AboutusScreen