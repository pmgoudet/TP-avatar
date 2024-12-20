const arrowLeft = document.querySelectorAll('.btn-arrow')[0];
const arrowRight = document.querySelectorAll('.btn-arrow')[1];
const hair = document.querySelector('.hair');
const colors = document.querySelectorAll('.box');

let tabColor = ['black', 'blond', 'turquoise']

// variables pour garder la couleur et modèle actuels des cheveux
let num = 1;
let hairColor = tabColor[2];

//initialisation de l'opacity
arrowLeft.style.opacity = '0.5';


// fonctionnement de la fleche gauche
arrowLeft.addEventListener('click', () => { 
    if (num > 1) { // condition pour se mantenir entre 1 et 3 (modèles de cheveux)
        num --; // change la variable du numéro des cheveux
        hair.src = `img/hair-${hairColor}-${num}.png`; // applique les variables actuelles à la photo
        arrowRight.style.opacity = '1'; // correction de l'opacity
    }
    if (num == 1) {
        arrowLeft.style.opacity = '0.5';
    }
})

// fonctionnement de la fleche droite
arrowRight.addEventListener('click', () => { 
    if (num < 3) {
        num ++;
        hair.src = `img/hair-${hairColor}-${num}.png`;
        arrowLeft.style.opacity = '1';
    }
    if (num == 3) {
        arrowRight.style.opacity = '0.5';
    } 
})

// fonctionnement des boutons de couleur
for (let i=0; i<colors.length; i++) { // boucle pour acceder aux 3 boutons de couleur, vu que le code se repète à chaque fois.
    colors[i].addEventListener('click', () => {
        hair.src = `img/hair-${tabColor[i]}-${num}.png`;
    })
}







/*
CÓDIGO CORRETO


const arrowLeft = document.querySelectorAll('.btn-arrow')[0];
const arrowRight = document.querySelectorAll('.btn-arrow')[1];
const hair = document.querySelector('.hair');
const colors = document.querySelectorAll('.box');

let num = 1;
let hairColor = 'black';

arrowLeft.style.opacity = '0.5';

arrowRight.addEventListener('click', () => {
    if (num < 3) {
        num ++;
        hair.src = `img/hair-${hairColor}-${num}.png`;
        arrowLeft.style.opacity = '1';
    }
    if (num == 3) {
        arrowRight.style.opacity = '0.5';
    } 
})

arrowLeft.addEventListener('click', () => {
    
    if (num > 1) {
        num --;
        hair.src = `img/hair-${hairColor}-${num}.png`;
        arrowRight.style.opacity = '1';
    }
    if (num == 1) {
        arrowLeft.style.opacity = '0.5';
    }
})

colors[0].addEventListener('click', () => {
    hairColor = 'black';
    hair.src = `img/hair-${hairColor}-${num}.png`;
})

colors[1].addEventListener('click', () => {
    hairColor = 'blond';
    hair.src = `img/hair-${hairColor}-${num}.png`;
})

colors[2].addEventListener('click', () => {
    hairColor = 'turquoise';
    hair.src = `img/hair-${hairColor}-${num}.png`;
})*/