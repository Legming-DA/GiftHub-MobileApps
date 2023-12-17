import React, { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, View, Animated, TouchableOpacity, } from "react-native";
import { ArrowLeft, More, ShoppingBag, } from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import ActionSheet from "react-native-actions-sheet";
import FastImage from 'react-native-fast-image';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export default function DetailProduct({ route }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = route.params;
    const actionSheetRef = useRef(null);

    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };

    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };

    useEffect(() => {
        const subscriber = firestore()
            .collection('product')
            .doc(productId)
            .onSnapshot(documentSnapshot => {
                const productData = documentSnapshot.data();
                if (productData) {
                    console.log('Product data: ', productData);
                    setSelectedProduct(productData);
                } else {
                    console.log(`Product with ID ${productId} not found.`);
                }
            });
        setLoading(false);
        return () => subscriber();
    }, [productId]);

    const navigateEdit = () => {
        closeActionSheet()
        navigation.navigate('EditProduct', { productId })
    }
    const handleDelete = async () => {
        setLoading(true);
        try {
            await firestore()
                .collection('product')
                .doc(productId)
                .delete()
                .then(() => {
                    console.log('Product deleted!');
                });
            if (selectedProduct?.image) {
                const imageRef = storage().refFromURL(selectedProduct?.image);
                await imageRef.delete();
            }
            console.log('Product deleted!');
            closeActionSheet();
            setSelectedProduct(null);
            setLoading(false)
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    };
    const navigation = useNavigation()
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.Headers, { transform: [{ translateY: headerY }] }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color={colors.white()} varian="linear" size={25} />
                </TouchableOpacity >
                <Text style={{ alignItems: "center", color: colors.white() }}>{selectedProduct?.productName}</Text>
                <TouchableOpacity onPress={openActionSheet}>
                    <More
                        color={colors.white()}
                        variant="Linear"
                        style={{ transform: [{ rotate: '90deg' }] }}
                    />
                </TouchableOpacity>
            </Animated.View>
            <Animated.ScrollView showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}>
                <View style={styles.card}>
                    <FastImage source={{
                        uri: selectedProduct?.image,
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.high,
                    }}
                        style={{ width: 300, height: 300, borderRadius: 10, top: -10 }} />
                </View>
                <View style={styles.text}>
                    <Text style={styles.heading}>Description :</Text>
                    <Text style={styles.heading}>{selectedProduct?.price}</Text>
                </View>
                <Text style={styles.subheading}>{selectedProduct?.description} </Text>
                <View style={{ ...styles.card, justifyContent: 'space-evenly' }}>
                    <View style={styles.button}>
                        <Text
                            style={{
                                fontFamily: fontType['Pjs-Medium'],
                                color: colors.white(),
                                fontSize: 16,
                            }}>Buy Now</Text>
                    </View>
                    <View style={styles.button}>
                        <Text
                            style={{
                                fontFamily: fontType['Pjs-Medium'],
                                color: colors.white(),
                                fontSize: 16,
                            }}>Add To Cart</Text>
                        <ShoppingBag color={colors.white()} varian="linear" size={28} />
                    </View>
                </View>
            </Animated.ScrollView>
            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    backgroundColor: colors.pink()
                }}
                indicatorStyle={{
                    width: 100,
                }}
                gestureEnabled={true}
                defaultOverlayOpacity={0.3}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={navigateEdit}
                >
                    <Text
                        style={{
                            fontFamily: fontType['Pjs-Medium'],
                            color: colors.white(),
                            fontSize: 18,
                        }}>
                        Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={handleDelete}>
                    <Text
                        style={{
                            fontFamily: fontType['Pjs-Medium'],
                            color: colors.white(),
                            fontSize: 18,
                        }}>
                        Delete
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={closeActionSheet}>
                    <Text
                        style={{
                            fontFamily: fontType['Pjs-Medium'],
                            color: colors.black(),
                            fontSize: 18,
                        }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </ActionSheet>
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
    card: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
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
        left: -5,
    },
    subheading: {
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 14,
        lineHeight: 18,
        color: colors.black(0.5),
        marginHorizontal: 20,
        textAlign: 'justify',
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
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        backgroundColor: colors.pink(0.8),
        height: 50,
        width: 150,
        borderRadius: 10,
        marginBottom: 10,
        paddingTop: 12,
    },
});