import './SommairePanier.scss';

export default function SommairePanier(props) {
    // console.log("sommaire panier : ", props.etatPanier);
    const [panier, setPanier] = props.etatPanier;
    const infoPanier = retournerInforPanier(panier);
    return (
        <div className={'SommairePanier' + (props.cacher ? ' cacher' : '')}>
            <span className="nbArticles">Articles differents : {infoPanier.nbArticles} </span>
            <span className="qteArticles">Articles total : {infoPanier.qtArticles} </span>
            <span className="sousTotal">Sous-total : {infoPanier.st} </span>
            <span className="tps">TPS : {infoPanier.tps} </span>
            <span className="tvq">TVQ : {infoPanier.tvq} </span>
            <span className="total">total : {infoPanier.total} </span>
        </div>
    );
}

function retournerInforPanier(pan) {
    let info = {}; // {nbArticles : 1, qteArticle: 18, sousTotal : 1232.32}

    // sortir les articles e tles mettre dans un tableau
    let articles = Object.values(pan);
    // console.log(articles);

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
    info.qtArticles = articles.reduce(function(valInit, valCour) {
        return valCour.qte + valInit;
    }, 0);
    // info.qteArticles = articles.reduce((accumulateur, articleCourant) => articleCourant.prix * articleCourant.qte + accumulateur, 0);

    //sous total
    let sousTotal = articles.reduce((accumulateur, articleCourant) => articleCourant.prix * articleCourant.qte + accumulateur, 0);
    info.st = sousTotal.toFixed(2);

    //tps
    let tps = (sousTotal * 0.05);
    info.tps = tps.toFixed(2);

    let tvq = sousTotal * 0.09975;
    info.tvq = tvq.toFixed(2);

    info.total = (sousTotal + tps + tvq).toFixed(2);

    return info;
    // console.log(sousTotal);
}