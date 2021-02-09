import './Pieds2Page.scss';

export default function Pieds2Page(props) {
    // obtenir l'annee courante
    const annee = (new Date()).getFullYear();
    return (
        <footer>
            &copy; {annee}
        </footer>
    );
}