import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/db";

export default function usePostData() {

  const postUser = async (data: any) => {
    try {
      await addDoc(collection(db, "users"), data);
    } catch (error) {
      console.log(error)
    }
  };

  return {
    postUser,
  };
}
