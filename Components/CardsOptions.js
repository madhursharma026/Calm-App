import React from 'react';
import { FlatList, Text, View, StyleSheet, } from 'react-native';
import { colors, shadow, sizes, spacing } from '../constants/theme';

const CARD_WIDTH = 80;
const CARD_HEIGHT = 5;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const CardsOptions = ({ list }) => {
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
        marginVertical: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#28266e'
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
        resizeMode: 'cover',
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
    },
    title: {
        fontSize: sizes.body,
        fontWeight: 'bold',
        color: colors.white,
    },
});

export default CardsOptions;


