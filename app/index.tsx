import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./viewmodel/navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    )
}