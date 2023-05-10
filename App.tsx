import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserEdit from './pages/userEdit';
import UserList from './pages/userList';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usuarios" component={UserList} />
        <Stack.Screen name="Editar" component={UserEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
