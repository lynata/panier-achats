import './Produit.scss';
import BtnAjouterPanier from './BtnAjouterPanier';

function Produit(props) {
    return(
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="prix">{props.prix} $CA</p>
                <BtnAjouterPanier/>
            </div>
        </li>
    );
}

export default Produit;