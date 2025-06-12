import { fiscalStamp } from "@/app/model/selo"
import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export const ProductCard = ({ produto, fabricante, data_emissao, codigo, status }: fiscalStamp) => {
    return (
        <View style={styles.container}>

            {
                status?.toLowerCase() == "válido" ? (
                    <Ionicons name="checkbox" color={Colors.light.green}/>
                ) : status?.toLowerCase() == "cancelado" ? (
                    <Ionicons name="close-circle-sharp" color={Colors.light.red}/>
                ) : status?.toLowerCase() == "expirado" ? (
                    <Ionicons name="warning" color={Colors.light.gray[200]}/>
                ) : null
            }


            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Product{produto}</Text>
                    <View style={styles.titleTime}>
                        <Text style={styles.time}>{data_emissao}</Text>
                        <Ionicons name="calendar-number-outline" size={9} color={Colors.light.gray[100]}/>
                    </View> 
                </View>

                <Text style={styles.description}>{codigo}</Text>
                <Text style={styles.description}>{fabricante}</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 5
    },
    innerContainer: {
        gap: 5,
        marginBottom: 15
    },
    title: {
        fontWeight: 600,
        fontSize: 14,
        color: Colors.light.black
    },
    description: {
        fontWeight: 500,
        fontSize: 14,
        color: Colors.light.gray[100]
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    titleTime: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2
    },
    time: {
        fontSize: 10,
        color: Colors.light.gray[100]
    },
    
})
