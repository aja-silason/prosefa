import Colors from "@/constants/Colors";
import { ReactNode } from "react"
import { StyleSheet, View } from "react-native";

type props = {
    children: ReactNode;
}
export const Container = ({children}: props) => {

    return (
        <View style={style.container}>
            {children}
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.white[100],
        flex: 1
    }
})