// On indique le chemin du tableau ou fichier json
fetch('../data.json')
  .then((rep) => {
    // Lorsque la réponse est reçue, elle est convertie en JSON pour pouvoir être manipulée en tant qu'objet JavaScript
    return rep.json();
  })
  .then(donnee => {
    // Une fois les données reçues et converties, elles sont affiché dans la console (pour verifier que ça focntionen bien)
    console.log(donnee);

    // Parcourt chaque produit dans le tableau de données
    donnee.forEach(ingredients => {
      // Appelle la fonction 'afficher' pour afficher les informations du produit dans la page HTML
      afficherIngredients(ingredients);
    });
  });


  /************************FONCTION : AFFICHER UNE PARTIE DE LA RECETTE***********************/

// Rôle : Afficher la recette dans la page HTML 
// Paramètre : "ingredients" 
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)

    function afficherIngredients(recette) {
      
        let difficultes = recette.difficulte
        let portion = recette.portions
        let tempsPreparation = recette.tempPreparation
        let tempsCuisson = recette.tempCuisson

         // Sélection de l'élément du DOM qui contiendra l'affichage     
         let afficherIngredients = document.querySelector(".afficherIngredients");
         let listeIngredients = document.querySelector(".listeIngredients");
         let EtapeParEtape = document.querySelector(".listeIngredients");



//CREATION DE LA PARTIE INFOS A INSERER DANS LE HTML
let infos =        
`<ul>
     <li><span>Difficulte:</span>${difficultes}</li>
                <li><span>Portion:</span>${portion}</li>
                <li><span>Temps de préparation:</span>${tempsPreparation}</li>
                <li><span>Temps de Cuisson:</span>${tempsCuisson}</li>
    </ul>
<div class=" flex bggreen spaceBetween">

<div class="deux">
    <h4>Ingrédient</h4>
    <div class="listeIngredients bgyellow width40 ">
        <ul>           
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
            <li>quantité unité aliment</li>
        </ul>
    </div>
</div>


<div>
    <h4>Etapes</h4>
    <div class="EtapeParEtape bggreenyellow width40 ">
        <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        </ol>

    </div>
</div>

<div class="photoRecette width40">
<img src ="https://images.pexels.com/photos/4349774/pexels-photo-4349774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="le texte alternatif"> 
</div>`

};