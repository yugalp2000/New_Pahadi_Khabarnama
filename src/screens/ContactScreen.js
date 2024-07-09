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

const ContactScreen = () => {
    const navigation = useNavigation();

    const handlePhonePress = () => {
        Linking.openURL('tel:+919458122002');
    };

    const handleEmailPress = () => {
        Linking.openURL('mailto:pahadikhabarnamanews@gmail.com');
    };

    return (
        <>
            <View>
                <PageHeader />
            </View>
            <ScrollView style={styles.contentContainer}>
            <Text style={styles.description}>{"\n"}
            Pahadikhabarnama.in उत्तराखंड से संचालित प्रमुख न्यूज वेबसाइट्स में से एक है। इस वेबसाइट पर उत्तराखंड की राजनीतिक और सामाजिक हलचलों के साथ-साथ विश्लेषणात्मक लेख भी मिलते हैं.

                    हमारा मानना है कि आंदोलन के गर्भ से जन्मा उत्तराखंड एक विशेष राज्य है। इस राज्य की अपनी खासियतें हैं और अपनी समस्याएं भी। एक नए युग की ओर बढ़ते इस राज्य के लिए आम जनता और उनके द्वारा चुनी हुई सरकार के बीच सार्थक संवाद बहुत जरूरी है। हमारी कोशिश इसी सार्थक संवाद को स्थापित करने की है.
                </Text>
                <Text style={styles.contactTitle}>
                    हमसे संपर्क करने के लिए –
                </Text>
                <TouchableOpacity onPress={handlePhonePress}><Text style={styles.link}>+919458122002</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleEmailPress}><Text style={[styles.emailLink, styles.link]}>pahadikhabarnamanews@gmail.com</Text></TouchableOpacity>
            </ScrollView>
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

export default ContactScreen;
