// Liste of links to display. A link is definied by :
// - its title
// - its URL
// - its author

var linkLists = [
    {
        title: "So Foot",
        url: "http://sofoot.com",
        author: "yann.usaille"
    },
    {
        title: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        author: "paulochon"
    },
    {
        title: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        author: "annie.zette"
    }
];

//
linkLists.forEach(function (linkList) {
   
    var pElt = document.createElement("p");
    pElt.classList.add("link");
  
    var strongElt = document.createElement("strong");
    strongElt.textContent = linkList.titre;
    
    var linkElt = document.createElement("a");
    linkElt.href = linkList.url;    
    linkElt.style.color = "#428bca";
    linkElt.appendChild(strongElt);
    pElt.appendChild(linkElt);
    
    var spanElt = document.createElement("span");
    spanElt.innerHTML = " (" + linkList.url + ") <br/>" + "Added by " + linkList.author;
    pElt.appendChild(spanElt);
    
    document.getElementById("contenu").appendChild(pElt); // Ajout de la liste à la page
 
});