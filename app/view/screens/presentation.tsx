import { StyleSheet, Text, View } from "react-native";
import { Button, Container } from "../components";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/app/model/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import FirstImage from "../components/svg/icon";
import SecondImage from "../components/svg/example1";
import ThirdImage from "../components/svg/example2";


export default function PresentationScreen() {

    const navigate: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleNavigateHome = () => {
        navigate.replace("home");
    }

    return (
        <Container>
            <View style={styles.innerContainer}> 
                <SecondImage width={200} height={200} />

                <Text style={styles.textTitle}>Programa Nacional de Selos Fiscais de Alta Segurança</Text>

                <Text style={styles.textText}>O PROSEFA visa a combater o contrabando e a contrafacção, a protecção da receita devida ao estado, garantir a fiabilidade dos produtos introduzidos no território nacional e, deste modo, proteger a saúde pública, os direitos de propriedade intelectual e melhorar o ambiente de negócios.</Text>

                <Button onClick={handleNavigateHome} text="Iniciar" />
            </View>
        </Container>
    )

}

const styles = StyleSheet.create({
    image: {
        width: "90%",
        height: 100,
    },
    innerContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 10
    },
    textTitle: {
        color: Colors.light.black[100],
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center"
    },
    textText: {
        color: Colors.light.gray[100],
        textAlign: "center",
        fontSize: 12
    },
});
