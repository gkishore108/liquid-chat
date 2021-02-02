import { ref } from "vue";
import { projectFireStore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addChat = async (doc) => {
    error.value = null;

    try {
      await projectFireStore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send a message";
    }
  };
  return { error, addChat };
};

export default useCollection;
