import Home from "@/app/view/screens/home";
import PresentationScreen from "@/app/view/screens/presentation";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const stack = createNativeStackNavigator();

export default function Navigation() {

    return (
        <stack.Navigator>
            <stack.Screen name="presentation" component={PresentationScreen} options={{headerShown: false}}/>
            <stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        </stack.Navigator>

    )


}