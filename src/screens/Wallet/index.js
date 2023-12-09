import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { ArrowLeft, Scan, ArrangeHorizontal, EmptyWalletAdd, MoreCircle, Wifi, PercentageCircle, Coin,
  ShopAdd, TrendUp, CardAdd, Electricity
} from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.Headers}>
        <ArrowLeft color={colors.white()} varian="linear" size={25} />
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
          <Scan color={colors.white()} varian="linear" size={25} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.circleContainer}>
        <View style={{...styles.text, paddingTop:50}}>
          <Text style={styles.heading}>Hello Miming,</Text>
          <Text style={{ ...styles.subheading, paddingLeft:110, top:-5 }}>Rp</Text>
          <Text style={styles.heading}>240.000</Text>
        </View>
        <Text style={{ ...styles.subheading, marginHorizontal: 25 }}>Your Available Balance</Text>
        </View>
        <View style={{...styles.card, top:-120, marginBottom:-120}}>
          <View style={styles.cardIcon}>
            <ArrangeHorizontal size={28} varian="Linear" color={colors.black()} />
            {/* <Text style={{...styles.text, top:20}}>Transfer</Text> */}
          </View>
          <View style={styles.cardIcon}>
            <EmptyWalletAdd size={28} varian="Linear" color={colors.black()} />
          </View>
        </View>
        <View style={{...styles.text, top:-50, justifyContent:'space-evenly', marginBottom:-50}}>
          <Text style={{...styles.heading, fontSize:14}}>Transfer</Text>
          <Text style={{...styles.heading, fontSize:14}}>Top Up</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>Payment List</Text>
        </View>
        <View style={home.rowContainer}>
          <View style={home.background}>
            <Electricity size={25} varian="Linear" color={colors.black()} />
            <Text style={home.goText}>Electricity</Text>
          </View>
          <View style={home.background}>
            <Wifi size={25} varian="Linear" color={colors.black()} />
            <Text style={home.goText}>Internet</Text>
          </View>
          <View style={home.background}>
            <PercentageCircle size={25} varian="Linear" color={colors.black()} />
            <Text style={home.goText}>Voucher</Text>
          </View>
          <View style={home.background}>
            <Coin size={25} varian="Linear" color={colors.black()} styles={home.icon} />
            <Text style={home.goText}>Bill</Text>
          </View>
        </View>
        <View style={home.rowContainer}>
          <View style={home.background}>
            <CardAdd size={25} varian="Linear" color={colors.black()} />
            <Text style={home.goText}> Add Debit</Text>
          </View>
          <View style={home.background}>
            <TrendUp size={25} varian="Linear" color={colors.black()} />
            <Text style={home.goText}>Invest</Text>
          </View>
          <View style={home.background}>
            <ShopAdd size={25} varian="Linear" color={colors.black()} />
            <Text style={home.goText}>Merchant</Text>
          </View>
          <TouchableOpacity style={home.background} onPress={()=> navigation.navigate('Calendars')}>
            <MoreCircle size={25} varian="Linear" color={colors.black()} />
            <Text style={home.goText}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>Promo & Discount</Text>
          <Text style={styles.subheading}>See More</Text>
        </View>
        <Image source={require('../../assets/img/pic2.png')} style={{ width: 340, height: 180, marginHorizontal: 20 }} />
        <View style={styles.text}>
          <Text style={styles.heading}>Last Transaction</Text>
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
          <Text>LAlala</Text>
          </View>
          
        </View>
        <View style={transaction.container}>
          <View style={transaction.content}>
          <Text>LAlala</Text>
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
    height:210,
    top:-40,
    borderRadius:40,
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
    marginHorizontal: 40,
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
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white(),
    marginHorizontal:25,
  },
  content: {
    height:60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  listTransaction: {
    marginTop: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
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

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 25,
  },
  background: {
    width: 50,
    height: 50,
    backgroundColor: colors.pink(0.8),
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingTop: 12,

  },
  goText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 10,
    color: colors.black(),
    top: 15,
  },
});