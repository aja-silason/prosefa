import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Container } from "../components";
import Colors from "@/constants/Colors";

//import NotFoundSVG from '../assets/not-found.svg';

//<NotFoundSVG width={200} height={200} />


const example1 = require("@/assets/images/in_assets/example1.png");

export default function PresentationScreen() {

    const navigate: any = useNavigation();

    const go = () => {
        navigate.navigate("home");
    }

    return (
        <Container>
            <View style={styles.innerContainer}>
                <Image source={example1} style={styles.image} />
                <Text style={styles.textTitle}>Programa Nacional de Selos Fiscais de Alta Segurança</Text>
                <Text style={styles.textText}>O PROSEFA visa a combater o contrabando e a contrafacção, a protecção da receita devida ao estado, garantir a fiabilidade dos produtos introduzidos no território nacional e, deste modo, proteger a saúde pública, os direitos de propriedade intelectual e melhorar o ambiente de negócios.</Text>

                <Button onClick={go} text="Ir para step 2" />
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
        gap: "1.5em"
    },
    textTitle: {
        color: Colors.light.black[100],
        fontWeight: 600,
        fontSize: 18,
        textAlign: "center"
    },
    textText: {
        color: Colors.light.gray[100],
        textAlign: "center"
    },
}) 