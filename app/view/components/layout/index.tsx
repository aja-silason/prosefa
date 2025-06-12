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
        padding: 10
    }
})