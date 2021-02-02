import Entete from './Entete';
import Pieds2Page from './Pieds2Page';
import ListeProduits from './ListeProduits';
import './Page.css';

export default function Page() {
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

