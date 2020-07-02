import React, { useState } from 'react';
import { useColors } from '../hooks'
import { StyleSheet, FlatList } from 'react-native';
import ColorButton from './ColorButton'
import ColorForm from './ColorForm';



export default function ColorList({ navigation }) {

    const { colors, addColor } = useColors()

    return (
        <>
            <ColorForm onNewColor={addColor} />
            <FlatList
                style={[styles.container]}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <ColorButton
                            key={item.id}
                            backgroundColor={item.color}
                            onPress={() => navigation.navigate("Details", { color: item.color })}
                        />
                    )
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },

})
