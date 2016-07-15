/* 
Contact List Manager by Abel Lifaefi Mbula
*/

//Start

console.log ("Bienvenue dans le gestionnaire de contact!");
var userChoice;
while (userChoice != 0) {
    userChoice = Number(prompt("Que voulez-vous?"));
    console.log("1: Afficher liste de contacts");
    console.log("2: Ajouter un contact");
    console.log("0: Quitter le programme");
}
switch (userChoice){
    case 1:
        console.log("Voici la liste de tous les contacts:");
        
        //Array
        var contactList = {
            //Initialize contact
            init: function(firstName,lastName) {
                this.fileName = firstName;
                this.lastName = lastName;
            },
            //Return description of contact
            describe: function (){
                var description = "Nom:" + this.lastName
                + ", Prénom: " + this.firstName;
                return description;
            }
        };
        var perso1 = Object.create(contactList);
        perso1.init("Carole","Lévisse");
        var perso2 = Object.create(contactList);
        perso2.init("Mélodie","Nelsonne");
        
        break;
    case 2:
        var inputFirst, inputLast;
        inputFirst = promt("Saisissez le prénom");
        inputLast = promt("Saisissez le nom");
        console.log("Le contact a bien été ajouté!")
    default:
        console.log("bye!");
}