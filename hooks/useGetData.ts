import React, { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/db";

export default function useGetData() {
  const [users, setusers] = useState<any>([]);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc: any) =>
        setusers([...users,{
          name: doc.data().name,
          email: doc.data().email
        }])
      );
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getData()
  }, [])
  

  return {
    users,
    getData,
  };
}
