import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

const ColorButton = ({ backgroundColor, onPress = f => f }) => {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={() => onPress(backgroundColor)}
            underlayColor="gray"
        >
            <View style={styles.row}>
                <View style={[styles.sample, { backgroundColor }]} />
                <Text style={styles.buttonText}>{backgroundColor}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default ColorButton


const styles = StyleSheet.create({

    button: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: "stretch",
        backgroundColor: "rgba(255,255,255, .8)s"
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center"

    },
    sample: {
        height: 20,
        width: 20,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "white"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
    // image: {
    //   flex: 1,
    //   borderRadius: 50,
    //   margin: 10,
    //   width: Dimensions.get('window').width - 10
    // }
})