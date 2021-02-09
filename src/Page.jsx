import './Page.scss';
import Entete from './Entete';
import Pieds2Page from './Pieds2Page';
import ListeProduits from './ListeProduits';
import { useState } from 'react';


export default function Page() {

  //exemple de comment je vais stocker les articles dans le panier
  // const testPanier = ({
  //   prd0001 : {prix: 10.99, qte : 1},
  //   prd0005 : {prix: 24.95, qte : 1}
  // })
  
  const [panier, setPanier] = useState({});
  
  return ( //element pour mettre dans linterface
    <div className="Page">
      <Entete/>
      <section className="contenuPrincipal">
        <ListeProduits/>
      </section>
      <Pieds2Page/>
    </div>
  );
}

