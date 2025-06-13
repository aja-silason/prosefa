import Colors from "@/constants/Colors"
import { ReactNode } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

type props = {
    icon: ReactNode;
    onClick: VoidFunction
}

export const RoundedButton = ({icon, onClick}: props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onClick} activeOpacity={.9}>
            {icon}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.primary,
        borderRadius: 100,
        padding: 20
    },
})
