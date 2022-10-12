import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from './src/Home';
import Sobre from './src/Sobre';
import Contato from "./src/Contato";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sobre'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Sobre' component={Sobre}/>
        <Stack.Screen name='Contato' component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
