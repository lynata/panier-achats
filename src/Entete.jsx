import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Entete(props) {
    // const etatCacherSommairePanier = useState(true);
    // console.log("La variable statCacherSomPan : " , etatCacherSommairePanier);

    // // Array/Object DESTRUCTURING (decomposition des tableaux et objets)
    
    // const valeurEtatCacher = etatCacherSommairePanier[0];
    // console.log("valeur etat : " , valeurEtatCacher);

    // const fonctionSetEtatCacher = etatCacherSommairePanier[0];
    // console.log("fonction qui modifie letat : " , fonctionSetEtatCacher);

    // avec la decompasition de tableau, cest plus facile!
    const [cacheSommaire, setCacheSommaire] = useState(true);
    // console.log("etat du sp :", cacheSommaire);

    // const basculerSommairePanier = function() {
    //     setCacheSommaire(cacheSommaire?false:true);
    // }
    const basculerSommairePanier = () => setCacheSommaire(!cacheSommaire);

    const [panier, setPanier] = props.etatPanier;
    
    //calculer le nombre darticle total du panier
    const nbArticles = Object.values(panier).reduce((accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0);
    // console.log("tableau des articles dans le panier : ", articlesTab);
    return (
        <header className="Entete">
            <div><Link to="/">Logo</Link></div>
            <ul className="navPrincipale">
                <li><Link to="/nos-produits">Produit</Link></li>
                <li><Link to="/a-propos-de-magasin">A propos de nous</Link></li>
                <li><Link to="/contact">Contactez-nous</Link></li>
            </ul>
            <ul className="navUtil">
                <li>
                    <Badge onClick={basculerSommairePanier} badgeContent={nbArticles} color="primary">
                        <ShoppingCartIcon/> 
                    </Badge>
                    <SommairePanier cacher={cacheSommaire} etatPanier={props.etatPanier}/>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    );
}