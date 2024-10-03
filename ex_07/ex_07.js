// Fonction copiée de stackOverflow pour générer une couleur aléatoire
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.addEventListener("DOMContentLoaded", function() {
    var addToCartButton = document.getElementById("addToCart");
    addToCartButton.querySelector('.cart-btn').textContent = 'CHANGE COLOR';
    addToCartButton.querySelector('.cart-btn').addEventListener('click', function(event) {
        document.body.style.backgroundColor = getRandomColor();  
    });
});
