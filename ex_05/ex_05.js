// Function to show the custom popup
function showPopup() {

    var popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed; 
        inset: 0; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5); 
        z-index: 100 ;
    `;

    var popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background-color: #fff; 
        padding: 20px; 
    `;
    popupContent.innerHTML = '<h3>This page says</h3> <p>Thanks!</p>';

    // Create the OK button
    var okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.cssText = `
        margin-top: 20px; 
        padding: 10px 20px; 
        background-color: red; 
        color: #fff; 
        border: none; 
        border-radius: 20px;
    `;

    okButton.addEventListener('click', function() {
        document.body.removeChild(popup);
    });
    
    popupContent.appendChild(okButton);
    popup.appendChild(popupContent);

    
    document.body.appendChild(popup);
}

document.addEventListener("DOMContentLoaded", function() {
    var addToCartButton = document.getElementById("addToCart");
    addToCartButton.addEventListener('click', function(event) {
        showPopup();
    });
});
