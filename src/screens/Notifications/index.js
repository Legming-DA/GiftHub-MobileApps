import React, { useState, useRef } from "react";
import { ScrollView, Text, StyleSheet, View, Animated } from "react-native";
import { ArrowLeft, Scan, } from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const Notif = () => {
        return (
            <View style={styles.card}>
                <View style={styles.cardIcon}>
                    <Text style={styles.subheading}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
            </View>
        )
}

export default function Notifications() {
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
                <Text style={{ alignItems: "center", color: colors.white() }}>Notifications</Text>
            </Animated.View>
            <Animated.ScrollView showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Text style={styles.subheading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's
                        </Text>
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
        marginTop: 20,
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
    card: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        backgroundColor: colors.white(),
        height: 80,
        borderRadius: 10,
        elevation: 2,
    },
    cardIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 12,
    },
});




