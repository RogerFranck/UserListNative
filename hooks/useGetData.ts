import { useState, useEffect } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/db';
import { useIsFocused } from '@react-navigation/native';

export default function useGetData() {
  const isFocused = useIsFocused();
  const [users, setusers] = useState<any>([]);

  const getData = async () => {
    setusers([]);
    try {
      const querySnapshot = await getDocs(collection(db, 'user'));
      querySnapshot.forEach((doc: any) =>
        setusers((prev: any) => [
          ...prev,
          {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone
          }
        ])
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [isFocused]);

  return {
    users,
    getData
  };
}
