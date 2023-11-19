import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {
    ArrowLeft, Scan,
} from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";


export default function Notifications() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.Headers}>
                <ArrowLeft color={colors.white()} varian="linear" size={25} />
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




