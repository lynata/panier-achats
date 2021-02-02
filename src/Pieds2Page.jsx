import './Pieds2Page.css';

export default function Pieds2Page(props) {
    // obtenir l'annee courante
    const annee = (new Date()).getFullYear();
    return (
        <footer>
            &copy; {annee}
        </footer>
    );
}