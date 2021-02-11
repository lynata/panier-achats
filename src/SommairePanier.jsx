import './SommairePanier.scss';

export default function SommairePanier(props) {
    // console.log("sommaire panier : ", props.etatPanier);
    const [panier, setPanier] = props.etatPanier;
    const inforPanier = retournerInforPanier(panier);
    return (
        <div className={'SommairePanier' + (props.cacher?' cacher':'')}>
           <span className="nbArticles">Articles differents : </span>
           <span className="qteArticles">Articles total : </span>
           <span className="sousTotal">Sous-total : </span>
           <span className="tps">TPS : </span>
           <span className="tvq">TVQ : </span>
           <span className="total">total : </span>
        </div>
    );
}

function retournerInforPanier(pan) {
    let info = {}; // {nbArticles : 1, qteArticle: 18, sousTotal : 1232.32}

    // sortir les articles e tles mettre dans un tableau
    let articles = Object.values(pan);
    console.log(articles);

    // nbr aricles differents
    info.nbArticles = articles.lenght;

    // qte articles totale
    //permiere facon

    // let qteTotale = 0;
    // for(let i=0; i<articles.lenght; i++) {
    //     qteTotale += articles[i].qte;
    // }
    // info.qteArticles = qteTotale;

    //meilleure facon

    info.qteArticles = articles.reduce(function(valInit, valCourante) {
        return valCourante.qte + valInit;
    }, 0);

    //sous total
    let sousTotal = articles.reduce((i,c) => c.prix*c.qte + i, 0);

    console.log(sousTotal);
}