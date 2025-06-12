import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./viewmodel/navigation";

export default function App(){
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    )
}