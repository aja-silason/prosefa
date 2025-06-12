import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type props = {
    onClick: VoidFunction;
    text: string;
    style?: object
}

export const Button = ({onClick, text, style}: props) => {

    return (
        <TouchableOpacity onPress={onClick} style={[style, styles?.button]} activeOpacity={.9}>
            <Text style={styles.texButton}>{text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.primary,
        padding: 20,
        borderRadius: 5,
        alignItems: "center",
        width: "100%"
    },
    texButton: {
        fontSize: 13,
        fontWeight: 600,
        color: Colors.light.white[100]
    }
})
