import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';

export default function Entete(props) {
    // const etatCacherSommairePanier = useState(true);
    // console.log("La variable statCacherSomPan : " + etatCacherSommairePanier);

    // // Array DESTRUCTURING (decompasition des tableaux et objets)
    
    // const valeurEtatCacher = etatCacherSommairePanier[0];
    // console.log("valeur etat : " , valeurEtatCacher);

    // const fonctionSetEtatCacher = etatCacherSommairePanier[0];
    // console.log("fonction qui modifie letat : " , fonctionSetEtatCacher);

    // avec la decompasition de tableau, cest plus facile!
    const[cacheSommaire, setCacheSommaire] = useState(true);
    // console.log("etat du sp :", cacheSommaire);

    // const basculerSommairePanier = function() {
    //     setCacheSommaire(cacheSommaire?false:true);
    // }
    const basculerSommairePanier = () => setCacheSommaire? false : true;

    return (
        <header className="Entete">
            <div>Logo</div>
            <ul className="navPrincipale">
                <li>Produit</li>
                <li>A propos de nous</li>
                <li>Contactez-nous</li>
            </ul>
            <ul className="navUtil">
                <li>
                    <Badge onClick={basculerSommairePanier} badgeContent="5" color="primary">
                        <ShoppingCartIcon/> 
                    </Badge>
                    <SommairePanier cacher={cacheSommaire}/>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    );
}