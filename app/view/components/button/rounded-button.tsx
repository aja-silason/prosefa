import Colors from "@/constants/Colors"
import { ReactNode } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

type props = {
    icon: ReactNode;
    onClick: VoidFunction;
    active: boolean;
}

export const RoundedButton = ({icon, onClick, active = true}: props) => {

    return (
        <TouchableOpacity disabled={!active} style={[styles.container, !active && styles.inactive]} onPress={onClick} activeOpacity={.9}>
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
    inactive: {
        backgroundColor: Colors.light.gray[200]
    }
})
