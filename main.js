        // COMBINAISONS DU JOUEUR

let combinaisonPlayer = [];

        // TABLEAU DES COULEURS POSSIBLES

let tableau = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange'
];

        // COMBINAISON DE L'IA

let combinaison = [];

        // FONCTION DE LA COMBINAISON ALEATOIRE DE L'IA

function colorIA(boxIA,i){
    let box_IA =  document.getElementById(boxIA)       
    let rand = Math.floor(Math.random()*tableau.length);
    let returnValue = tableau[rand];
    combinaison.push(returnValue);
    console.log(combinaison);
    box_IA.style.backgroundColor = combinaison[i];
};
colorIA('box1',0)
colorIA('box2',1)
colorIA('box3',2)
colorIA('box4',3)

        // FONCTION DU CHOIX DES COULEURS DU JOUEUR

function Mycolor(box,sel) {
    let element = document.getElementById(box);
    let select = document.getElementById(sel); 
    if(select.value == "red"){
        element.style.backgroundColor='red';
        combinaisonPlayer.push(select.value);
    }else if(select.value == "blue"){
        element.style.backgroundColor='blue';
        combinaisonPlayer.push(select.value);
    }else if(select.value == "green"){
        element.style.backgroundColor='green';
        combinaisonPlayer.push(select.value);
    }else if(select.value == "orange"){
        element.style.backgroundColor='orange';
        combinaisonPlayer.push(select.value);
    }else if(select.value == "yellow"){
        element.style.backgroundColor='yellow';
        combinaisonPlayer.push(select.value);
    }
    console.log(combinaisonPlayer);
};

        

console.log('combinaison IA ',combinaison)
console.log('combinaison Player ',combinaisonPlayer)

        // BOUCLE SI C'EST LES COULEURS SONT BONNES

function result(e) {
 
    for(let i = 0; i < 4; i++) {
        console.log("Player :",combinaisonPlayer[i], "|| Ordinateur :", combinaison[i])
        let doublon = false
        for(let y = 0; y < 4; y++) {
            if(combinaisonPlayer[i] == combinaison[y] && combinaison[i] != combinaisonPlayer[i]){
                let pignon = document.getElementById(e);
                    pignon.style.backgroundColor='red';
                let doublon = true
                break
            }
        }
        if(combinaison[i] == combinaisonPlayer[i] && doublon == false){
            let pignon = document.getElementById(e);
                pignon.style.backgroundColor='white';
        }
    }
}


