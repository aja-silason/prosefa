import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Container } from "../components";

enum STEP {
    step1 = 0,
    step2 = 1
}

export default function PresentationScreen() {

    const [step, setStep] = useState<STEP>(STEP.step1);

    const navigate: any = useNavigation();

    const go = () => {
        navigate.navigate("home");
    }

    const renderStep = () => {

        switch (step) {
            case STEP.step1:
                return (
                    <View>
                        <Text>Step 1</Text>
                        <TouchableOpacity onPress={() => setStep(STEP.step2)}>
                            <Text>Presentation ir para o Step 2</Text>
                        </TouchableOpacity>
                    </View>
                )
            case STEP.step2:
                return (
                    <View>
                        <Text>Step 2</Text>
                        <TouchableOpacity onPress={() => setStep(STEP.step1)}>
                            <Text>Presentation ir para o Step 1</Text>
                        </TouchableOpacity>
                    </View>
                )
            default:
                return null;
        }

    }

    return (
        <Container>
            <Text>Presentation Screen</Text>
            {renderStep()}
        </Container>
    )

}

/*

Programa Nacional de Selos Fiscais de Alta Segurança

O Programa Nacional de Selos Fiscais de Alta Segurança (PROSEFA), é a base legal e institucional responsável pela implementação da obrigatoriedade de aposição de selos fiscais de alta segurança em bebidas, líquidos alcoólicos, tabaco e seus sucedâneos manufacturados, cuja Coordenação recai sobre o/a Titular do Departamento responsável pelas Finanças Públicas, sendo a AGT, a Autoridade Instrutora e, a IN-E.P. a prestadora desses serviços públicos, no concerne a concepção, emissão, comercialização, distribuição e segurança dos selos fiscais.

O PROSEFA tem como objectivo o combate ao contrabando e a contrafacção, a protecção da receita devida ao estado, garantir a fiabilidade dos produtos introduzidos no território nacional e, deste modo, proteger a saúde pública, os direitos de propriedade intelectual e melhorar o ambiente de negócios.


Regis

*/