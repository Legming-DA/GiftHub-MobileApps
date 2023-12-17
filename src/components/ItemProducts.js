import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AddCircle } from 'iconsax-react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { fontType, colors } from '../theme';


const ItemProduct = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}
                onPress={() => navigation.navigate('DetailProduct', { productId: item.id })}>
                <View style={styles.content}>
                    <FastImage
                        style={{ width: 100, height: 100, borderRadius: 50, top: -40 }}
                        source={{
                            uri: item?.image,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <Text style={{ top: -30, fontSize: 14 }}>{item?.productName}</Text>
                    <Text style={{ top: -30, fontSize: 10 }}>{item?.category}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                        <Text> {item?.price}        </Text>
                        <AddCircle color={colors.pink()} variant="Bold" size={25} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ItemProduct;

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