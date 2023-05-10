import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/db';

export default function usePutData(navigation: any) {
  const putUser = async (id: any, data: any) => {
    try {
      await setDoc(doc(db, 'user', id), data);
      navigation.navigate('Usuarios');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    putUser
  };
}
