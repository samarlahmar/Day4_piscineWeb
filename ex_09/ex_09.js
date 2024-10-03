let weight = 1; 
const volume = 10; 

function updateSquare(square, text) {
    weight += 1; 
    text.innerHTML= `${weight} kg`; 

    const submergedWeight = weight - volume; 

    if (submergedWeight <= 0) {
        square.style.transform = 'translateY(0)';
    } else {
        const newPosition = submergedWeight * 30; 
        square.style.transform = `translateY(${newPosition}px)`; 
        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const square = document.querySelector('.ex_09').children[2]; 
    const text = document.querySelector('.ex_09').children[1]
    square.addEventListener('click', function() {
        updateSquare(square, text); 
    });
    
});
