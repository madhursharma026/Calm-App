import React from 'react';
import { shadow, sizes, spacing } from '../constants/theme';
import { FlatList, Text, View, StyleSheet, Image, } from 'react-native';

const CARD_WIDTH = sizes.width - 150;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const MoreCards = ({ list }) => {
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
                            <View style={{ marginHorizontal: 5, marginTop: 5 }}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
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
    title: {
        color: 'white',
        fontSize: 14,
    },
    description: {
        color: '#C8C8C8',
        fontSize: 12,
    },
});

export default MoreCards;

