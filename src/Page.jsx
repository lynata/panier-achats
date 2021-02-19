import './Page.scss';
import Entete from './Entete';
import Pieds2Page from './Pieds2Page';
import ListeProduits from './ListeProduits';
import { useState, useEffect } from 'react';


export default function Page(props) {

  // const [panier, setPanier] = etatPanier;
  //exemple de comment je vais stocker les articles dans le panier
  // const bonPanier = ({
  //   prd0001 : {prix: 10.99, qte : 1},
  //   prd0005 : {prix: 24.95, qte : 1}
  // })
  
  //lazy initialisation
  const etatPanier = useState(() => {
    const panierLS = window.localStorage.getItem('panier');
    return (panierLS !== null) ? JSON.parse(panierLS) : {};
  }); 
  const [panier, setPanier] = etatPanier;
  
  // sauvegarder le panier dans localstorage
  //useEffect is better
  useEffect(() => {
    window.localStorage.setItem('panier', JSON.stringify(panier))
  }, [panier]); //tableau des deps (dependances)
  // tab vide : execute 1x
  // rien : execute a chaque render
  // avec variable ex [panier] : execute leffect lorsque cette variable change

  return ( //element pour mettre dans linterface
    <div className="Page">
      <Entete etatPanier={etatPanier}/>
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier}/>
      </section>
      <Pieds2Page/>
    </div>
  );
}

