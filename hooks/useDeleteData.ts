import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/db";

export default function useDeleteData() {

  const deleteUser = async (id:any) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.log(error)
    }
  };

  return {
    deleteUser,
  };
}
