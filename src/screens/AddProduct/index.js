import React, { useState, useRef } from "react";
import { ScrollView, Text, StyleSheet, View, Animated, TextInput } from "react-native";
import { ArrowLeft, Scan, } from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";


export default function AddProduct() {
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
                <ArrowLeft color={colors.white()} varian="linear" size={25} />
                <Text style={{ alignItems: "center", color: colors.white() }}>Add Product</Text>
            </Animated.View>
            <Animated.ScrollView showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}>
                <Text style={styles.text}>Product Name</Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()} />
                    </View>
                </View>
                <Text style={styles.text}>Description</Text>
                <View style={styles.txtArea}>
                    <View style={styles.cardIcon}>
                    <TextInput size={14}  color={colors.black()} />
                    </View>
                </View>
                <Text style={styles.text}>Category</Text>
                <View style={styles.txtInput}>
                    <View style={styles.cardIcon}>
                        <TextInput size={14} color={colors.black()} />
                    </View>
                </View>
                <Text style={styles.text}>Price</Text>
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
                <View style={styles.button}>
                    <View style={styles.cardIcon}>
                    <Text style={styles.subheading}>Upload</Text>
                    </View>
                </View>
            </Animated.ScrollView>
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




