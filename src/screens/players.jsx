import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function Players() {

    const navigation = useNavigation();

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>
                Players
            </Text>
            <Button
                title="Detalhe"
                onPress={() => navigation.navigate("PlayerDetail")}
            />
        </View>
    )
}