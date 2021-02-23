import { useEffect, useState } from "react";

/**
 * 
 * @param {*} valeurInitial valeur quelconque avec lasquelle eon veut initialiser letat
 * @param {*} etiquetteSl chaine de caractere pour letiquete localstorage
 * 
 * @returns {Array} tableau retournee par useState
 */
export default function useLocalStorageState(valeurInitiale, etiquetteLS) {
    const [etat, setEtat] = useState(
      () => JSON.parse(window.localStorage.getItem(etiquetteLS)) || valeurInitiale
    );
  
    useEffect(
      () => window.localStorage.setItem(etiquetteLS, JSON.stringify(etat)),
      [etat, etiquetteLS]
    );
  
    // Retourner l'état
    return [etat, setEtat];
  }