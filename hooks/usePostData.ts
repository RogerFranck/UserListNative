import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/db';

export default function usePostData(navigation: any) {
  const postUser = async (data: any) => {
    try {
      await addDoc(collection(db, 'user'), data);
      navigation.navigate('Usuarios');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    postUser
  };
}
