import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./screens/Main";
import Start from "./screens/Start";

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Main" component={Main} />
          
        </Stack.Navigator>
      </NavigationContainer>
   </> 

  );
}