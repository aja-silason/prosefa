import { RootStackParamList } from "@/app/model/routes";
import HomeScreen from "@/app/view/screens/home";
import PresentationScreen from "@/app/view/screens/presentation";
import QRCodeScannerScreen from "@/app/view/screens/QRCode";
import FiscalStampScreen from "@/app/view/screens/stamp";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {

    return (
        <stack.Navigator>
            <stack.Screen name="presentation" component={PresentationScreen} options={{ headerShown: false, statusBarStyle: "dark" }} />
            <stack.Screen name="fiscalstamp" component={FiscalStampScreen} options={{ headerShown: false, statusBarStyle: "dark" }} />
            <stack.Screen name="home" component={HomeScreen} options={{ headerShown: false, statusBarStyle: "dark"}} />
            <stack.Screen name="qrcode" component={QRCodeScannerScreen} options={{ headerShown: false, statusBarStyle: "light"}} />
        </stack.Navigator>

    )


}