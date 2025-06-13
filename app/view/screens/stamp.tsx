import { RootStackParamList } from "@/app/model/routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Container } from "../components";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FirstImage from "../components/svg/icon";
import SecondImage from "../components/svg/example1";
import ThirdImage from "../components/svg/example2";

type RouteProps = RouteProps<RootStackParamList, "fiscalstamp">;

export default function FiscalStampScreen() {


    const { params } = useRoute<RouteProps>();
    const { payload } = params;

    const navigate = useNavigation();

    return (
        <Container styles={styles.container}>
            <View style={styles.arrowInner}>
                <TouchableOpacity onPress={() => navigate.goBack()} style={styles.arrowInner}>
                    <Ionicons name="arrow-back" size={25} color={Colors.light.primary} />
                    <Text style={styles.textleKey}>Pesquisar </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.innerHead}>
                {
                    payload?.status == "Válido" ? (
                        <ThirdImage width={200} height={200} />
                    ) : payload?.status == "Cancelado" ? (
                        <SecondImage width={200} height={200} />
                    ) : (
                        <FirstImage width={200} height={200} />
                    )
                }
            </View>

            <View style={styles.innerInformation}>

                <View style={styles.innerTexts}>
                    <Text style={styles.textleKey}>Código </Text>
                    <Text style={styles.textValue}>{payload.codigo}</Text>
                </View>

                <View style={styles.innerTexts}>
                    <Text style={styles.textleKey}>Producto</Text>
                    <Text style={styles.textValue}>{payload.produto}</Text>
                </View>

                <View style={styles.innerTexts}>
                    <Text style={styles.textleKey}>Fabricante</Text>
                    <Text style={styles.textValue}>{payload.fabricante}</Text>
                </View>

                <View style={styles.innerTexts}>
                    <Text style={styles.textleKey}>Data de Emissão </Text>
                    <Text style={styles.textValue}>{payload.data_emissao}</Text>
                </View>

                <View style={styles.innerTexts}>
                    <Text style={styles.textleKey}>Status</Text>
                    <View style={[styles.status, payload?.status == "Válido" ? styles.statusGreen : payload.status == "Cancelado" ? styles.statusRed : null]}>
                        <Text style={styles.statustext}>{payload.status}</Text>
                    </View>
                </View>


            </View>
            <Button onClick={() => navigate.goBack()} text="Voltar" />
        </Container>

    )

}

const styles = StyleSheet.create({

    container: {
        alignContent: "center",
        flex: 1,
        flexDirection: "column",
        marginVertical: 40
    },
    arrowInner: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    innerHead: {
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    innerInformation: {
        gap: 5,
        marginVertical: 10,
        marginBottom: 20
    },
    innerTexts: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textleKey: {
        fontSize: 13,
        fontWeight: 600,
        color: Colors.light.black
    },
    textValue: {
        fontSize: 13,
        fontWeight: 500,
        color: Colors.light.gray[200]
    },
    status: {
        backgroundColor: "#ccc",
        padding: 4,
        borderRadius: 2
    },
    statusRed: {
        backgroundColor: Colors.light.red,
    },
    statusGreen: {
        backgroundColor: Colors.light.green,
    },
    statustext: {
        color: Colors.light.white[100]
    }

})
