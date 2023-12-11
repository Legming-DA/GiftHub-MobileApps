import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {ArrowLeft, Edit2, Call, Sms, Heart, Moneys, TicketDiscount, LogoutCurve, Crown1, 
  Setting2, MessageQuestion, Wallet2, Box, Truck, Like1, 
} from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.Headers}>
        <ArrowLeft color={colors.pink(0.)} varian="linear" size={25} />
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }} onPress={()=> navigation.navigate('AddProduct')}>
          <Edit2 color={colors.white()} varian="linear" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ ...styles.circleContainer, marginBottom: -35 }}>
          <View style={{ ...styles.text, paddingTop: 20 }}>
            <View style={{ paddingLeft: 5 }}>
              <Image source={require('../../assets/img/profile.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
            </View>
            <Text style={{ ...styles.heading, paddingRight: 5, top: -10 }}>Legming Dwi Anggraini</Text>
          </View>
          <Text style={{ marginLeft: 140, top: -50 }}>Business Woman</Text>
          <View style={{ flexDirection: 'row', justifyContentt: 'flex-start', marginHorizontal: 20, top: -12 }}>
            <Call size={18} varian="Linear" color={colors.black()} />
            <Text style={{ ...styles.subheading, }}>   0857 - 2424 - 2828</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContentt: 'flex-start', marginHorizontal: 20, top: -10 }}>
            <Sms size={18} varian="Linear" color={colors.black()} />
            <Text style={{ ...styles.subheading, }}>   mimingcantique@gmail.com</Text>
          </View>
        </View>
        <View style={{ ...styles.card, marginBottom: -10, top: -10 }}>
          <View style={styles.cardIcon}>
            <Wallet2 size={28} varian="Linear" color={colors.black()} />
          </View>
          <View style={styles.cardIcon}>
            <Box size={28} varian="Linear" color={colors.black()} />
          </View>
          <View style={styles.cardIcon}>
            <Truck size={28} varian="Linear" color={colors.black()} />
          </View>
          <View style={styles.cardIcon}>
            <Like1 size={28} varian="Linear" color={colors.black()} />
          </View>
        </View>
        <View style={{ ...styles.text, top: -50, justifyContent: 'space-evenly', marginBottom: -50 }}>
          <Text style={{ ...styles.heading, fontSize: 14 }}>To Pay</Text>
          <Text style={{ ...styles.heading, fontSize: 14 }}>To Ship</Text>
          <Text style={{ ...styles.heading, fontSize: 14 }}>To Recieve</Text>
          <Text style={{ ...styles.heading, fontSize: 14 }}>To Rate</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>Account</Text>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
            <Heart color={colors.pink()} variant="TwoTone" size={25} />
            <Text style={transaction.text}>My Favorite</Text>
          </View>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
            <Moneys color={colors.pink()} variant="TwoTone" size={25} />
            <Text style={transaction.text}>Payment</Text>
          </View>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
            <TicketDiscount color={colors.pink()} variant="TwoTone" size={25} />
            <Text style={transaction.text}>Promotions</Text>
          </View>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
            <Crown1 color={colors.pink()} variant="TwoTone" size={25} />
            <Text style={transaction.text}>GiftHub Member</Text>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>Contact Us</Text>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
            <Setting2 color={colors.pink()} variant="TwoTone" size={25} />
            <Text style={transaction.text}>Settings</Text>
          </View>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
            <MessageQuestion color={colors.pink()} variant="TwoTone" size={25} />
            <Text style={transaction.text}>Help and Feedback</Text>
          </View>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
            <LogoutCurve color={colors.pink()} variant="TwoTone" size={25} />
            <Text style={transaction.text}>Sign Out</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg(),
  },
  Headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: colors.pink(0.8),
  },
  circleContainer: {
    backgroundColor: colors.pink(0.8),
    height: 210,
    top: -40,

    justifyContent: 'space-around'
  },
  text: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  heading: {
    padding: 5,
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 20,
    lineHeight: 18,
    color: colors.black(),
  },
  subheading: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(0.5),
  },
  card: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 25,
    backgroundColor: colors.white(),
    height: 80,
    borderRadius: 10,
    elevation: 8,
  },
  cardIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15,
  },
});

const transaction = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white(),

  },
  content: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  text: {
    paddingLeft: 10,
  },
  header: {

  },
});

const navbar = StyleSheet.create({
  navButton: {
    backgroundColor: colors.white(),
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    paddingBottom: 4,
    borderRadius: 50,
  },
  navIcon: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  navText: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 10,
    color: colors.black(),
  },
});