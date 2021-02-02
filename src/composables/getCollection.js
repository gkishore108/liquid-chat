import { ref } from "vue";
import { projectFireStore } from "../firebase/config";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let collectionRef = projectFireStore
    .collection(collection)
    .orderBy("createdAt");

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      error.value = null;
    },
    (err) => {
      documents.value = null;
      err.message = "could not fect data";
    }
  );

  return { error, documents };
};

export default getCollection;
