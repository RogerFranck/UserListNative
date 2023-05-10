import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/db";

export default function usePutData() {

  const putUser = async (id:any,data: any) => {
    try {
      await setDoc(doc(db, "users", id), data);
    } catch (error) {
      console.log(error)
    }
  };

  return {
    putUser,
  };
}
