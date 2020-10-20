//RESOURCE POUR INFO JAVA 
//


// type de variables: number(=1) , string(=lettre) // 

let a = 2; // varibale qui change //
const b = 3; //variable qui ne bouge jamais //

//variables boulian//

let vrai = true;
let faux = false; 


let c = b + b;

const nom ='duc'
const prenom = 'tang'
const nomcomplet = nom + prenom


a +=1

// scope: (environnement) 


function add(a, b){
    const result = a + b;
    return result 
}

const resultofaddition =add(8, 12)

a = 10;

const isequalto20 = a === 20

const eayon = 4.4336566
const roundedRayon = Math


// exercice 

//fonction air d'un rectangle 

    function aire(largeur, longeur) {
        const result = largeur * longeur;
        return result 
    }
//périmetre dun rectangle 

    function perimetre(largeur, longueur){
        const result = (largeur + longueur) * 2;
        return result
    }
//aire dun triangle rectangle 

    function airetriangle(base, hauteur){
        const result = (base * hauteur) / 2;
        return result 
    }

//perimetre dun triangle rectangle 

    function peritriangle(base , hauteur, coté ){
        const result = base + hauteur + coté;
        return result
    }



//convertir les kelvins en celsius 

    function converteur( kelvins){
        const result = kelvins - 273.15;
        return result
    }


//calculer le perimetre d'un cercle 
    
    function cercle(rayon){
    const result = (rayon * Math.PI * 2);
    return result
    }

//calculer l'air d'un cercle 

    function airecercle(rayon){
        const result = (rayon**2 * Math.PI);
        return result
    }

//calculer la monnaie a rendure sur un billet (price,billamount)

    function billet(prix , rendu){
        const result = prix - rendu;
        return result
    }

//calculer le nomber de jour partir en vacances si le prix est Y et budget Y

    function voyage( journee , budget){
        const result = budget / journee;
        return result
    }

//indique true/false si un nombre est divisible par deux 

    function bolean(nombre){
        if(nombre%2 !=0) 
        {
            return false
        }
        else {
            return true
        }
    }


// retirer la premiere lettre d'un string 

        function lettre(string){
          const result = string.slice(1)
          return result 
          
        }

// retirer la derniere lettre d'un string 

function lettrefin(string){
    const result = string.slice(0, -1)
    return result 
    
  }

    console.log(lettrefin('bonjour'));