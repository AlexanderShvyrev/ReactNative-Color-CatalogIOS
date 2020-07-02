import React, { useState, useRef } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const ColorForm = ({ onNewColor = f => f }) => {

    const [inputValue, setInputValue] = useState("")
    const input = useRef()

    return (
        <View style={styles.container}>
            <TextInput
                ref={input}
                value={inputValue}
                onChangeText={setInputValue}
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="enter a color..." />
            <Button
                onPress={() => {
                    input.current.blur()
                    onNewColor(inputValue)
                    setInputValue("")
                }}
                title="add" />
        </View>
    )
}

export default ColorForm

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },
    textInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5
    }
})