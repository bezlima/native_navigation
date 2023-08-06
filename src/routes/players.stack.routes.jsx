import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Players from "../screens/players";
import PlayerDetail from "../screens/player_detail";

export default function PlayersRoutes() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Players"
            screenOptions={{
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerShown: false
            }}
        >
            <Stack.Screen name='Players' component={Players} />
            <Stack.Screen name='PlayerDetail' component={PlayerDetail} />
        </Stack.Navigator>
    )
}
