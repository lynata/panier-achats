import './BtnAjouterPanier.scss';
import Badge from '@material-ui/core/Badge';

export default function BtnAjouterPanier(props) {
    return (
    <Badge badgeContent="2" color="secondary">
        <button className="BtnAjouterPanier">
            Ajouter au panier (2)
        </button>
    </Badge>
    )
}