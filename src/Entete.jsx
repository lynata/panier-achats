import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from "@material-ui/core/Badge";

export default function Entete(props) {
    return (
        <header className="Entete">
            <div>Logo</div>
            <ul className="navPrincipale">
                <li>Produit</li>
                <li>A propos de nous</li>
            </ul>
            <ul className="navUtil">
                <li>
                    <Badge badgeContent="5" color="primary">
                        <ShoppingCartIcon/> 
                    </Badge>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    );
}