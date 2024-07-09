import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageHeader from '../components/Header/PageHeader';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <PageHeader />
      </View>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.policyText}>
            <Text style={styles.heading}>Pahadi Khabarnama - News App</Text>{"\n\n"}
            Stay updated with the latest news from Uttarakhand, India, and around the world. Our app offers a seamless news experience with features such as:
            {"\n\n"}<Text style={styles.subHeading}>Home:</Text> Get the latest news and updates.
            {"\n"}<Text style={styles.subHeading}>Country:</Text> News from across India.
            {"\n"}<Text style={styles.subHeading}>State:</Text> Regional news from different states.
            {"\n"}<Text style={styles.subHeading}>World:</Text> International news coverage.
            {"\n"}<Text style={styles.subHeading}>Saved News:</Text> Save articles to read later.
            {"\n"}<Text style={styles.subHeading}>Live:</Text> Watch live news broadcasts.
            {"\n"}<Text style={styles.subHeading}>Videos:</Text> Browse and watch news videos.
            {"\n"}<Text style={styles.subHeading}>Web Stories:</Text> Read engaging web stories.
            {"\n\n"}<Text style={styles.heading}>Additional Features:</Text>
            {"\n"}<Text style={styles.subHeading}>YouTube Channel:</Text> Access our YouTube channel to watch videos and subscribe for updates.
            {"\n"}<Text style={styles.subHeading}>Facebook Page:</Text> Follow our Facebook page for more updates.
            {"\n"}<Text style={styles.subHeading}>WhatsApp Group:</Text> Join our WhatsApp group to stay connected with the community.
            {"\n"}<Text style={styles.subHeading}>Official Website:</Text> Visit our website for more detailed articles and news.
            {"\n\n"}<Text style={styles.heading}>I. Introduction</Text>
            {"\n"}Pahadi Khabarnama - News App values the trust placed in us by our users and adheres to the highest standards of privacy guidelines to protect the information shared by you with us. This Privacy Policy governs the use of Personal Information shared (as defined below) with or collected by Pahadi Khabarnama - News App from the users or subscribers.
            {"\n\n"}<Text style={styles.heading}>II. Scope of this Privacy Policy</Text>
            {"\n"}This privacy policy describes the usage of information provided or collected on the sites and applications where this privacy policy is posted. We follow this privacy policy in accordance with applicable law in the places where we operate. In some cases, we may provide additional data privacy notices specific to certain services or regions. Those terms are to be read in combination with this policy.
            {"\n"}Please keep in mind that when you provide information to us on a third-party site or platform (for example, via our applications like social media login), the information we collect through those third-party sites linked with our applications is covered by this privacy policy. The information the third-party site or platform collects is subject to the third-party site or platform’s privacy practices. Privacy choices you have made on the third-party site or platform will not apply to our use of the information we have collected directly through our applications. Please also note that our sites and applications may contain links to other sites not owned or controlled by us, and we are not responsible for the privacy practices of those sites. We encourage you to be aware when you leave our sites or applications and to read the privacy policies of other sites that may collect your personal information.
            {"\n\n"}<Text style={styles.heading}>III. User Consent</Text>
            {"\n"}By using Pahadi Khabarnama - News App, (for example, when you register for an account, purchase a service, enter a contest or promotions, communicate with us on our sites or applications), you agree to provide consent to our collection, use, and sharing of your personal information as described in this policy. In some cases, particularly if you reside in a country governed by a data protection regulation, we may ask you to provide explicit consent to access our services before proceeding with further operations.
            {"\n\n"}<Text style={styles.heading}>IV. Collection and Use of Personal Information</Text>
            {"\n"}‘Personal Information’ or ‘PII’ is defined as any information that identifies (whether directly or indirectly) a particular individual or natural person, such as the individual’s name, postal address, email address, and mobile number indicating that particular person or is identifiable. When anonymous information is directly or indirectly associated with personal information, the resulting information also is treated as personal information.
            {"\n\n"}Information you provide to us: We may ask for and collect the following personal information about you when you use the Pahadi Khabarnama - News App, and without this information, we may not be able to provide you with all the requested services:
            {"\n"}<Text style={styles.listItem}>• First and Last Name</Text>
            {"\n"}<Text style={styles.listItem}>• Email ID</Text>
            {"\n"}<Text style={styles.listItem}>• Primary Phone Number</Text>
            {"\n\n"}Additionally, we provide links to our YouTube channel, Facebook page, WhatsApp group, and our website within the app:
            {"\n"}<Text style={styles.listItem}>• When a user clicks on the WhatsApp link, they are directed to our WhatsApp group and can join the group. If they join the group, we may collect their mobile number.</Text>
            {"\n"}<Text style={styles.listItem}>• When a user clicks on the YouTube link, they are redirected to our YouTube channel where they can view our videos and subscribe to our channel. If they subscribe to our channel, we may collect their name.</Text>
            {"\n"}<Text style={styles.listItem}>• When a user clicks on the Facebook link, they are redirected to our Facebook page where they can check our feed and follow us. If they follow our page, we may collect their name.</Text>
            {"\n"}<Text style={styles.listItem}>• When a user clicks on the browser link, they are redirected to our website.</Text>
            {"\n\n"}Information we collect automatically: We collect information about you and your use of our service, your interactions with us, and our advertising, as well as information regarding your computer or other device used to access our service. The information includes:
            {"\n"}<Text style={styles.listItem}>• Your interactions with our email, customer care, and messaging platform.</Text>
            {"\n"}<Text style={styles.listItem}>• Geo-location information like IP addresses.</Text>
            {"\n\n"}Information we collect through third parties: If you link, connect, or login through your Pahadi Khabarnama - News App account with a third-party service (i.e., Google, Facebook, and Twitter), they may send us information such as your registration and profile information from the service.
            {"\n\n"}<Text style={styles.heading}>V. Purposes and Lawfulness of Processing</Text>
            {"\n"}We will only collect and process personal data about you where we have a lawful basis. Lawful bases on which we process your personal information include obtaining explicit consent from you for processing your personal information or processing for “legitimate interests” where processing is necessary by us to provide you with customer support or process your data for providing premium services (e.g., processing your information by our payment gateway service providers).
            {"\n"}We use information to provide, analyse, administer, enhance, and personalize our service and marketing efforts, to process your registration, your orders, payments, and to communicate with you related to the below-mentioned points. For example, we use information to:
            {"\n"}<Text style={styles.listItem}>• Prevent, detect, and investigate potentially prohibited or illegal activities, including fraud, and enforcing our terms (such as determining free trial eligibility);</Text>
            {"\n"}<Text style={styles.listItem}>• Communicate with you concerning our service (for example, by email, push notifications, text messaging, and online messaging channels), so that we can send you news about Pahadi Khabarnama - News App, details about new features and content available on the Pahadi Khabarnama - News App, and special offers, promotional announcements, and consumer surveys, and to assist you with operational requests such as password reset requests.</Text>
            {"\n"}<Text style={styles.listItem}>• Notify you about changes in terms of service.</Text>
            {"\n"}<Text style={styles.listItem}>• Allow you to participate in interactive features offered through our Services.</Text>
            {"\n"}<Text style={styles.listItem}>• Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing, chargeback, and collection.</Text>
            {"\n\n"}We may also use your information to contact you about our own and third-party services that may be of interest to you. If you do not want us to use your information in this way, please provide explicit consent for the same when we collect your data and/or adjust your user preferences in your account profile concerning your choices/preferences provided.
            {"\n\n"}<Text style={styles.heading}>VI. Disclosure to Third Parties</Text>
            {"\n"}<Text style={styles.subHeading}>General Disclosure:</Text> At times, Pahadi Khabarnama - News App may make certain personal information available to strategic partners that work with Pahadi Khabarnama - News App to provide service or that help Pahadi Khabarnama - News App market to customers. For example, when you purchase and activate a subscription, you authorize Pahadi Khabarnama - News App to exchange the information you provide during the activation process to carry out a service. If you are approved for service, your account will be governed by Pahadi Khabarnama - News App’s privacy policy. Personal information will only be shared by Pahadi Khabarnama - News App to provide or improve our service and marketing aspects; it will not be shared with third parties for their marketing purposes.
            {"\n\n"}<Text style={styles.subHeading}>Promotional Offers:</Text> We’ll share or disclose your personal information outside of Pahadi Khabarnama - News App when we have your consent. For example, providing email-related services such as marketing newsletters, promotions, and offers.
            {"\n\n"}<Text style={styles.subHeading}>Business Transfers:</Text> We provide personal information to our affiliates and other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures. For example, we use service providers to help us with customer support.
            {"\n\n"}<Text style={styles.subHeading}>Legal:</Text> In the event of any requirement by court order, government, or quasi-government agency to disclose your personal information, we will disclose information as may be legally required. We may also disclose your personal information if we, in good faith, believe that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal processes.
            {"\n"}In the event Pahadi Khabarnama - News App is merged with or acquired by another company, we and our affiliates may share your personal information, wholly or in part, with another business entity.
            {"\n\n"}<Text style={styles.heading}>VII. Your Controls and Choices</Text>
            {"\n"}We provide you the ability to exercise certain controls and choices regarding our collection, use, and sharing of your personal information. In accordance with applicable law, your controls and choices may include:
            {"\n\n"}<Text style={styles.subHeading}>Managing Your Information:</Text> You can access and update some of your personal information through your account settings. If you have chosen to connect your Pahadi Khabarnama - News App account to a third-party application, like Facebook, Google, or Twitter, you can change your settings and remove permission for the app by changing your account settings. You are responsible for keeping your personal information up-to-date. Pahadi Khabarnama - News App will send you periodic reminders via email to maintain the accuracy of your personal information.
            {"\n\n"}<Text style={styles.subHeading}>Rectification of Inaccurate or Incomplete Information:</Text> You can ask us to correct inaccurate or incomplete personal information concerning you (this is the information that you cannot update yourself within your Pahadi Khabarnama - News App account) by sending us an email.
            {"\n\n"}<Text style={styles.subHeading}>Data Retention and Erasure:</Text> We retain your personal information as long as necessary for the performance of the contract between you and us to comply with our legal obligations. If you no longer want us to use your information, then you can request that we erase your personal information and close your Pahadi Khabarnama - News App account. Please note that if you request the erasure of your personal information:
            {"\n"}<Text style={styles.listItem}>• We may retain some of your personal information as necessary for our legitimate business interests, such as fraud detection and prevention and enhancing safety. For example, if we suspend a Pahadi Khabarnama - News App account for fraud or safety reasons, we may retain certain information from that account to prevent that user from opening a new account in the future.</Text>
            {"\n"}<Text style={styles.listItem}>• We may retain and use your personal information to the extent necessary to comply with our legal obligations. For example, we may keep some of your information for tax, legal reporting, and auditing obligations.</Text>
            {"\n"}<Text style={styles.listItem}>• Because we maintain copies of the Pahadi Khabarnama - News App to protect from inadvertent loss and destruction, residual copies of your personal information may not be removed from our backup systems for a limited period of time.</Text>
            {"\n\n"}<Text style={styles.subHeading}>Withdrawing Consent and Restriction of Processing:</Text> For withdrawing your consent at any time during the tenure of your services with us, you may choose to do so by sending us an email. We shall review your request and may ask you to verify your identity. Post verification, we will withdraw the consent for which the request was made by you and stop any further processing of your personal information.
            {"\n\n"}<Text style={styles.subHeading}>Objection to Processing:</Text> Where your personal information is processed for direct marketing purposes, you may, at any time, ask us to cease processing your data for these direct marketing purposes by sending an email to us.
            {"\n\n"}<Text style={styles.subHeading}>Complaints:</Text> You can write to our data protection officer in case of any grievance or complaint. You have the right to complain about the data processing activities carried out by Pahadi Khabarnama - News App before the competent data protection authorities.
            {"\n\n"}<Text style={styles.heading}>VIII. Children's Privacy</Text>
            {"\n"}Pahadi Khabarnama - News App is not intentionally designed for or directed at persons less than 16 years of age. Pahadi Khabarnama - News App does not knowingly permit any person who is under 16 years of age to register with the services or to provide any other personally identifying information. If Pahadi Khabarnama - News App becomes aware that any personally identifiable information of persons less than 16 years of age has been collected on the Pahadi Khabarnama - News App without verified parental consent, then Pahadi Khabarnama - News App will take the appropriate steps to delete any such information and notify the parent.
            {"\n"}However, we consider it the responsibility of parents to monitor their children’s use of our services. Nevertheless, it is our policy not to collect and process any personal information from children below 16 years of age or offer to send any promotional materials to persons in that category. Pahadi Khabarnama - News App does not seek or intend to seek or receive any personal information from children. Should a parent or guardian have reasons to believe that a minor has provided Pahadi Khabarnama - News App with personal information without their prior consent, please contact our customer support team to ensure that the personal information is removed from Pahadi Khabarnama - News App.
            {"\n\n"}<Text style={styles.heading}>IX. Data Transfer, Storage, and Processing Globally</Text>
            {"\n"}We operate globally and may transfer your personal information to individual companies of Pahadi Khabarnama - News App affiliated companies or third parties in locations around the world for the purposes described in this privacy policy. Wherever your personal information is transferred, stored, or processed by us, we will take reasonable steps to safeguard the privacy of your personal information. Additionally, when using or disclosing personal information transferred from the European Union, we use standard contractual clauses approved by the European Commission and adopt other means under European Union law for ensuring adequate safeguards.
            {"\n\n"}<Text style={styles.heading}>X. Security and Compliance with Laws</Text>
            {"\n"}We are continuously implementing and updating administrative, technical, and physical security measures to help protect your information against unauthorized access, loss, destruction, or alteration. Some of the safeguards we use to protect your information are firewalls, data encryption, and information access controls. If you know or have reason to believe that your Pahadi Khabarnama - News App account credentials have been lost, stolen, altered, or otherwise compromised, or in the case of any actual or suspected unauthorized use of your account, please contact us by contacting our customer support team.
            {"\n\n"}<Text style={styles.heading}>XI. Changes in Policy</Text>
            {"\n"}This Privacy Policy is subject to change from time to time. We reserve the right, at our sole discretion, to modify the terms of this Privacy Policy from time to time to ensure compliance with applicable laws (“Updated Terms”). The Updated Terms shall be effective immediately and shall supersede these terms of this Privacy Policy. We will not be under an obligation to notify you of any changes to this privacy policy except if the changes made to the policy significantly affect your rights or as may be required by law. You shall be solely responsible for reviewing the Privacy Policy from time to time for any modifications. By continuing to use Pahadi Khabarnama - News App after the updated Terms have been published, you affirm your agreement to the updated terms.
            {"\n\n"}<Text style={styles.heading}>XII. Contact Information</Text>
            {"\n"}<Text style={styles.subHeading}>Support:</Text> If you require any information or clarification regarding the use of your personal information or this privacy policy or have grievances with respect to the use of your personal information, please email us at pahadikhabarnamanews@gmail.com.
            {"\n\n"}<Text style={styles.subHeading}>Data Controller Officer:</Text> If you have any queries or complaints regarding the collection, processing, or transfer of personal data/information or regarding this policy, please contact us at pahadikhabarnamanews@gmail.com.
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  policyText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    marginLeft: 10,
  },
});

export default PrivacyPolicyScreen;
