(this["webpackJsonppanier-achats"]=this["webpackJsonppanier-achats"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('[{"id":"prd0001","nom":"T-Shirt a col rond","prix":10.99},{"id":"prd0002","nom":"T-Shirt en col V","prix":12.95},{"id":"prd0003","nom":"Un T-Shirt simple","prix":14.5},{"id":"prd0004","nom":"Chandail pour femme","prix":17.95},{"id":"prd0005","nom":"Chandail a manche longue","prix":24.67},{"id":"prd0006","nom":"Pull","prix":10.95}]')},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),i=c.n(r),s=c(17),a=c.n(s),o=c(14),j=(c(37),c(38),c(8)),l=(c(39),c(27)),d=c.n(l),u=c(68);c(40);function b(e){var t=Object(j.a)(e.etatPanier,2),c=t[0],r=(t[1],function(e){var t={},c=Object.values(e);t.nbArticles=c.lenght,t.qtArticles=c.reduce((function(e,t){return t.qte+e}),0);var n=c.reduce((function(e,t){return t.prix*t.qte+e}),0);t.st=n.toFixed(2);var r=.05*n;t.tps=r.toFixed(2);var i=.09975*n;return t.tvq=i.toFixed(2),t.total=(n+r+i).toFixed(2),t}(c));return Object(n.jsxs)("div",{className:"SommairePanier"+(e.cacher?" cacher":""),children:[Object(n.jsxs)("span",{className:"nbArticles",children:["Articles differents : ",r.nbArticles," "]}),Object(n.jsxs)("span",{className:"qteArticles",children:["Articles total : ",r.qtArticles," "]}),Object(n.jsxs)("span",{className:"sousTotal",children:["Sous-total : ",r.st," "]}),Object(n.jsxs)("span",{className:"tps",children:["TPS : ",r.tps," "]}),Object(n.jsxs)("span",{className:"tvq",children:["TVQ : ",r.tvq," "]}),Object(n.jsxs)("span",{className:"total",children:["total : ",r.total," "]})]})}function x(e){var t=Object(r.useState)(!0),c=Object(j.a)(t,2),i=c[0],s=c[1],a=Object(j.a)(e.etatPanier,2),l=a[0],x=(a[1],Object.values(l).reduce((function(e,t){return e+t.qte}),0));return Object(n.jsxs)("header",{className:"Entete",children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.b,{to:"/",children:"Logo"})}),Object(n.jsxs)("ul",{className:"navPrincipale",children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/nos-produits",children:"Produit"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/a-propos-de-magasin",children:"A propos de nous"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/contact",children:"Contactez-nous"})})]}),Object(n.jsxs)("ul",{className:"navUtil",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(u.a,{onClick:function(){return s(!i)},badgeContent:x,color:"primary",children:Object(n.jsx)(d.a,{})}),Object(n.jsx)(b,{cacher:i,etatPanier:e.etatPanier})]}),Object(n.jsx)("li",{children:"Mon compte"})]})]})}c(50);function O(e){var t=(new Date).getFullYear();return Object(n.jsxs)("footer",{children:["\xa9 ",t]})}c(51),c(52),c(53);function h(e){return Object(n.jsx)(u.a,{badgeContent:e.qte,color:"secondary",children:Object(n.jsx)("button",{onClick:e.onClick,className:"BtnAjouterPanier "+e.couleur,children:e.texte})})}var p=c(28),m=c.n(p);function f(e){var t=Object(j.a)(e.etatPanier,2),c=t[0],r=t[1];var i="Ajouter au panier",s=0,a="";return c[e.id]&&(i=Object(n.jsx)(m.a,{}),s=c[e.id].qte,a="rouge"),Object(n.jsxs)("li",{className:"Produit",children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"images-produits/"+e.id+".webp",alt:e.nom})}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:e.nom}),Object(n.jsxs)("p",{className:"prix",children:[e.prix," $CA"]}),Object(n.jsx)(h,{onClick:function(){c[e.id]?c[e.id].qte++:c[e.id]={prix:e.prix,qte:1},r(JSON.parse(JSON.stringify(c)))},texte:i,qte:s,couleur:a})]})]})}var v=c(29);var N=function(e){return console.log("Panier dans ListeProduits",e.etatPanier),Object(n.jsxs)("div",{className:"ListeProduits",children:[Object(n.jsx)("h2",{children:"Produits disponbles"}),Object(n.jsx)("ul",{children:v.map((function(t){return Object(n.jsx)(f,{etatPanier:e.etatPanier,id:t.id,nom:t.nom,prix:t.prix},t.id)}))})]})};var P=c(3);function g(){return Object(n.jsxs)("div",{className:"Accueil",children:[Object(n.jsx)("h2",{children:"Magasin"}),Object(n.jsx)("p",{children:"Page d'accueil en contrsuction"})]})}function S(){return Object(n.jsxs)("div",{className:"Apropos",children:[Object(n.jsx)("h2",{children:"A propos de nous"}),Object(n.jsx)("p",{children:"Pblooop"})]})}function A(){return Object(n.jsxs)("div",{className:"Contact",children:[Object(n.jsx)("h2",{children:"Contactez-nous"}),Object(n.jsx)("p",{children:"Formulaire de contact a venir"})]})}function q(e){var t=function(e,t){var c=Object(r.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),n=Object(j.a)(c,2),i=n[0],s=n[1];return Object(r.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(i))}),[i,t]),[i,s]}({},"panier");return Object(n.jsxs)("div",{className:"Page",children:[Object(n.jsx)(x,{etatPanier:t}),Object(n.jsx)("section",{className:"contenuPrincipal",children:Object(n.jsxs)(P.c,{children:[Object(n.jsx)(P.a,{path:"/",component:g,exact:!0}),Object(n.jsx)(P.a,{path:"/nos-produits",children:Object(n.jsx)(N,{etatPanier:t})}),Object(n.jsx)(P.a,{path:"/a-propos-de-magasin",children:Object(n.jsx)(S,{})}),Object(n.jsx)(P.a,{path:"/contact",children:Object(n.jsx)(A,{})})]})}),Object(n.jsx)(O,{})]})}a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(o.a,{basename:"/panier-achats",children:Object(n.jsx)(q,{})})}),document.getElementById("racine"))}},[[55,1,2]]]);
//# sourceMappingURL=main.f33628e1.chunk.js.map