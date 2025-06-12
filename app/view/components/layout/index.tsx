import Colors from "@/constants/Colors";
import { ReactNode } from "react"
import { StyleSheet, View } from "react-native";

type props = {
    children: ReactNode;
    styles?: object
}
export const Container = ({children, styles}: props) => {

    return (
        <View style={[style?.container, styles]}>
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