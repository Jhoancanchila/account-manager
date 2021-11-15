// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { uuid } from 'uuidv4';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = () => {
  const config = {
    apiKey: "AIzaSyBfVav9rLI-ugPpgNbn28YKDInEdC8uEhw",
    authDomain: "account-manager-81ca3.firebaseapp.com",
    projectId: "account-manager-81ca3",
    storageBucket: "account-manager-81ca3.appspot.com",
    messagingSenderId: "446233481998",
    appId: "1:446233481998:web:14b70cea1a9f8f73fafd5f",
    measurementId: "G-ZJZM5B78LY"
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}


// export const firebaseBuscar = async (collectionABuscar) => {
//   let list = []
//   let consulta = collection(getFirestore(), collectionABuscar)
//   let result = await getDocs(consulta)
//   result.forEach(documento => {
//     let objData = documento.data()
//     list.push(objData)
//   })
//   return list
// }

export async function firebaseBuscar(coleccionABuscar) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccionABuscar);
  let resultado = await getDocs(consulta);
  resultado.forEach(documento => {
    let objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });
  return listado;
}

export function firebaseCrear(coleccion, objeto) {
  objeto.id = uuid();
  let referencia = doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);
}