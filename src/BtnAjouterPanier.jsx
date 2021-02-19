import './BtnAjouterPanier.scss';
import Badge from '@material-ui/core/Badge'
import { useState } from 'react';

export default function BtnAjouterPanier(props) {
    return (
        <Badge badgeContent={props.qte} color="secondary">
            <button 
                onClick = {props.onClick}
                className= {"BtnAjouterPanier " + (props.couleur)}
                // className= {'BtnAjouterPanier ${props.couleur}'} // template literals
            >
                {props.texte}
            </button>
        </Badge>
    )
}