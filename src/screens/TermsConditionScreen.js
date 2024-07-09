import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import PageHeader from '../components/Header/PageHeader';


const TermsConditionScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <PageHeader />
      </View>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.policyText}>
            <Text style={styles.bold}>DISCLAIMER & TERMS OF USE</Text>
            {"\n\n"}
            By accessing PAHADIKHABARNAMA.IN, or any of its associate/group sites, you have read, understood and agree to be legally bound by the terms of the following disclaimer and user agreement:
            {"\n\n"}
            This Site is owned and operated by PAHADIKHABARNAMA.IN, and contains material which is derived in whole or in part from material supplied by the Company, various new agencies and other sources, and is protected by international copyright and trademark laws. The restrictions on use of the material and content on this PAHADIKHABARNAMA.IN, Site by the Subscriber are specified below. Except where specifically authorized, the Subscriber may not modify, copy, reproduce, republish, upload, post, transmit or distribute in any way any material from this site including code and software.
            {"\n\n"}
            PAHADIKHABARNAMA.IN, has taken due care and caution in compilation of data for its web site. The views and investment tips expressed if any by investment experts on PAHADIKHABARNAMA.IN, are their own, and not that of the website or its management. PAHADIKHABARNAMA.IN, advises users to check with certified experts before taking any investment decision. However, PAHADIKHABARNAMA.IN, does not guarantee the accuracy, adequacy or completeness of any information and is not responsible for any errors or omissions or for the results obtained from the use of such information. PAHADIKHABARNAMA.IN, especially states that it has no financial liability whatsoever to any user on account of the use of information provided on its website. The Stock Market data has been provided on this site through various news agencies and information available in public domain for information purposes only.
            {"\n\n"}
            The Company shall have the right at any time to change or modify the terms and conditions applicable to Subscriber’s use of the PAHADIKHABARNAMA.IN,, or any part thereof, or to impose new conditions, including but not limited to, adding fees and charges for use. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including but not limited to, posting on the PAHADIKHABARNAMA.IN,, or by electronic or conventional mail, or by any other means by which Subscriber obtains notice thereof. Any use of the PAHADIKHABARNAMA.IN, Site by Subscriber after such notice shall be deemed to constitute acceptance by Subscriber of such changes, modifications or additions.
            {"\n\n"}
            <Text style={styles.bold}>Terms of Use:</Text>
            {"\n\n"}
            By visiting our site you are agreeing to be bound by the following terms and conditions. We may change these terms and conditions at any time. Your continued use of PAHADIKHABARNAMA.IN, means that you accept any new or modified terms and conditions that we come up with. Please re-visit the 'Terms of Use' link at our site from time to time to stay abreast of any changes that we may introduce.
            {"\n\n"}
            The term 'PAHADIKHABARNAMA.IN,' is used through this entire Terms of Use document to refer to the website, its owners and the employees and associates of the owner.
            {"\n\n"}
            <Text style={styles.bold}>1) REGISTRATION</Text>
            {"\n\n"}
            By registering, you certify that all information you provide, now or in the future, is accurate. Your registration (if in any manner) at PAHADIKHABARNAMA.IN, is valid for 90 days from the date you first login and is automatically renewed for a period of 90 days every time you login thereafter. If you do not login at PAHADIKHABARNAMA.IN, for a continuous period of 90 days your registration could be automatically cancelled. PAHADIKHABARNAMA.IN, reserves the right, in its sole discretion, to deny you access to this website or any portion thereof without notice for the following reasons (a) immediately by PAHADIKHABARNAMA.IN, for any unauthorized access or use by you (b) immediately by PAHADIKHABARNAMA.IN, if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) immediately, if you violate any of the other terms and conditions of this User Agreement.
            {"\n\n"}
            <Text style={styles.bold}>2) LICENSE</Text>
            {"\n\n"}
            PAHADIKHABARNAMA.IN, hereby grants you a limited, non-exclusive, non-assignable and non-transferable license to access PAHADIKHABARNAMA.IN, provided and expressly conditioned upon your agreement that all such access and use shall be governed by all of the terms and conditions set forth in this USER AGREEMENT.
            {"\n\n"}
            <Text style={styles.bold}>3) COPYRIGHT & NO RETRANSMISSION OF INFORMATION</Text>
            {"\n\n"}
            PAHADIKHABARNAMA.IN, as well as the design and information contained in this site is the valuable, exclusive property of PAHADIKHABARNAMA.IN,, and nothing in this Agreement shall be construed as transferring or assigning any such ownership rights to you or any other person or entity.
            {"\n\n"}
            You may not resell, redistribute, broadcast or transfer information, software and applications or use the information, software and applications provided by PAHADIKHABARNAMA.IN, in a searchable, machine-readable database unless separately and specifically authorized in writing by PAHADIKHABARNAMA.IN, prior to such use. You may not rent, lease, sublicense, distribute, transfer, copy, reproduce, publicly display, publish, adapt, store or time-share PAHADIKHABARNAMA.IN, any part thereof, or any of the software, application or information received or accessed there from to or through any other person or entity unless separately and specifically authorized in writing by PAHADIKHABARNAMA.IN, prior to such use. In addition, you may not remove, alter or obscure any copyright, legal or proprietary notices in or on any portions of PAHADIKHABARNAMA.IN, without prior written authorization. Except as set forth herein, any other use of the information, software or application contained in this site requires the prior written consent of PAHADIKHABARNAMA.IN, and may require a separate fee.
            {"\n\n"}
            <Text style={styles.bold}>4) DELAYS IN SERVICES</Text>
            {"\n\n"}
            Neither PAHADIKHABARNAMA.IN, (including its and their directors, employees, affiliates, agents, representatives or subcontractors) shall be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions due to electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other like causes. PAHADIKHABARNAMA.IN, shall have no responsibility to provide you access to PAHADIKHABARNAMA.IN while interruption of PAHADIKHABARNAMA.IN is due to any such cause shall continue.
            {"\n\n"}
            <Text style={styles.bold}>5) LIABILITY DISCLAIMER</Text>
            {"\n\n"}
            YOU EXPRESSLY AGREE THAT USE OF THE WEBSITE IS AT YOUR SOLE RISK.
            {"\n\n"}
            THE CONTENTS, INFORMATION, SOFTWARE, PRODUCTS, FEATURES AND SERVICES PUBLISHED ON THIS WEB SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE CONTENTS HEREIN. PAHADIKHABARNAMA.IN, AND/OR ITS RESPECTIVE SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS WEB SITE AT ANY TIME. THIS WEB SITE MAY BE TEMPORARILY UNAVAILABLE FROM TIME TO TIME DUE TO REQUIRED MAINTENANCE, TELECOMMUNICATIONS INTERRUPTIONS, OR OTHER DISRUPTIONS. PAHADIKHABARNAMA.IN, (AND ITS OWNERS, SUPPLIERS, CONSULTANTS, ADVERTISERS, AFFILIATES, PARTNERS, EMPLOYEES OR ANY OTHER ASSOCIATED ENTITIES, ALL COLLECTIVELY REFERRED TO AS ASSOCIATED ENTITIES HEREAFTER) SHALL NOT BE LIABLE TO USER OR MEMBER OR ANY THIRD PARTY SHOULD PAHADIKHABARNAMA.IN, EXERCISE ITS RIGHT TO MODIFY OR DISCONTINUE ANY OR ALL OF THE CONTENTS, INFORMATION, SOFTWARE, PRODUCTS, FEATURES AND SERVICES PUBLISHED ON THIS WEBSITE.
            {"\n\n"}
            IN NO EVENT SHALL PAHADIKHABARNAMA.IN, AND/OR ITS ASSOCIATED ENTITIES BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THIS WEB SITE OR WITH THE DELAY OR INABILITY TO USE THIS WEBSITE, OR FOR ANY CONTENTS, INFORMATION, SOFTWARE, PRODUCTS, FEATURES AND SERVICES OBTAINED THROUGH THIS WEB SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS WEB SITE, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF PAHADIKHABARNAMA.IN, OR ANY OF ITS ASSOCIATED ENTITIES HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.
            {"\n\n"}
            <Text style={styles.bold}>6) USE OF MESSAGE BOARDS, CHAT ROOMS AND OTHER COMMUNICATION FORUMS</Text>
            {"\n\n"}
            If this Web site may contain message/bulletin boards, chat rooms, or other message or communication facilities (collectively, “Forums”), you agree to use the Forums only to send and receive messages and material that are proper and related to the particular Forum. By way of example, and not as a limitation, you agree that when using a Forum, you shall not do any of the following:
            {"\n\n"}
            Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.
            Publish, post, distribute or disseminate any defamatory, infringing, obscene, indecent or unlawful material or information.
            Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.
            Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another’s computer.
            Conduct or forward surveys, contests, or chain letters.
            Download any file posted by another user of a Forum that you know, or reasonably should know, cannot be legally distributed in such manner.
            All Forums are public and not private communications. Chats, postings, conferences, and other communications by other users are not endorsed by PAHADIKHABARNAMA.IN, and such communications shall not be considered reviewed, screened, or approved by PAHADIKHABARNAMA.IN,. PAHADIKHABARNAMA.IN, reserves the right for any reason to remove without notice any contents of the Forums received from users, including without limitation message board postings.
            {"\n\n"}
            <Text style={styles.bold}>7) EQUIPMENT AND OPERATION</Text>
            {"\n\n"}
            You shall provide and maintain all telephone/internet and other equipment necessary to access PAHADIKHABARNAMA.IN,, and the costs of any such equipment and/or telephone/internet connections or use, including any applicable taxes, shall be borne solely by you. You are responsible for operating your own equipment used to access PAHADIKHABARNAMA.IN,.
            {"\n\n"}
            <Text style={styles.bold}>8) LINKS TO THIRD PARTY SITES</Text>
            {"\n\n"}
            The links in this site will allow you to leave PAHADIKHABARNAMA.IN, The linked sites are not under the control of PAHADIKHABARNAMA.IN,. PAHADIKHABARNAMA.IN, has not reviewed, nor approved these sites and is not responsible for the contents or omissions of any linked site or any links contained in a linked site. The inclusion of any linked site does not imply endorsement by PAHADIKHABARNAMA.IN, of the site. Third party links to PAHADIKHABARNAMA.IN, shall be governed by a separate agreement.
            {"\n\n"}
            <Text style={styles.bold}>9) INDEMNIFICATION</Text>
            {"\n\n"}
            YOU SHALL INDEMNIFY, DEFEND AND HOLD HARMLESS PAHADIKHABARNAMA.IN, (INCLUDING ITS AND THEIR OFFICERS, DIRECTORS, EMPLOYEES, AFFILIATES, GROUP COMPANIES, AGENTS, REPRESENTATIVES OR SUBCONTRACTORS) FROM ANY AND ALL CLAIMS AND LOSSES IMPOSED ON, INCURRED BY OR ASSERTED AS A RESULT OF OR RELATED TO: (a) your access and use of PAHADIKHABARNAMA.IN, (b) any non-compliance by user with the terms and conditions hereof; or (c) any third party actions related to users receipt and use of the information, whether authorized or unauthorized. Any clause declared invalid shall be deemed severable and not affect the validity or enforceability of the remainder. These terms may only be amended in a writing signed by PAHADIKHABARNAMA.IN,
            {"\n\n"}
            <Text style={styles.bold}>10) CONFLICTING TERMS</Text>
            {"\n\n"}
            If there is any conflict between this User Agreement and other documents, this User Agreement shall govern, whether such order or other documents is prior to or subsequent to this User Agreement, or is signed or acknowledged by any director, officer, employee, representative or agent of PAHADIKHABARNAMA.IN,
            {"\n\n"}
            <Text style={styles.bold}>11) CONFIDENTIALITY/NON-COMPETITION CLAUSE</Text>
            {"\n\n"}
            You agree to keep the information received from the PAHADIKHABARNAMA.IN, and services CONFIDENTIAL and will NOT Disclose the knowledge gained to other any person or firm for any reason. You hereby consent to the Jurisdiction of the Courts of DEHRADUN, UTTARAKHAND, INDIA with respect to violation of any part of this Agreement.
            {"\n\n"}
            <Text style={styles.bold}>12) TERMINATION</Text>
            {"\n\n"}
            This User Agreement and the license rights granted hereunder shall remain in full force and effect unless terminated or canceled for any of the following reasons: (a) immediately by PAHADIKHABARNAMA.IN, for any unauthorized access or use by you (b) immediately by PAHADIKHABARNAMA.IN, if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) immediately, if you violate any of the other terms and conditions of this User Agreement. Termination or cancellation of this Agreement shall not affect any right or relief to which PAHADIKHABARNAMA.IN, may be entitled, at law or in equity. Upon termination of this User Agreement, all rights granted to you will terminate and revert to PAHADIKHABARNAMA.IN,. Except as set forth herein, regardless of the reason for cancellation or termination of this User Agreement, the fee charged if any for access to PAHADIKHABARNAMA.IN, is non-refundable for any reason.
            {"\n\n"}
            <Text style={styles.bold}>13) JURISDICTION</Text>
            {"\n\n"}
            The terms of this agreement are exclusively based on and subject to Indian law. You hereby consent to the exclusive jurisdiction and venue of courts in DEHRADUN, UTTARAKHAND, INDIA in all disputes arising out of or relating to the use of this website. Use of this website is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph.
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
  bold: {
    fontWeight: "bold",
  },
});

export default TermsConditionScreen;
