import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer'

import { RFValue } from "react-native-responsive-fontsize";

import { Text } from "react-native";
import { View } from "react-native";

import DashboardRoutes from "./dashboard.tab.routes";
import Infos from "../screens/infos";

export default function Routes() {

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Dashboard"
                screenOptions={{
                    headerRight: () => (
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 15 }}> NBA DASHBOARD </Text>
                            <MaterialCommunityIcons name="basketball-hoop" size={20} color="#fff" style={{ marginRight: 20 }} />
                        </View>
                    ),
                    headerTintColor: "#FFF",
                    headerStyle: {
                        backgroundColor: "#115E59",
                        elevation: 0
                    },
                    drawerStyle: {
                        backgroundColor: "#115E59"
                    },
                    drawerItemStyle: {
                        activeTintColor: '#fff',
                        inactiveTintColor: '#fff'
                    },
                    drawerLabelStyle: {
                        color: '#fff'
                    },
                    drawerActiveBackgroundColor: "#0C3633",
                    drawerActiveTintColor: "#FFF"
                }}
            >
                <Drawer.Screen 
                    name='Dashboard'
                    component={DashboardRoutes}
                    options={{ drawerLabel: 'Dashboard', title: '' }}
                />
                <Drawer.Screen 
                    name='Informações'
                    component={Infos}
                    options={{ drawerLabel: 'Informações', title: '' }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}