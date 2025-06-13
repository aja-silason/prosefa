import Home from "@/app/view/screens/home";
import PresentationScreen from "@/app/view/screens/presentation";
import FiscalStamp from "@/app/view/screens/second_screen/fiscal-stamp";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const stack = createNativeStackNavigator();

export default function Navigation() {

    return (
        <stack.Navigator>
            <stack.Screen name="presentation" component={PresentationScreen} options={{headerShown: false}}/>
            <stack.Screen name="home" component={Home} options={{headerShown: false}}/>
            <stack.Screen name="fiscalstamp" component={FiscalStamp} options={{headerShown: false}}/>
        </stack.Navigator>

    )


}