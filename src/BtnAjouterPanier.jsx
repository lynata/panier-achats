import './BtnAjouterPanier.scss';
import Badge from '@material-ui/core/Badge';
import { useState } from 'react';

export default function BtnAjouterPanier(props) {
    // console.log("Propriete du bouton :", props);

    // Etat du badge su bouton
    const [btnQte, setBtnQte] = useState(0);
    return (
        <Badge badgeContent={btnQte} color="secondary">
            <button onClick={() => { props.onClick(); setBtnQte(btnQte+1); }} className="BtnAjouterPanier">
                Ajouter au panier
        </button>
        </Badge>
    )
}