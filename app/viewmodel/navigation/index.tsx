import Home from "@/app/view/screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const stack = createNativeStackNavigator();

export default function Navigation() {

    return (
        <stack.Navigator>
            <stack.Screen name="home" component={Home} />
        </stack.Navigator>

    )


}