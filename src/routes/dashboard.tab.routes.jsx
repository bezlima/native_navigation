import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'; 

import { RFValue } from "react-native-responsive-fontsize";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Statistics from '../screens/statistics';
import Teams from '../screens/teams';
import Games from '../screens/games';
import PlayersRoutes from './players.stack.routes';

export default function DashboardRoutes() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator 
                initialRouteName='HomeTres' 
                screenOptions={{ 
                    showLabel: false, 
                    tabBarShowLabel: false,
                    tabBarStyle: {
                      backgroundColor: '#115E59',
                    },
                    tabBarItemStyle: {
                        height: `${RFValue(45)}px`
                    },
                    tabBarIndicatorStyle: {
                      backgroundColor: '#0C3633',
                      height: 5,
                      borderRadius: '5px'
                    }
                }}
            >
                <Tab.Screen 
                    options={{ 
                        tabBarIcon: () => <AntDesign name="areachart" size={20} color="#FFF" />
                    }} 
                    name="HomeTres" 
                    component={Statistics} 
                />
                <Tab.Screen 
                    options={{ 
                        tabBarIcon: () => <MaterialIcons name="people-alt" size={20} color="#FFF" />
                    }} 
                    name="HomeQuatro" 
                    component={Teams} 
                />
                <Tab.Screen 
                    options={{ 
                        tabBarIcon: () => <Ionicons name="basketball" size={20} color="#FFF" />
                    }} 
                    name="HomeCinco" 
                    component={Games} 
                />
                <Tab.Screen 
                    options={{ 
                        tabBarIcon: () => <Ionicons name="person-sharp" size={20} color="#FFF" />
                    }} 
                    name="HomeSeis" 
                    component={PlayersRoutes} 
                />
            </Tab.Navigator>
        </>
    )
}