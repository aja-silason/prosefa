import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home (){
    const navigate: any = useNavigation();
    
        const go = () => {
            navigate.navigate("presentation");
        }
    
        return (
            <View>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={go}>
                    <Text>Home ir para a Presentation</Text>
                </TouchableOpacity>
            </View>
        )
}