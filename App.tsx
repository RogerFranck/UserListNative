import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserForm from './pages/userForm';
import UserList from './pages/userList';
import FloatButton from './components/common/floatButton';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usuarios" component={UserList} />
        <Stack.Screen name="Form" component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
