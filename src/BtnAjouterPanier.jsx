import './BtnAjouterPanier.scss';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useState } from 'react';

export default function BtnAjouterPanier(props) {
    // console.log("Propriete du bouton :", props);

    // Etat du badge su bouton
    const [btnQte, setBtnQte] = useState(0);
    const [btnText, setBtnTexte] = useState('Ajouter au panier');
    return (
        <Badge badgeContent={btnQte} color="secondary">
            <button onClick={(event) => { props.onClick(); setBtnQte(btnQte+1); setBtnTexte('+'); }} className="BtnAjouterPanier">
                {btnText}
        </button>
        </Badge>
    )
}