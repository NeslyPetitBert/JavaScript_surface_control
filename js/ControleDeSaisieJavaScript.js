var btResultat = document.getElementById("btResultat");
btResultat.addEventListener("click", afficher);

// début de fonction 
/* GestionDesErreursDeSaisieV2.js
 * 
 * @param {type} resultatNok
 * @returns {undefined}
 */
function afficher(resultatNok) {

    // Récupération des valeurs saisies par l'utilisateur depuis le formulaire HTML (pour la gestions des jours).
    var numeroJourDeDepart = document.getElementById("numeroJourDeDepart"); // l'objet contenant le jour de départ en chiffre
    var nombreDeJoursAttendu = document.getElementById("nombreDeJoursAttendu"); // l'objet contenant jour attendu en chiffre

    // Récupération des valeurs saisies par l'utilisateur depuis le formulaire HTML (pour la gestions des mois).
    var numeroMoisDeDepart = document.getElementById("numeroMoisDeDepart"); // l'objet contenant le mois de départ en chiffre
    var nombreMoisAttendu = document.getElementById("nombreMoisAttendu"); // l'objet contenant mois attendu en chiffre

    var tableauDesMois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    // Récupération des valeurs saisies par l'utilisateur depuis le formulaire HTML (pour la gestions des années).
    var anneeDeDepart = document.getElementById("anneeDeDepart"); // l'objet contenant l'année de départ en chiffre
    var anneeAttendue = new Date();


    // résultats
    // variable contant le label resultatErreur. Elle permet de communiquer avec l'utilisateur en lui affichant des messages d'erreur si le formulaire est mal rempli.
    var erreurDeSaisie = document.getElementById("resultatErreur");

    // Object contenant la mise en forme du message d'erreur stocké dans la variable : erreurDeSaisie.
    var errorStyle = {

        errorStyleColorRed: function () {

            erreurDeSaisie.style.color = "red";
        },

        errorStyleColorGreen: function () {

            erreurDeSaisie.style.color = "green";
        },

        errorStyleSuite: function () {

            erreurDeSaisie.style.fontWeight = "bold";
            erreurDeSaisie.style.backgroundColor = "#D3D3D8";
            erreurDeSaisie.style.display = "inline-block";
            erreurDeSaisie.style.textAlign = "center";
            erreurDeSaisie.style.paddingTop = "25px";
            erreurDeSaisie.style.width = "700px";
            erreurDeSaisie.style.height = "50px";
        }

    };

    // variables pour la gestion des résultat des 3 boucles for, si les valeurs saisies par l'utilisateur sont bonnes.
    var resultatForSelectNumerosJour = "";
    var resultatForSelectNumerosMois = "";
    var resultatForSelectNomsMois = "";
    var resultatForSelectAnnee = "";

    //Expression régulières pour vérifier les valeurs saisies dans les champs input.
    var regexnbDJD = /^[1-9]$|^1[0-9]$|^2[0-9]$|^3[0]$/; // valeurs acceptées pour le jour de départ (valeur comprise entre 1 et 30)
    var regexnbDJA = /^[1-9]$|^1[0-9]$|^2[0-9]$|^3[0-1]$/; // valeurs acceptées pour le nombre de jours attendu (valeur comprise entre 1 et 31)
    var regexnbDMD = /^[1-9]$|^1[0-1]$/; // valeurs acceptées pour le mois de départ (valeur comprise entre 1 et 11)
    var regexnbDMA = /^[1-9]$|^1[0-2]$/; // // valeurs acceptées pour le nombre de mois attendu (valeur comprise entre 1 et12)
    var regexnbDAD = /^[0-9]/; // Valeurs acceptées pour l'année de départ. (valeur comprise entre 1970 à N-1)

    // début de conditions (si toutes les valeurs saisies sont nulles alors le script basculera dans le preventDefault pour arrêter l'vènement). même principe pour les autres conditions(validity.valueMissing). 
    if (numeroJourDeDepart.validity.valueMissing && nombreDeJoursAttendu.validity.valueMissing &&
            numeroMoisDeDepart.validity.valueMissing && nombreMoisAttendu.validity.valueMissing &&
            anneeDeDepart.validity.valueMissing) {

        resultatNok.preventDefault;
        // Ici, affichage du message d'erreur correspondant à tous les champs sont vides.
        erreurDeSaisie.innerHTML = "Tous les champs sont obligatoires.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (numeroJourDeDepart.validity.valueMissing) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le numéro du jour de départ n'est pas renseigné.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (nombreDeJoursAttendu.validity.valueMissing) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le nombre de jours attendu n'est pas renseigné.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();

    } else if (numeroMoisDeDepart.validity.valueMissing) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le numéro du mois de départ n'est pas renseigné.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (nombreMoisAttendu.validity.valueMissing) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le nombre de mois attendu n'est pas renseigné.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (anneeDeDepart.validity.valueMissing) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "L'année de départ n'est pas renseignée.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if // Tests regex, vérifie le type et format de valeurs acceptées et comparaison de chaque valeur saisie par rapport au format définit dans le regex. Si les valeurs sont fausses, le script bascule dans le preventDefault() pour arrêter l'évènement et affiche l'erreur correspondante, si elles sont bonnes alors il valide et poursuit.
            (regexnbDJD.test(numeroJourDeDepart.value.trim()) === false) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le format pour le jour de départ n'est pas respecté (valeurs autorisées : nombres de 1 à 30).";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (regexnbDJA.test(nombreDeJoursAttendu.value.trim()) === false) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le format pour le nombre de jour attendu n'est pas respecté (valeurs autorisées : nombres de  1 à 31).";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (regexnbDMD.test(numeroMoisDeDepart.value.trim()) === false) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le format pour le mois de départ n'est pas respecté (valeurs autorisées : nombres de  1 à 11).";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (regexnbDMA.test(nombreMoisAttendu.value.trim()) === false) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le format pour le nombre de mois attendu n'est pas respecté (valeurs autorisées : nombres de 1 à 12).";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (regexnbDAD.test(anneeDeDepart.value.trim()) === false) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le format de l'année de départ n'est pas respecté (exemple de valeurs autorisées : de 1970 à N-1).";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if // pour empecher à l'utilisateur de saisir un jour de départ plus grand que le nombre de jour attendu.
            (parseInt(numeroJourDeDepart.value.trim()) >= parseInt(nombreDeJoursAttendu.value.trim())) {
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le numéro du jour de départ ne peut pas être plus grand ou égale au nombre de jours attendu.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (parseInt(numeroMoisDeDepart.value.trim()) >= parseInt(nombreMoisAttendu.value.trim())) {// pour empecher à l'utilisateur de saisir un mois de départ plus grand que le nombre de mois attendu.
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "Le numéro du mois de départ ne peut pas être plus grand ou égale au nombre de mois attendu.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (parseInt(anneeDeDepart.value.trim()) < 1970) { // année minimale fixée à 1970. Il ne sera pas possible à l'utilisateur de saisir une année inférieur à 1970.

        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "L'année ne peut pas être inférieur à 1970.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if (parseInt(anneeDeDepart.value.trim()) >= parseInt(anneeAttendue.getFullYear())) {// pour empecher à l'utilisateur de saisir une année de départ plus grande que l'année attendue.
        resultatNok.preventDefault;
        erreurDeSaisie.innerHTML = "L'année de départ ne peut pas être supérieur ou égale à l'année en cours.";
        errorStyle.errorStyleColorRed();
        errorStyle.errorStyleSuite();
    } else if // Si toutes ces conditions sont réunies, alors les 3 boucles suivants seront exécutées et les résultats seront affichés après le message : Voici les les résultats de votre recherche.
            ((parseInt(numeroJourDeDepart.value.trim()) < parseInt(nombreDeJoursAttendu.value.trim())) 
                    && (parseInt(numeroMoisDeDepart.value.trim()) < parseInt(nombreMoisAttendu.value.trim())) 
                    && (parseInt(anneeDeDepart.value.trim()) < parseInt(anneeAttendue.getFullYear()))) {

        if ((regexnbDJD.test(numeroJourDeDepart.value.trim()) === true 
                && regexnbDJA.test(nombreDeJoursAttendu.value.trim()) === true) 
                && (regexnbDMD.test(numeroMoisDeDepart.value.trim()) === true 
                && regexnbDMA.test(nombreMoisAttendu.value.trim()) === true) 
                && (regexnbDAD.test(anneeDeDepart.value.trim()) === true)) {
            erreurDeSaisie.innerHTML = "Voici les les résultats de votre recherche.";
            errorStyle.errorStyleColorGreen();
            errorStyle.errorStyleSuite();

            // début for jours.
            for (var compteur = parseInt(numeroJourDeDepart.value.trim()); compteur <= parseInt(nombreDeJoursAttendu.value.trim()); compteur++) {
                resultatForSelectNumerosJour += "<option value = '" + compteur + "'>" + compteur + "</option>"; // résultat dans un select

                // Affichage des résultats.
                document.getElementById("resultatForSelectNumerosJour").innerHTML = resultatForSelectNumerosJour; // Dans une select
            }// fin for jours.

            // début for mois.
            for (var compteur = parseInt(numeroMoisDeDepart.value.trim()); compteur <= parseInt(nombreMoisAttendu.value.trim()); compteur++) {
                resultatForSelectNomsMois += "<option value = '" + compteur + "'>" + tableauDesMois[compteur - 1] + "</option>"; // résultat dans un select
                resultatForSelectNumerosMois += "<option value = '" + compteur + "'>" + compteur + "</option>";

                // Affichage des résultats.
                document.getElementById("resultatForSelectNomsMois").innerHTML = resultatForSelectNomsMois; // Dans une select
                document.getElementById("resultatForSelectNumerosMois").innerHTML = resultatForSelectNumerosMois;
            }// fin for mois.

            // début for mois.
            for (var compteur = parseInt(anneeDeDepart.value.trim()); compteur <= parseInt(anneeAttendue.getFullYear()); compteur++) {
                resultatForSelectAnnee += "<option value = '" + compteur + "'>" + compteur + "</option>";

                // Affichage des résultats.
                document.getElementById("resultatForSelectAnnee").innerHTML = resultatForSelectAnnee;
            }// fin for mois.

            // Affichage des résultats : 

            // affichage du containeur contenant les résultats.
            document.getElementById("containeurFormS").style.display = "block";
        }
    }
}
;















