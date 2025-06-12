import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function PresentationScreen (){

    const navigate: any = useNavigation();

    const go = () => {
        navigate.navigate("home");
    }

    return (
        <View>
            <Text>Presentation Screen</Text>
            <TouchableOpacity onPress={go}>
                <Text>Presentation ir para a HOME</Text>
            </TouchableOpacity>
        </View>
    )

}