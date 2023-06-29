import React from 'react';
import { shadow, sizes, spacing, } from '../constants/theme';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

const CARD_WIDTH = sizes.width / 2.5;
const CARD_HEIGHT = 100;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const BrowseByGoal = ({ list }) => {
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
                            <Image source={{ uri: `${item.image}` }} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
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
        width: '100%',
        height: CARD_HEIGHT,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    title: {
        color: 'white',
        fontSize: 14,
    },
});

export default BrowseByGoal;

