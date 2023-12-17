import React, { useCallback, useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, Image, View, TextInput, TouchableOpacity, ActivityIndicator, RefreshControl} from "react-native";
import {
  Notification, SearchNormal, Element3,  Candle2, AddCircle,} from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { CategoryList } from "../../../data";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { ItemProduct } from "../../components";
// import axios from 'axios';

// const ListCategory = ({item, onPress, color}) =>{
//   return(
//     <TouchableOpacity onPress={onPress}>
//       <View style={category.item}>
//         <Text style={{...category.title, color}}>
//           {item.categoryName}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const FlatListCategory = () => {
//   const [selected, setSelected] = useState(0);
//   const renderItem = ({item}) => {
//     const color = item.id === selected ? colors.pink() : colors.white();
//     return(
//       <ListCategory
//       item={item}
//       onPress={() => setSelected(item.id)}
//       color={color}
//       />
//     );
//   };
//   return(
//     <FlatListCategory
//     data={CategoryList}
//     keyExtractor={item => item.id}
//     renderItem={item => renderItem({...item})}
//     ItemSeparatorComponent={() => <View style={{width: 10}}/>}
//     contentContainerStyle={{paddingHorizontal: 24}}
//     horizontal
//     showsHorizontalScrollIndicator={false}
//     />
//   );
// };

export default function Home() {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(0)
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('product')
      .onSnapshot(querySnapshot => {
        const products = [];
        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setProductData(products);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('product')
        .onSnapshot(querySnapshot => {
          const products = [];
          querySnapshot.forEach(documentSnapshot => {
            products.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setProductData(products);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.Headers}>
        <Element3 color={colors.pink()} varian="linear" size={25} />
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }} onPress={() => navigation.navigate('Notifications')}>
          <Notification color={colors.black()} varian="linear" size={25} style={{ marginRight: -5 }} />
        </TouchableOpacity>
      </View>
      <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.searchrow}>
          <View style={styles.boxsearch}>
            <SearchNormal color={colors.black()} varian="Linear" size={20} />
            <TextInput size={14} placeholder=" Find Your Gift! " color={colors.black()} />
          </View>
          <View style={styles.boxfilter}>
            <Candle2 size={25} varian="Linear" color={colors.black()} />
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/img/pic1.png')} style={{ width: 345, height: 200, borderRadius: 10, top: -10 }} />
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>Categories</Text>
          <Text style={styles.subheading}>See More</Text>
        </View>
        <View style={styles.listCategory}>
          {/* <FlatListCategory/> */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={[category.item, { backgroundColor: selected == 1 ? colors.pink(0.8) : colors.white() }]} onPress={() => setSelected(1)}>
              <Image source={require('../../assets/img/bk3.jpg')} style={{ width: 10, height: 10, borderRadius: 10 }} />
              <Text style={category.title}>All Gift</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[category.item, { backgroundColor: selected == 2 ? colors.pink(0.8) : colors.white() }]} onPress={() => setSelected(2)}>
              <Image source={require('../../assets/img/bk3.jpg')} style={{ width: 10, height: 10, borderRadius: 10 }} />
              <Text style={category.title}>Birthday</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[category.item, { backgroundColor: selected == 3 ? colors.pink(0.8) : colors.white() }]} onPress={() => setSelected(3)}>
              <Image source={require('../../assets/img/bk3.jpg')} style={{ width: 10, height: 10, borderRadius: 10 }} />
              <Text style={category.title}>Wedding</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[category.item, { backgroundColor: selected == 4 ? colors.pink(0.8) : colors.white() }]} onPress={() => setSelected(4)}>
              <Image source={require('../../assets/img/bk3.jpg')} style={{ width: 10, height: 10, borderRadius: 10 }} />
              <Text style={category.title}>Valentine Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[category.item, { backgroundColor: selected == 5 ? colors.pink(0.8) : colors.white() }]} onPress={() => setSelected(5)}>
              <Image source={require('../../assets/img/bk3.jpg')} style={{ width: 10, height: 10, borderRadius: 10 }} />
              <Text style={category.title}>Anniversary</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>New Arrivals</Text>
          <Text style={styles.subheading}>See More</Text>
        </View>
        
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            productData.map((item, index) => <ItemProduct item={item} key={index} />)
          )}
        </View>
        
        <View style={styles.card}>
          <View style={styles.content}>
            <Image source={require('../../assets/img/bk2.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <Text>Lalala</Text>
            <AddCircle color={colors.pink()} variant="Bold" size={25} />
          </View>
          <View style={styles.content}>
            <Image source={require('../../assets/img/bk2.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <Text>Lalala</Text>
            <AddCircle color={colors.pink()} variant="Bold" size={25} />
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
  },
  boxsearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white(),
    paddingHorizontal: 20,
    marginTop: 20,
    width: '80%',
    borderRadius: 10,
  },
  boxfilter: {
    padding: 10,
    backgroundColor: colors.pink(0.8),
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    // marginRight:30,
  },
  searchrow: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  text: {
    marginTop: 5,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  cardIcon: {
    backgroundColor: colors.pink(0.8),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
  content: {
    padding: 20,
    backgroundColor: colors.white(),
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    height: 200,
  },
  listCategory: {
    marginTop: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
});

const category = StyleSheet.create({
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(),
    paddingLeft: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.white(),
    marginHorizontal: 5,
    flexDirection: 'row',
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


