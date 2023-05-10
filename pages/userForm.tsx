import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import useForm from '../hooks/useForm';
import usePutData from '../hooks/usePutData';
import usePostData from '../hooks/usePostData';

export default function UserForm({ route, navigation }: any) {
  const { id, name, email, phone, isEdit } = route.params;
  const { state, handleChangueForm } = useForm({
    initialState: { id, name, email, phone }
  });
  const { putUser } = usePutData(navigation);
  const { postUser } = usePostData(navigation);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={state.name}
          onChangeText={(value) => handleChangueForm('name', value)}
          placeholder="Nombre"
        />
        <TextInput
          style={styles.input}
          value={state.email}
          onChangeText={(value) => handleChangueForm('email', value)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={state.phone}
          onChangeText={(value) => handleChangueForm('phone', value)}
          placeholder="Telefono"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => (isEdit ? putUser(state.id, state) : postUser(state))}
        >
          <Text style={styles.buttonText}>
            {isEdit ? 'Actualizar' : 'Guardar'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8
  },
  button: {
    marginTop: 15,
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
