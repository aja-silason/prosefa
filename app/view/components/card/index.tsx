import Colors from "@/constants/Colors";
import { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native";

type props = {
    icon: ReactNode;
    title: string;
    description: string;
}

export const Card = ({ icon, title, description }: props) => {

    return (
        <View style={styles.card}>

            <View style={styles.icon}>
                {icon}
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textDescription}>{description}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: Colors.light.gray[100],
        padding: 10,
        borderRadius: 5,
        paddingVertical: 40,
        width: "70%"
    },
    icon: {
        marginBottom: 20
    },
    textContainer: {
        gap: 2,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 600,
        color: Colors.light.black,
    },
    textDescription: {
        fontWeight: 500,
        color: Colors.light.gray[100],
        fontSize: 12
    },
})
