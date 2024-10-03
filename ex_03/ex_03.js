
document.addEventListener("DOMContentLoaded", function() {
    var newParagraph = document.createElement("p") ;
    newParagraph.innerHTML = "Now featuring a headphone jack!" ;
    document.getElementById('description').appendChild(newParagraph) ;
});