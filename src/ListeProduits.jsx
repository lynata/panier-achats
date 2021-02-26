import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';
import instanceFirebase from 'firebase/app';
import "firebase/firestore";

// code pour integre firebase temporairement
//etape 1 configurtion du projet fb
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBkHd3rUW8dZ5D07SUpNkPG7yMxRuWbdM",
    authDomain: "panier-achat-lt.firebaseapp.com",
    projectId: "panier-achat-lt",
    storageBucket: "panier-achat-lt.appspot.com",
    messagingSenderId: "531000313975",
    appId: "1:531000313975:web:0d939a6510ea7958791e72",
    measurementId: "G-6LD8NJ7390"
};

//etape 2 obtenir une instance de l'api firebase
if(!instanceFirebase.apps.length) {
    instanceFirebase.initializeApp(firebaseConfig);
}

//etape 3 obtenir une instance de la bd firestore
const bd = instanceFirebase.firestore();

//etape 4 exemple decriture et de lecture de donnees

//exemple 1 : ajouter tout les produits du fichiers JSON dans la collection "produits" sur firestore
// tabProduits.forEach(
//     prd => bd.collection("produits").add(prd).then(
//         redDoc => console.log("Le document est ajoute avec identifiant : ", redDoc.id)
//     )
// );

// exemple 2 chercher des documents dans une collection
// bd.collection("produits").where("prix", ">", 15).get().then(
//     reponse => reponse.forEach(
//         article => console.log("Produits plus cher que 15$", article.data())
//     )
// )

//exemple 3 : observer une collection
// pour les chats, games, jeux
bd.collection("produits").onSnapshot(
    snapshot => snapshot.docChanges().forEach(
        changement => {
            if(changement.type == "added"){
                console.log(changement.doc.data());
            }
        }
    )
)

function ListeProduits(props) {
    console.log("Panier dans ListeProduits", props.etatPanier);
    return (
        <div className="ListeProduits">
            <h2>Produits disponbles</h2>
            <ul>
                {
                    tabProduits.map((prd) =>
                        <Produit key={prd.id} 
                        etatPanier={props.etatPanier} 
                        id={prd.id} nom={prd.nom} 
                        prix={prd.prix} />
                    )
                }
            </ul>
        </div>
    );
}

export default ListeProduits;