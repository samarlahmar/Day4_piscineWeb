document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('productName').innerHTML = "Samsung 22";
    document.getElementById('price').innerHTML = "890 €";
    document.getElementById('tag').remove() ;
    var paragraphs = document.getElementsByTagName("p");
    var text = ['Never miss that perfect shot again.', 'Designed to revolutionise video and photography, with beyond cinematic 16K resolution.', 'Get yours now !']
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = text[i];
    }
    var newElement = document.createElement('div');
    newElement.style.cssText = `
        display:flex; 
        flex-direction: row; 
        margin-top: 0;
        align-items: center"
    `;
    newElement.innerHTML = '<h3>In Cart :</h3>  ';
    document.getElementsByClassName('content')[0].appendChild(newElement);
    var text =0 ;
    var PhoneImg = document.querySelector('img').src = "./Samsung22.png";
    var addToCartButton = document.getElementById("addToCart");
    addToCartButton.addEventListener('click', function(event) {
        text ++ ;
        newElement.innerHTML = '<h3>In Cart :</h3>' + '<h3>' +' '+ text + '</h3>';  
    });
   
});
