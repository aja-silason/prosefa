import Colors from "@/constants/Colors";
import { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native";

type props = {
    icon: ReactNode;
    title: string;
    description: string;
}

export const Card = ({icon, title, description}: props) => {

    return (
        <View style={styles.card}>
            {icon}
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textDescription}>{description}</Text>
        </View>
    )

} 

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: Colors.light.gray[100],
        padding: 10,
        borderRadius: 5
    },
    textTitle: {
        fontWeight: 600,
        color: Colors.light.black,
    },
    textDescription: {
        fontWeight: 500,
        color: Colors.light.gray[100],
    },
})
