// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDoc, doc, deleteDoc, updateDoc, getFirestore, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "bbdd-poketienda.firebaseapp.com",
    projectId: "bbdd-poketienda",
    storageBucket: "bbdd-poketienda.appspot.com",
    messagingSenderId: "630239421950",
    appId: "1:630239421950:web:6437901590d7d202c4ccaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Fn Cargar datos en DB
async function cargarBBDD() {
    const resp = await fetch("../src/Componentes/mock/Productos.json");
    console.log('resp :>> ', resp);
    const data = await resp.json();
    console.log('data :>> ', data);
    data.forEach(async (dataProd) => {
        await addDoc(collection(db, "Items"), {
            title: dataProd.title,
            price: dataProd.price,
            description: dataProd.description,
            category: dataProd.category,
            image: dataProd.image,
            stock: dataProd.stock,
        });
    });
}



export { db, app, cargarBBDD };
