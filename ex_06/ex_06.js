document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener('resize', function() {
        alert("Size matters");
    });

    var PhoneImg = document.querySelector('img');  
    PhoneImg.addEventListener('mouseover', function() {
            alert("Pretty, isn't it?");
        });
    }


);