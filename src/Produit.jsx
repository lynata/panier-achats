import './Produit.scss';
import BtnAjouterPanier from './BtnAjouterPanier';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function Produit(props) {
    // console.log("Panier dans Produit : " , props.etatPanier);
    const [panier, setPanier] = props.etatPanier;
    /**
     * Ajoute l'article au panier
     */
    function ajouterArticle(){
        if(panier[props.id]) {
            panier[props.id].qte++;
        }
        else{
            panier[props.id] = {prix: props.prix, qte: 1}
        }
        // mntnt il faut changer letat du panuer avec setPanier
        // il faut passer a setPanier un NOUVEL objet (obtenu par clonage)
        setPanier(JSON.parse(JSON.stringify(panier))); 
        // setPanier({...panier})
        // console.log(panier);
    }

    // etat du btn
    let btnTexte = "Ajouter au panier"
    let btnQte = 0;
    let btnCouleurCls = "";
    if(panier[props.id]) {
        btnTexte = <AddShoppingCartIcon/>; //jsx  javascript syntax extension
        btnQte = panier[props.id].qte;
        btnCouleurCls = "rouge";
    }

    return(
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="prix">{props.prix} $CA</p>
                <BtnAjouterPanier onClick={ajouterArticle} 
                    texte={btnTexte}
                    qte={btnQte}
                    couleur={btnCouleurCls}
                />
            </div>
        </li>
    );
}

