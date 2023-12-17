import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, Animated, TextInput, TouchableOpacity } from "react-native";
import { ArrowLeft, AddSquare, Add} from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';

export default function AddProduct() {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState({
        productName: "",
        description: "",
        category: "",
        price: "",
    });
    const handleChange = (key, value) => {
        setProductData({
            ...productData,
            [key]: value,
        });
    };
    const [image, setImage] = useState(null);
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const handleUpload = async () => {
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`productImages/${filename}`);

        setLoading(true);
        try {
            await reference.putFile(image);
            const url = await reference.getDownloadURL();
            await firestore().collection('product').add({
                productName: productData.productName,
                description: productData.description,
                price: productData.price,
                category: productData.category,
                image: url,
            });
            setLoading(false);
            console.log('Product Add!');
            navigation.navigate('Home');
        } catch (e) {
            console.log(e);
        }
    };
    const handleImagePick = async () => {
        ImagePicker.openPicker({
            width: 1920,
            height: 1080,
            cropping: true,
        })
            .then(image => {
                console.log(image);
                setImage(image.path);
            })
            .catch(error => {
                console.log(error);
            });
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
                        <TextInput size={14} color={colors.black()}
                            value={productData.productName}
                            onChangeText={text => handleChange('productName', text)}
                        />
                    </View>
                </View>
                <Text style={styles.text}>Description : </Text>
                <View style={styles.txtArea}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()}
                            value={productData.description}
                            multiline
                            onChangeText={text => handleChange('description', text)} />
                    </View>
                </View>
                <Text style={styles.text}>Category : </Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()}
                            value={productData.category}
                            onChangeText={text => handleChange('category', text)} />
                    </View>
                </View>
                <Text style={styles.text}>Price : </Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()}
                            value={productData.price}
                            onChangeText={text => handleChange('price', text)} />
                    </View>
                </View>
                <Text style={styles.text}>Image :</Text>
                {image ? (
                    <View style={{ position: 'relative' }}>
                        <FastImage
                            style={{ width: '100%', height: 127, borderRadius: 5 }}
                            source={{
                                uri: image,
                                headers: { Authorization: 'someAuthToken' },
                                priority: FastImage.priority.high,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                backgroundColor: colors.blue(),
                                borderRadius: 25,
                            }}
                            onPress={() => setImage(null)}>
                            <Add
                                size={20}
                                variant="Linear"
                                color={colors.white()}
                                style={{ transform: [{ rotate: '45deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity onPress={handleImagePick}>
                        <View
                            style={[
                                textInput.borderDashed,
                                {
                                    gap: 10,
                                    paddingVertical: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}>
                            <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
                            <Text
                                style={{
                                    fontFamily: fontType['Pjs-Regular'],
                                    fontSize: 12,
                                    color: colors.grey(0.6),
                                }}>
                                Upload Thumbnail
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
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
        paddingTop: 15,
    },
});
const textInput = StyleSheet.create({
    borderDashed: {
      borderStyle: 'dashed',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      borderColor: colors.grey(0.4),
    },
    title: {
      fontSize: 16,
      fontFamily: fontType['Pjs-SemiBold'],
      color: colors.black(),
      padding: 0,
    },
    content: {
      fontSize: 12,
      fontFamily: fontType['Pjs-Regular'],
      color: colors.black(),
      padding: 0,
    },
  });




