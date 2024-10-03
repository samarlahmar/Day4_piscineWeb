
document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.getElementsByTagName("p");
    text = 0 ;
    for (var paragraph of paragraphs) { 
        paragraph.innerHTML = text ;
        text += 1 ;
    }

});
