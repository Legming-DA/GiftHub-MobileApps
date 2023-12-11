import React, { useState, useRef } from "react";
import { ScrollView, Text, StyleSheet, View, Animated, TextInput, TouchableOpacity } from "react-native";
import { ArrowLeft, Scan, } from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


export default function AddProduct() {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation()
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const handleUpload = async () => {
        setLoading(true);
        try {
          await axios.post('https://65721457d61ba6fcc01458ad.mockapi.io/gifthubapp/product', {
              productName: productData.productName,
              description: productData.description,
              price: productData.price,
              category: productData.category,
              image,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Home');
        } catch (e) {
          console.log(e);
        }
      };
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.Headers, { transform: [{ translateY: headerY }] }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft color={colors.white()} varian="linear" size={25} />
                </TouchableOpacity>
                <Text style={{ alignItems: "center", color: colors.white() }}>Add Product</Text>
            </Animated.View>
            <Animated.ScrollView showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}>
                <Text style={styles.text}>Product Name : </Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()} />
                    </View>
                </View>
                <Text style={styles.text}>Description : </Text>
                <View style={styles.txtArea}>
                    <View style={styles.cardIcon}>
                    <TextInput size={14}  color={colors.black()} />
                    </View>
                </View>
                <Text style={styles.text}>Category : </Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()} />
                    </View>
                </View>
                <Text style={styles.text}>Price : </Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()} />
                    </View>
                </View>
                <Text style={styles.text}>Image :</Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()} />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleUpload}>
                    <View style={styles.cardIcon}>
                    <Text style={styles.subheading}>Upload</Text>
                    </View>
                </TouchableOpacity>
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.black(0.4),
        justifyContent: 'center',
        alignItems: 'center',
      },
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
    text: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    subheading: {
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 14,
        lineHeight: 18,
        color: colors.black(0.5),
    },
    txtInput: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        backgroundColor: colors.white(),
        height: 40,
        borderRadius: 10,
        elevation: 1,
        paddingLeft: 5,
    },
    txtArea: {
        marginTop: 5,
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        backgroundColor: colors.white(),
        height: 300,
        borderRadius: 10,
        elevation: 1,
        paddingLeft: 5,
    },
    cardIcon: {
        flexDirection: 'row',
        padding: 2,
        paddingLeft: 5,
    },
    button: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
        backgroundColor: colors.pink(0.8),
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        paddingTop:15,  
    },
});




