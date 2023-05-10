import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/db';
import { Alert } from 'react-native';

export default function useDeleteData(getData: Function) {
  const deleteUser = (id: string) => {
    Alert.alert(
      'Eliminar usuario',
      '¿Estas seguro de querer eliminar al usuario?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', onPress: () => deleteUserByConfirm(id) }
      ]
    );
  };

  const deleteUserByConfirm = async (id: any) => {
    try {
      await deleteDoc(doc(db, 'user', id));
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    deleteUser
  };
}
