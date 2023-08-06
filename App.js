import { SafeAreaView } from 'react-native';
import Routes from './src/routes';

export default function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
    );
}