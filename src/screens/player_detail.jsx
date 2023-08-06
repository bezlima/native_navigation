import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function PlayerDetail() {

    const navigation = useNavigation();

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>
                Player Detail
            </Text>
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}