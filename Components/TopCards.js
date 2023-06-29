import React from 'react';
import { colors, shadow, sizes, spacing } from '../constants/theme';
import { FlatList, Text, View, StyleSheet, Image, } from 'react-native';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopCards = ({ list }) => {
    return (
        <FlatList
            data={list}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i.id}
            renderItem={({ item, index }) => {
                return (
                    <View style={{ marginLeft: spacing.l, marginRight: index === list.length - 1 ? spacing.l : 0, }}>
                        <View style={[styles.card, shadow.dark]}>
                            <View style={styles.imageBox}>
                                <Image source={{ uri: `${item.image}` }} style={styles.image} />
                            </View>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.title1} {"\n"}{item.title2}</Text>
                            </View>
                            <View style={{ marginHorizontal: 15 }}>
                                <View style={styles.containerReview}>
                                    <Image
                                        source={{ uri: `https://cdn-icons-png.flaticon.com/512/149/149071.png` }}
                                        style={styles.imageReview}
                                    />
                                    <View style={styles.textContainerReview}>
                                        <Text style={styles.titleReview}>Daily Calm</Text>
                                        <Text style={styles.descriptionReview}>
                                            An original, inspiring meditation every day. {"\n"}Jun 28 * Kintsugi
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT + 80,
        marginVertical: 10,
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
    },
    title: {
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.white,
    },

    containerReview: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10
    },
    imageReview: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: -15,
    },
    textContainerReview: {
        flex: 1,
    },
    titleReview: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.white,
    },
    descriptionReview: {
        fontSize: 12,
        color: colors.white,
    },
});

export default TopCards;

